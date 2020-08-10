import React from "react"

import SEO from "../components/seo"
import Layout from "../components/homeLayout"
import Hero from "../components/hero"
import StickyNav from "../components/stickyNav.js"
import ProfileContainer from "../components/profileContainer"
import SectionImage from "../components/sectionImage"

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
          <div className={`${Styles.angleDivider}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className={`${Styles.shapeFill}`}
              ></path>
            </svg>
          </div>
          <SectionImage
            filename="team-1.jpg"
            left={true}
            header="Student run, student funded."
            body="We do more with less, and we're pretty proud of it."
          />
          <SectionImage
            filename="mtb-nats.jpg"
            left={false}
            header="Modern cycling may be a science..."
            body="...but winning is nothing without panache. We wear our hearts on our sleeves, and our jorts short enough to risk public exposure."
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
          <div className={`wave-divider-1 ${Styles.waveDivider1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={`shape-fill ${Styles.shapeFill}`}
              ></path>
            </svg>
          </div>
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
