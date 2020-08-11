import React from "react"

import SEO from "../components/seo"
import Layout from "../components/homeLayout"
import Hero from "../components/hero"
import StickyNav from "../components/stickyNav.js"
import ProfileContainer from "../components/profileContainer"
import SectionImage from "../components/sectionImage"
import AngleDivider from "../components/angleDivider"
import WaveDivider from "../components/waveDivider"

import Styles from "../styles/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <header>
        <StickyNav />
      </header>
      <main>
        <Hero />
        <div className={`divider ${Styles.container} ${Styles.divider}`}>
          <h1
            className={`section-title ${Styles.sectionTitle} ${Styles.aboutTitle}`}
          >
            Who We Are
          </h1>
        </div>
        <section className={`about  ${Styles.container} ${Styles.about}`}>
          <AngleDivider fill="#111" />
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

        <section
          className={`profile-container ${Styles.container} ${Styles.profilesContainer}`}
        >
          <WaveDivider fill="#eee" />
          <h1
            className={`section-title ${Styles.sectionTitle} ${Styles.profilesTitle}`}
          >
            Meet the Officers
          </h1>
          <ProfileContainer />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
