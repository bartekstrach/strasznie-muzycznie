import "./404.scss"

import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="• 404 • Not found" />
    <div className="not-found-page-container">
      <div className="not-found-page-content">
        <h1>404 • Not found</h1>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
          height="576"
          src="https://www.youtube.com/embed/izGwDsrQ1eQ"
          width="1024"
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
