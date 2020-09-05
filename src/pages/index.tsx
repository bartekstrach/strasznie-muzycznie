import "./index.scss"

import Layout from "../components/layout"
import Playlists from "../components/playlists"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title=" " />
    <Playlists />
  </Layout>
)

export default IndexPage
