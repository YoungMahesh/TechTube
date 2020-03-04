import React from "react"
import Layout from "../layout/layout"
import "./styles/card-styles.scss"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import VideoCard from "../components/video-card/video_card"

export default ({ data }) => {
  const { nodes } = data.allYoutubeCssGrid
  return (
    <Layout>
      <Helmet>
        <title>CSS Grid</title>
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
  query CssGridQuery {
    allYoutubeCssGrid {
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
