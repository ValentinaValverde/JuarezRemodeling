import { useMediaQuery } from 'react-responsive';
import GoogleCarousel, {
  TabletGoogleCarousel,
  MobileGoogleCarousel,
} from './GoogleCarousel';
import GoogleRating from '../assets/icons/google-rating.png';
import GoogleFullLogo from '../assets/icons/google-full-logo.png';

export default function GoogleReviews() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isDesktop && (
        <>
          <div style={{ marginLeft: 100, marginRight: 100 }}>
            <img
              src={GoogleFullLogo}
              style={{ marginBottom: -75, width: 350 }}
            />

            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 35 }}
            >
              <img src={GoogleRating} style={{ width: 250, height: 40 }} />
              <p style={{ marginLeft: 20, fontSize: 20 }}>
                5.0 rating of 4 reviews
              </p>
            </div>
          </div>
          <GoogleCarousel />
        </>
      )}
      {isTablet && (
        <>
          <div style={{ marginLeft: 100, marginRight: 100 }}>
            <img
              src={GoogleFullLogo}
              style={{ marginBottom: -75, width: 350 }}
            />

            <div
              style={{ display: 'flex', alignItems: 'center', marginLeft: 35 }}
            >
              <img src={GoogleRating} style={{ width: 250, height: 40 }} />
              <p style={{ marginLeft: 20, fontSize: 20 }}>
                5.0 rating of 4 reviews
              </p>
            </div>
          </div>
          <TabletGoogleCarousel />
        </>
      )}
      {isMobile && (
        <>
          <div style={{ marginLeft: 10, marginRight: 20, marginBottom: -15 }}>
            <img
              src={GoogleFullLogo}
              style={{ marginBottom: -40, width: 200 }}
            />

            <img
              src={GoogleRating}
              style={{
                width: 150,
                height: 25,
                marginLeft: 20,
                marginBottom: -15,
              }}
            />
            <p style={{ marginLeft: 20 }}>5.0 rating of 4 reviews</p>
          </div>
          <MobileGoogleCarousel />
        </>
      )}
    </>
  );
}
