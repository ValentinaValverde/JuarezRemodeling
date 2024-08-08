import GoogleIcon from '../assets/icons/google-icon.webp';
import GoogleRating from '../assets/icons/google-rating.png';
import { useMediaQuery } from 'react-responsive';

interface Data {
  photo: string;
  name: string;
  date: string;
  review: string;
}

export function GoogleReviewCard({ photo, name, date, review }: Data) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const initial = (name: string) => {
    const test = Array.from(name)[0];
    return test;
  };

  return (
    <>
      {isDesktop && (
        <>
          <div
            style={{
              padding: 20,
              height: 350,
              width: 350,
              maxWidth: '90%',
              borderRadius: 25,
              border: 'solid 1.5px #e4e4e4',
              margin: 10,

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {photo ? (
              <img
                src={photo}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: 'var(--dark-blue)',
                }}
              />
            ) : (
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: '#D1562F',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                }}
              >
                <p className="white-text">{initial(name)}</p>
              </div>
            )}
            <h3 style={{ marginBottom: 0, marginTop: 10 }}>{name}</h3>
            <p style={{ color: '#bebebe', margin: 0 }}>{date}</p>

            <div>
              <img src={GoogleRating} style={{ width: 150 }} />
            </div>

            <p style={{ marginTop: 0, textAlign: 'center', lineHeight: 1.5 }}>
              {review}
            </p>
            <img src={GoogleIcon} style={{ width: 25, height: 25 }} />
          </div>
        </>
      )}

      {isTablet && (
        <>
          <div
            style={{
              padding: 20,
              height: 350,
              width: 250,
              maxWidth: '90%',
              borderRadius: 25,
              border: 'solid 1.5px #e4e4e4',
              margin: 10,

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {photo ? (
              <img
                src={photo}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: 'var(--dark-blue)',
                }}
              />
            ) : (
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: '#D1562F',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                }}
              >
                <p className="white-text">{initial(name)}</p>
              </div>
            )}
            <h3 style={{ marginBottom: 0, marginTop: 10 }}>{name}</h3>
            <p style={{ color: '#bebebe', margin: 0 }}>{date}</p>

            <div>
              <img src={GoogleRating} style={{ width: 150 }} />
            </div>

            <p style={{ marginTop: 0, textAlign: 'center', lineHeight: 1.5 }}>
              {review}
            </p>
            <img src={GoogleIcon} style={{ width: 25, height: 25 }} />
          </div>
        </>
      )}

      {isMobile && (
        <>
          <div
            style={{
              padding: 20,
              width: 250,
              maxWidth: '90%',
              borderRadius: 25,
              border: 'solid 1.5px #e4e4e4',
              margin: 10,

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            {photo ? (
              <img
                src={photo}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: 'var(--dark-blue)',
                }}
              />
            ) : (
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: '#D1562F',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 30,
                }}
              >
                <p className="white-text">{initial(name)}</p>
              </div>
            )}
            <h3 style={{ marginBottom: 0, marginTop: 10, textAlign: 'center' }}>
              {name}
            </h3>
            <p style={{ color: '#bebebe', margin: 0 }}>{date}</p>

            <div>
              <img src={GoogleRating} style={{ width: 150 }} />
            </div>

            <p style={{ marginTop: 0, textAlign: 'center', lineHeight: 1.5 }}>
              {review}
            </p>
            <img src={GoogleIcon} style={{ width: 25, height: 25 }} />
          </div>
        </>
      )}
    </>
  );
}
