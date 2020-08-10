import React from "react"
import Layout from "./layout"
import Footer from "./footer"

const HomeLayout = ({ children }) => {
  return (
    <Layout>
      {children}
      <Footer />
    </Layout>
  )
}

export default HomeLayout
