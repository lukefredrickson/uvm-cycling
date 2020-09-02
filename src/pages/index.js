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
import SectionStyles from "../styles/sections.module.css"

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
          className={`divider ${SectionStyles.titleContainer} ${Styles.aboutTitleContainer}`}
        >
          <h1
            className={`section-title ${SectionStyles.sectionTitle} ${Styles.aboutTitle}`}
          >
            Who We Are
          </h1>
        </div>
        <section
          className={`about-section  ${SectionStyles.section} ${Styles.aboutSection}`}
        >
          <AngleDivider fill="#222" />
          <SectionImage
            filename="team-backlit.jpg"
            left={true}
            header="Student Run, Seriously Rad"
            body="UVM Cycling is a student run club team dedicated to spreading, growing, and competing in the sport of cycling. We're a team of inclusive and rad riders who compete in road cycling, cyclocross, and mountain biking. On the team you'll find casual cyclists, hardcore racers, and everything in between."
          />
          <SectionImage
            filename="mtb-nats.jpg"
            left={false}
            header="A Force of Nature"
            body="Reigning collegiate club national champions for cyclocross, D2 collegiate club national champions for mountain biking, and overall conference champions for both cyclocross and mountain biking for many years in a row."
          />
          <SectionImage
            filename="mtb-action-2.jpg"
            left={true}
            header="Dazzling and Dauntless"
            body="Modern cycling may be a science, but winning is nothing without panache. We wear our hearts on our sleeves, and our jorts short enough to risk public exposure. All abilities are welcome to join us—an enthusiasm for bikes is all we require."
          />
        </section>

        <section
          className={`profile-section ${SectionStyles.section} ${Styles.profilesSection}`}
        >
          <WaveDivider fill="#fff" />
          <h1
            className={`section-title ${SectionStyles.sectionTitle} ${Styles.profilesTitle}`}
          >
            Meet the Officers
          </h1>
          <ProfileContainer />
        </section>

        <section
          className={`sponsors-section ${SectionStyles.section} ${Styles.sponsorsSection}`}
        >
          <WaveOpacityDivider fill="#007155" />
          <div className={Styles.sponsorsContainer}>
            <h1
              className={`section-title ${SectionStyles.sectionTitle} ${Styles.sponsorsTitle}`}
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
