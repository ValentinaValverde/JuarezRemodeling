import './styling/styles.css';
import { NavBar, TabletNavbar, MobileNavbar } from './components/NavBar';
import { Landing, TabletLanding, MobileLanding } from './components/Landing';
import { About, TabletAbout, MobileAbout } from './components/About';
import {
  Experience,
  TabletExperience,
  MobileExperience,
} from './components/Experience';
import {
  Portfolio,
  TabletPortfolio,
  MobilePortfolio,
} from './components/Portfolio';
import {
  Services,
  TabletServices,
  MobileServices,
} from './components/Services';
import {
  MeetLibrado,
  TabletMeetLibrado,
  MobileMeetLibrado,
} from './components/MeetLibrado';
import GoogleReviews from './components/GoogleReviews';
import { Contact, TabletContact, MobileContact } from './components/Contact';
import { Footer, TabletFooter, MobileFooter } from './components/Footer';

import { useMediaQuery } from 'react-responsive';

export default function App() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div>
        {isDesktop && (
          <>
            <NavBar />
            <Landing />
            <About />
            <Experience />
            <Portfolio />
            <Services />
            <MeetLibrado />
            <GoogleReviews />
            <Contact />
            <Footer />
          </>
        )}
        {isTablet && (
          <>
            <TabletNavbar />
            <TabletLanding />
            <TabletAbout />
            <TabletExperience />
            <TabletPortfolio />
            <TabletServices />
            <TabletMeetLibrado />
            <GoogleReviews />
            <TabletContact />
            <TabletFooter />
          </>
        )}
        {isMobile && (
          <>
            <MobileNavbar />
            <MobileLanding />
            <MobileAbout />
            <MobileExperience />
            <MobilePortfolio />
            <MobileServices />
            <MobileMeetLibrado />
            <GoogleReviews />
            <MobileContact />
            <MobileFooter />
          </>
        )}
      </div>
    </>
  );
}
