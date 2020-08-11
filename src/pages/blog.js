import React from "react"

import Layout from "../components/primaryLayout"
import SEO from "../components/seo"

import Styles from "../styles/index.module.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Calendar" />
    <section className={`about  ${Styles.container} ${Styles.about}`}></section>
  </Layout>
)

export default SecondPage
