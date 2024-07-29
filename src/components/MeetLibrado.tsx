import BackgroundImage from '../assets/images/meet-librado-image.png';
import TabletBackgroundImage from '../assets/images/tablet-meet-librado-image.png';
import MobileBackgroundImage from '../assets/images/mobile-meet-librado-image.png';

export function MeetLibrado() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

        marginTop: 100,
      }}
    >
      {/* <div style={{ height: 200, width: '40%' }} /> */}
      <div
        style={{ width: '60%', marginTop: 150, padding: 50, marginLeft: 600 }}
      >
        <h1 className="white-text" style={{ fontSize: 60 }}>
          Meet Librado:
        </h1>
        <h3 className="white-text" style={{ marginTop: -30 }}>
          Your Partner in Construction.
        </h3>
        <p className="white-text">
          Librado Juarez, owner and operator of Juarez Remodeling, has proudly
          served Myrtle Beach and the Grand Strand for nearly a decade. With a
          simple yet powerful philosophy—do good work at a fair price, on time,
          every time—Librado has earned the trust and admiration of his clients.
          Known for his innovation and meticulous attention to detail, he
          consistently delivers exceptional results, whether for a small project
          or a whole home remodel.
          <br />
          <br />
          Librado’s unwavering work ethic is another standout trait, as noted by
          his clients: “He arrives on time, works until he finishes the job, and
          doesn’t stop until it’s done right.” His positivity, ‘can do’
          attitude, and dedication make every day a success. For reliable,
          high-quality remodeling services, Juarez Remodeling is the trusted
          choice in the community.
        </p>
      </div>
    </div>
  );
}

export function TabletMeetLibrado() {
  return (
    <div
      style={{
        backgroundImage: `url(${TabletBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: '100% 100%',

        backgroundSize: 'cover',
        // display: 'flex',
        // justifyContent: 'space-around',
        // alignItems: 'flex-end',

        marginTop: 100,
        paddingTop: 300,
        paddingBottom: 900,
      }}
    >
      <div style={{ paddingLeft: 150, paddingRight: 150 }}>
        <h1 className="white-text" style={{ fontSize: 60 }}>
          Meet Librado:
        </h1>
        <h3 className="white-text" style={{ marginTop: -30 }}>
          Your Partner in Construction.
        </h3>
        <p className="white-text">
          Librado Juarez, owner and operator of Juarez Remodeling, has proudly
          served Myrtle Beach and the Grand Strand for nearly a decade. With a
          simple yet powerful philosophy—do good work at a fair price, on time,
          every time—Librado has earned the trust and admiration of his clients.
          Known for his innovation and meticulous attention to detail, he
          consistently delivers exceptional results, whether for a small project
          or a whole home remodel.
          <br />
          <br />
          Librado’s unwavering work ethic is another standout trait, as noted by
          his clients: “He arrives on time, works until he finishes the job, and
          doesn’t stop until it’s done right.” His positivity, ‘can do’
          attitude, and dedication make every day a success. For reliable,
          high-quality remodeling services, Juarez Remodeling is the trusted
          choice in the community.
        </p>
      </div>
    </div>
  );
}

export function MobileMeetLibrado() {
  return (
    <div
      style={{
        backgroundImage: `url(${MobileBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        paddingTop: 150,
        paddingBottom: 350,
      }}
    >
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <h1 className="white-text" style={{ fontSize: 40 }}>
          Meet Librado:
        </h1>
        <h3 className="white-text" style={{ marginTop: -10, fontSize: 20 }}>
          Your Partner in Construction.
        </h3>
        <p className="white-text" style={{ fontSize: 15, lineHeight: 1.5 }}>
          Librado Juarez, owner and operator of Juarez Remodeling, has proudly
          served Myrtle Beach and the Grand Strand for nearly a decade. With a
          simple yet powerful philosophy—do good work at a fair price, on time,
          every time—Librado has earned the trust and admiration of his clients.
          Known for his innovation and meticulous attention to detail, he
          consistently delivers exceptional results, whether for a small project
          or a whole home remodel.
        </p>
      </div>
    </div>
  );
}
