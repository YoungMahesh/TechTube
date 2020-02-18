import React, { useContext } from "react"
import Layout from "../layout/layout"
import "./styles/card-styles.scss"
import { graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/store"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  const { nodes } = data.allYoutubeTechTalks
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <Layout>
      <Helmet>
        <title>TechTalks</title>
      </Helmet>
      <div className="page">
        {nodes.map(node => {
          const { thumbnails, resourceId } = node.snippet
          return (
            <div
              role="button"
              tabIndex={nodes.indexOf(node)}
              onClick={() =>
                dispatch({ type: "sendUrl", payload: resourceId.videoId })
              }
              onKeyPress={() =>
                dispatch({ type: "sendUrl", payload: resourceId.videoId })
              }
              key={node.id}
              className="card"
            >
              <div className="title">
                {node.snippet.title.substring(0, 20) + "..."}
              </div>
              <div className="thumbnail">
                <img src={thumbnails.high.url} alt="thumbnail" />
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TechTalksQuery {
    allYoutubeTechTalks {
      nodes {
        id
        snippet {
          title
          thumbnails {
            high {
              url
            }
          }
          resourceId {
            videoId
          }
        }
      }
    }
  }
`
