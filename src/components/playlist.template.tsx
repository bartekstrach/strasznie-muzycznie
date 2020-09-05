import "./playlist.template.scss"

import { Link, graphql } from "gatsby"

import Image from "./image"
import Layout from "./layout"
import React from "react"
import SEO from "./seo"
import SpotifyIcon from "../content/icons/spotify.inline.svg"
import YouTubeIcon from "../content/icons/youtube.inline.svg"

export default function PlaylistTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title={`• ${frontmatter.no} • ${frontmatter.title}`} />
      <div className="playlist-template-container">
        <div className="playlist-template-content">
          <div className="playlist-template-photo">
            <Image filename={`${frontmatter.no}.jpg`} />
          </div>
          <div className="playlist-template-details">
            <div className="playlist-template-details-header">
              <h2>{`${frontmatter.no} • ${frontmatter.title}`}</h2>
              <h4>{frontmatter.date}</h4>
            </div>
            <div className="playlist-template-links">
              {frontmatter.spotify !== "-" && (
                <>
                  <Link to={frontmatter.spotify}>
                    <SpotifyIcon />
                  </Link>
                  <div className="spacer" />
                </>
              )}
              <Link to={frontmatter.youtube}>
                <YouTubeIcon />
              </Link>
            </div>
            <br />
            <div className="playlist-template-tracks">
              {frontmatter.tracks?.map(track => (
                <>
                  {track}
                  <br />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        no
        slug
        spotify
        title
        tracks
        youtube
      }
    }
  }
`
