import React from "react"

import SEO from "../components/seo"
import Layout from "../components/homeLayout"
import Hero from "../components/hero"
import HomeNav from "../components/homeNav.js"
import ProfileContainer from "../components/profileContainer"
import SectionImage from "../components/sectionImage"
import Sponsors from "../components/sponsors"
import AngleDivider from "../components/angleDivider"
import WaveDivider from "../components/waveDivider"
import WaveOpacityDivider from "../components/waveOpacityDivider"

import Styles from "../styles/index.module.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <header>
        <HomeNav />
      </header>
      <main>
        <Hero />
        <div
          className={`divider ${Styles.titleContainer} ${Styles.aboutTitleContainer}`}
        >
          <h1
            className={`section-title ${Styles.sectionTitle} ${Styles.aboutTitle}`}
          >
            Who We Are
          </h1>
        </div>
        <section
          className={`about-section  ${Styles.section} ${Styles.aboutSection}`}
        >
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
          className={`profile-section ${Styles.section} ${Styles.profilesSection}`}
        >
          <WaveDivider fill="#eee" />
          <h1
            className={`section-title ${Styles.sectionTitle} ${Styles.profilesTitle}`}
          >
            Meet the Officers
          </h1>
          <ProfileContainer />
        </section>

        <section
          className={`sponsors-section ${Styles.section} ${Styles.sponsorsSection}`}
        >
          <WaveOpacityDivider fill="#007155" />
          <div className={Styles.sponsorsContainer}>
            <h1
              className={`section-title ${Styles.sectionTitle} ${Styles.sponsorsTitle}`}
            >
              Our Sponsors
            </h1>
            <Sponsors />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
