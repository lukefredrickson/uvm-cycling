import React from "react"
import Layout from "../components/layout"
import Footer from "./footer"

const PrimaryLayout = ({ children }) => {
  return (
    <Layout>
      <header>
        <nav></nav>
      </header>
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default PrimaryLayout
