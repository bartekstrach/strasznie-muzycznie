import "./playlist.scss"

import { graphql, useStaticQuery } from "gatsby"

import PlaylistItem from "./playlist.item"
import React from "react"

const Playlists = () => {
  const data = useStaticQuery(graphql`
    query Playlists {
      allMarkdownRemark(sort: { fields: [frontmatter___no], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              no
              youtube
              spotify
            }
          }
        }
      }
    }
  `)

  return (
    <div className="playlist-container">
      {data.allMarkdownRemark.edges.map(pl => (
        <PlaylistItem data={pl} />
      ))}
    </div>
  )
}

export default Playlists
