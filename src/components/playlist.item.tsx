import "./playlist.item.scss"

import Image from "./image"
import InfoIcon from "../content/icons/info.inline.svg"
import { Link } from "gatsby"
import React from "react"
import SpotifyIcon from "../content/icons/spotify.inline.svg"
import YouTubeIcon from "../content/icons/youtube.inline.svg"

export default function PlaylistItem({ data }) {
  const { node } = data
  const { frontmatter } = node

  return (
    <div className="playlist-item-container">
      <div className="playlist-item-photo">
        <Image filename={`${frontmatter.no}.jpg`} />
      </div>
      <div className="playlist-item-details">
        <h2>{`${frontmatter.no} • ${frontmatter.title}`}</h2>
        <h5>{frontmatter.date}</h5>
        <div className="playlist-item-links">
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
          <div className="spacer" />
          <Link to={frontmatter.slug}>
            <InfoIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
