import GoogleIcon from '../assets/icons/google-icon.webp';

interface Data {
  photo: string;
  name: string;
  date: string;
  stars: number;
  review: string;
}

export default function GoogleReviewCard({
  photo,
  name,
  date,
  stars,
  review,
}: Data) {
  return (
    <>
      <div
        style={{
          padding: 20,
          height: 350,
          width: 300,
          maxWidth: '90%',
          borderRadius: 25,
          border: 'solid 1.5px #e4e4e4',
          marginLeft: 20,
          marginRight: 20,

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
          {/* stars */}
          <p>{stars}</p>
        </div>

        <p style={{ marginTop: 0, textAlign: 'center', lineHeight: 1.5 }}>
          {review}
        </p>
        <img src={GoogleIcon} style={{ width: 25, height: 25 }} />
      </div>
    </>
  );
}
