import Header from '../header'
import GoogleMap from './locationMap'
import ReservationSection from './reservationSection'
import contactUs from '../../assets/contactUs.avif'

export default function Contact() {
  return (
    <>
      <Header
        title="Contact Us"
        content="We’d love to hear from you! Please don’t hesitate to reach out to us with any questions, comments, or concerns – we’re here to help."
        imgSrc={contactUs}
        css="no-wrap"
      />
      <ReservationSection />
      <GoogleMap />
    </>
  )
}
