import React from "react"
import Layout from "../components/layout"
import Footer from "./footer"
import Nav from "./primaryNav"

const PrimaryLayout = ({ children }) => {
  return (
    <Layout>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <Footer />
    </Layout>
  )
}

export default PrimaryLayout
