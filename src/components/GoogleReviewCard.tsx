import GoogleIcon from '../assets/icons/google-icon.webp';
import GoogleRating from '../assets/icons/google-rating.png';

interface Data {
  photo: string;
  name: string;
  date: string;
  review: string;
}

export default function GoogleReviewCard({ photo, name, date, review }: Data) {
  return (
    <>
      <div
        style={{
          padding: 20,
          height: 350,
          width: 350,
          maxWidth: '90%',
          borderRadius: 25,
          border: 'solid 1.5px #e4e4e4',
          marginLeft: 5,
          marginRight: 5,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          //   alignContent: 'space-around',
        }}
      >
        <img
          src={photo}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: 'var(--dark-blue)',
          }}
        />
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
  );
}

export function TabletGoogleReviewCard({ photo, name, date, review }: Data) {
  return (
    <>
      <div
        style={{
          padding: 20,
          height: 350,
          width: 250,
          maxWidth: '90%',
          borderRadius: 25,
          border: 'solid 1.5px #e4e4e4',
          marginLeft: 5,
          marginRight: 5,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          //   alignContent: 'space-around',
        }}
      >
        <img
          src={photo}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: 'var(--dark-blue)',
          }}
        />
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
  );
}
