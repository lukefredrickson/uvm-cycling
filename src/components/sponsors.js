import React from "react"
import SponsorsStyles from "./sponsors.module.css"
import SponsorImage from "./sponsorImage"

const Sponsors = props => {
  return (
    <div className={SponsorsStyles.container}>
      <SponsorImage
        filename="verge.png"
        alt="Verge Sport"
        link="https://www.vergesport.com/us-en/"
      />
      <SponsorImage
        filename="specialized"
        alt="Specialized"
        link="https://www.specialized.com/us/en"
      />
      <SponsorImage
        filename="vittoria"
        alt="Vittoria"
        link="https://www.vittoria.com/us/"
      />
      <SponsorImage
        filename="clif-bar"
        alt="Clif Bar"
        link="https://www.clifbar.com/"
      />
      <SponsorImage
        filename="skirack"
        alt="Skirack"
        link="https://www.skirack.com/"
      />
      <SponsorImage
        filename="pitviper"
        alt="Pitviper Sunglasses"
        link="https://pitvipersunglasses.com/"
      />
      <SponsorImage
        filename="takeout-shorts"
        alt="Takeout Shorts"
        link="https://takeoutshorts.com/"
      />
      <SponsorImage
        filename="uvm-bikes"
        alt="UVM Bikes"
        link="https://takeoutshorts.com/"
      />
    </div>
  )
}

export default Sponsors
