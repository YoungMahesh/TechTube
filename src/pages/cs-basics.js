import React from "react"
import Layout from "../layout/layout"
import "./styles/card-styles.scss"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import VideoCard from "../components/video-card/video_card"

export default ({ data }) => {
  const { nodes } = data.allYoutubeCsBasics
  return (
    <Layout>
      <Helmet>
        <title>CS Basics</title>
      </Helmet>
      <div className="page">
        {nodes.map(node => {
          return <VideoCard key={node.id} node={node} />
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query CsBasicsQuery {
    allYoutubeCsBasics {
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
