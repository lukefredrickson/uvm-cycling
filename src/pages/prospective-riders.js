import React from "react"
import SectionImage from "../components/sectionImage"

import Layout from "../components/primaryLayout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"

import Styles from "../styles/prospectiveRiders.module.css"
import SectionStyles from "../styles/sections.module.css"
import AngleDivider from "../components/angleDivider"

const ProspectiveRiders = () => {
  const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mtb-action-1-tint.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundFluidImageStack = [
    image.placeholderImage.childImageSharp.fluid,
  ].reverse()

  return (
    <Layout>
      <SEO
        title="Prospective Riders"
        description="Information for prospective riders of UVM Cycling. Learn about our racing seasons, how to get involved, what to expect on a race weekend, and more."
      />
      <main>
        <Img
          className={`hero-image ${SectionStyles.headerImage}`}
          fluid={backgroundFluidImageStack}
        >
          <h1>Prospective Riders</h1>
        </Img>
        <div
          className={`divider ${SectionStyles.titleContainer} ${Styles.seasonsTitleContainer}`}
        >
          <h1
            className={`section-title ${SectionStyles.sectionTitle} ${Styles.seasonsTitle}`}
          >
            Racing Seasons
          </h1>
        </div>
        <section
          className={`about  ${SectionStyles.section} ${Styles.seasons}`}
        >
          <AngleDivider fill="#222" />
          <SectionImage
            filename="mountain-season.jpg"
            left={false}
            header="Mountain"
            body="Mountain season comes in the early fall, just as school is getting started. We generally have 4-5 different race weekends taking place throughout New England, culminating in a National Championships. Each weekend consists of 4 different races: Cross Country, Shorttrack, Dual Slalom/Enduro, and Downhill. Athletes can compete in as many or as few of these races as they would like in several different categories. Racers are divided into Men’s A, B, and C or into Women’s A or B classes. These races are fast and wild as the UVM racers dominate every field."
          />
          <SectionImage
            filename="cx-season.jpg"
            left={true}
            header="Cyclocross"
            body="If Cross isn't here, Cross is coming. The Cyclocross season begins soon after mountain season ends, just in time for the New England breeze to turn from comfortable to chilly. We bundle up in our tight lycra and travel around New England to a variety of Cyclocross races that are open to the public, not just colleges. There are generally 5 race weekends, with the venue hosting a race on both Saturday and Sunday. Racers compete in Categories 1-5 racing as many laps as you can in the amount of time your category designates. These races are fast and furious as it is a tight pack twisting in and out of corners with your teammates heckling you all the while."
          />
          <SectionImage
            filename="road-season.jpg"
            left={false}
            header="Road"
            body="By the time the snow melts (well, sometimes before the snow melts) road season is in full swing. There are 5 different race weekends, and athletes can expect to compete in any of the following races on a given weekend: criterium, road race, team time trial, uphill road climb, individual time trial, or circuit race. Men race in different categories ranging from A-E while Women have categories A-D. Sometimes a beginners clinic will be held before the racing to teach new riders how to compete in their first race safely."
          />
        </section>
        <div
          className={`divider ${SectionStyles.titleContainer} ${Styles.joinTitleContainer}`}
        >
          <h1
            className={`section-title ${SectionStyles.sectionTitle} ${Styles.joinTitle}`}
          >
            How to Join
          </h1>
        </div>
        <section className={`about  ${SectionStyles.section} ${Styles.join}`}>
          <AngleDivider fill="#222" />
          <div className={`${SectionStyles.textContainer}`}>
            <p>
              Joining UVM Cycling is easy! Come to our weekly meetings in the
              Fishbowl (Mount Mansfield Room) of the Davis Center at 8pm on
              Tuesday nights to join in the team camaraderie and find out what
              we’ll be up to for the following weekend. Don't worry if you
              missed a few (or a few years worth) of meetings, you can join the
              team at any point throughout the school year.{" "}
              <span className={`${SectionStyles.italic} ${SectionStyles.bold}`}>
                This year we will be hosting team meetings virtually on Teams
                due to the COVID-19 pandemic.
              </span>
            </p>
            <p>
              Here are some additional resources that are helpful to keeping you
              informed and ease your transition to the team:
            </p>
            <ul>
              <li>
                Register as a club member on the{" "}
                <a
                  href="https://thelynx.campuslabs.com/engage/organization/uvm-cycling"
                  rel="noreferrer"
                  target="_blank"
                >
                  UVM Clubs page
                </a>
                .
              </li>
              <li>
                Subscribe to the{" "}
                <a
                  href="https://list.uvm.edu/cgi-bin/wa?A0=UVMCYCLING"
                  rel="noreferrer"
                  target="_blank"
                >
                  UVM Cycling Email Listserv
                </a>
                . Pro Tip: Don't email the Listserv asking to be removed from
                the Listserv...
              </li>
              <li>
                Request to join our{" "}
                <a
                  href="https://www.facebook.com/UVMcycling/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook team group
                </a>{" "}
                and{" "}
                <a
                  href="https://www.facebook.com/groups/1882276192047346/"
                  rel="noreferrer"
                  target="_blank"
                >
                  ride-board
                </a>{" "}
                to keep up with the latest group rides and announcements
              </li>
              <li>
                Sign the UVM Clubs Agreement To Participate{" "}
                <span className={`${SectionStyles.italic}`}>
                  (not up yet for 2020-2021)
                </span>
                .
              </li>
            </ul>
          </div>
        </section>
        <div
          className={`divider ${SectionStyles.titleContainer} ${Styles.infoTitleContainer}`}
        >
          <h1
            className={`section-title ${SectionStyles.sectionTitle} ${Styles.infoTitle}`}
          >
            General Information
          </h1>
        </div>
        <section className={`about  ${SectionStyles.section} ${Styles.info}`}>
          <AngleDivider fill="#222" />
          <div className={`${SectionStyles.textContainer}`}>
            <p>
              While we do have a strong competitive presence, we are a team
              founded on a love for anything with two wheels and muscle powered!
              As such, we hope you’ll join us for a ride or two without feeling
              any pressure to compete if that’s not your thing! You can find out
              about rides on our Facebook{" "}
              <a
                href="https://www.facebook.com/groups/1882276192047346/"
                rel="noreferrer"
                target="_blank"
              >
                ride-board
              </a>{" "}
              or by posting/monitoring our{" "}
              <a
                href="https://list.uvm.edu/cgi-bin/wa?A0=UVMCYCLING"
                rel="noreferrer"
                target="_blank"
              >
                email Listserv
              </a>
              ! We don’t have many formal training or group rides, however, with
              90+ active team members, someone is always going for a ride. Our
              Coach will also often hold one or two group rides per week which
              will be posted on the Ride-Board and Listserv!
            </p>
            <p>
              PS Oftentimes we will meet at the “airport.”{" "}
              <span className={`${SectionStyles.italic} ${SectionStyles.bold}`}>
                This does NOT mean Burlington International Airport
              </span>{" "}
              and is instead located on campus, behind the athletic facility.
              Peep the map below to avoid this classic mistake!
            </p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1423.622563369854!2d-73.1950064933929!3d44.46914796919042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI4JzA4LjEiTiA3M8KwMTEnNDAuMiJX!5e0!3m2!1sen!2sus!4v1598383315674!5m2!1sen!2sus"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ProspectiveRiders
