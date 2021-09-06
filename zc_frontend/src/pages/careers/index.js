import Footer from '../../components/externalPagesComponents/Footer/Footer'
import Message from '../../components/externalPagesComponents/Footer/Message'
import CareersSection2 from './CareersSection2'
import Section3 from './components/Section3/Section3'
import SectionOne from './components/section1/sectionOne'
// import Header from "../../components/externalPagesComponents/Header";

function Careers() {
  return (
    <div>
      {/* <Header /> */}
      <SectionOne />
      <CareersSection2 />
      <Section3 />
      <Message />
      <Footer />
    </div>
  )
}

export default Careers
