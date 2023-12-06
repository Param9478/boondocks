import { useEffect } from 'react'

import Header from '../header'
import OurStory from './ourStory'
import OurTeam from './ourTeam'
import aboutHeader from '../../assets/aboutHeader.webp'

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Header
        title="About Us"
        content="Discover the Charm of The Boondocks Grill"
        imgSrc={aboutHeader}
        fullWidth
      />
      <OurStory />
      <OurTeam />
    </div>
  )
}
