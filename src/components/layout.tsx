import "./layout.scss"

import { graphql, useStaticQuery } from "gatsby"

import Background from "./background"
import Header from "./header"
import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Background />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="layout-content">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
