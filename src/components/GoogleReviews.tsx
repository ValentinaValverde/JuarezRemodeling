import { useMediaQuery } from 'react-responsive';
import GoogleRating from '../assets/icons/google-rating.png';
import GoogleFullLogo from '../assets/icons/google-full-logo.png';
import { GoogleReviewCard } from './GoogleReviewCard';

export default function GoogleReviews() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isDesktop && (
        <>
          <div
            style={{
              margin: 10,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                }}
              />
            </div>

            <div>
              <p style={{ fontSize: 30 }}>Tranformation Testimonials</p>
            </div>

            <div>
              <a>
                <button className="primary-button">View All Reviews</button>
              </a>
            </div>
          </div>
        </>
      )}

      {isTablet && (
        <>
          <div
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                }}
              />
            </div>

            <div>
              <p style={{ fontSize: 30 }}>Tranformation Testimonials</p>
            </div>

            <div>
              <a>
                <button className="primary-button">View All Reviews</button>
              </a>
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <>
          <div
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                }}
              />
            </div>

            <div>
              <p style={{ fontSize: 30 }}>Tranformation Testimonials</p>
            </div>

            <div>
              <a>
                <button className="primary-button">View All Reviews</button>
              </a>
            </div>
          </div>
        </>
      )}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 50,
        }}
      >
        <GoogleReviewCard
          photo={''}
          name={'Janet Sloan'}
          date={'08/07/2024'}
          review={
            "I can't say enough good things about my experiences and have every confidenve in recommending this company for any and all your construction related needs!"
          }
        />
        <GoogleReviewCard
          photo={''}
          name={'Hannah Sullivan'}
          date={'08/07/2024'}
          review={
            'Librado and team at Juarez Remodeling are unmatched! His hard work and attention to detail really stand out. I highly recommend him to anyone on the Grand Strand!!'
          }
        />
        <GoogleReviewCard
          photo={''}
          name={'Ursula Pavlik'}
          date={'08/08/2024'}
          review={
            'He did a great job with all of it, the back porch barely shows a difference in the brick. We have his number on speed dial.'
          }
        />
      </div>
    </>
  );
}
