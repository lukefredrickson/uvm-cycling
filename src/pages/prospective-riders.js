import React from "react"
import SectionImage from "../components/sectionImage"

import Layout from "../components/primaryLayout"
import SEO from "../components/seo"

import Styles from "../styles/index.module.css"

const ProspectiveRiders = () => (
  <Layout>
    <SEO
      title="Prospective Riders"
      description="Information for prospective riders of UVM Cycling. Learn about our racing seasons, how to get involved, what to expect on a race weekend, and more."
    />
    <section className={`about  ${Styles.container} ${Styles.about}`}>
      <SectionImage
        filename="team-1.jpg"
        left={true}
        header="Student run, student funded."
        body="We do more with less, and we're pretty proud of it."
      />
      <SectionImage
        filename="mtb-nats.jpg"
        left={false}
        header="Dazzling. Dauntless. Delectable."
        body="Modern cycling may be a science, but winning is nothing without panache. We wear our hearts on our sleeves, and our jorts short enough to risk public exposure."
      />
      <SectionImage
        filename="send-it.jpg"
        left={true}
        header="A force of nature."
        body="Reigning National Champions for Cyclocross and Eastern Conference Champions for MTB."
      />
    </section>
  </Layout>
)

export default ProspectiveRiders
