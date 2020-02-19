const fetch = require("node-fetch")

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Helper function that processes a item to match Gatsby's node structure
  const processItem = (item, name) => {
    const nodeId = createNodeId(`youtube-item-${item.id}`)
    const nodeContent = JSON.stringify(item)
    const nodeData = Object.assign({}, item, {
      idG: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Youtube${name}`,
        content: nodeContent,
        contentDigest: createContentDigest(item),
      },
    })
    return nodeData
  }

  const { kind, API_KEY, id, name } = configOptions
  const kindTypes = {
    playlists: "channelId",
    playlistItems: "playlistId",
  }
  const idType = kindTypes[kind]

  const apiUrl = `https://www.googleapis.com/youtube/v3/${kind}?part=id,snippet,contentDetails&${idType}=${id}&key=${API_KEY}&maxResults=50`
  //`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCGdpLgMhkN2hKIcqno18aCQ&key=AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII`

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.items.forEach(item => {
          // Process the item data to match the structure of a Gatsby node
          const nodeData = processItem(item, name)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}
