import React, { useContext } from "react"
import "./videoCard.scss"
import { GlobalDispatchContext } from "../../context/store"

// read about -> tabIndex={nodes.indexOf(node)}
const VideoCard = ({ node }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const { thumbnails, resourceId } = node.snippet
  return (
    <div
      role="button"
      tabIndex={node.id}
      onClick={() => dispatch({ type: "sendUrl", payload: resourceId.videoId })}
      onKeyPress={() =>
        dispatch({ type: "sendUrl", payload: resourceId.videoId })
      }
      className="card"
    >
      <div className="title">{node.snippet.title.substring(0, 20) + "..."}</div>
      <div className="thumbnail">
        <img src={thumbnails.high.url} alt="thumbnail" />
      </div>
    </div>
  )
}

export default VideoCard
