import image from '../assets/images/background-image.png';

export function Experience() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 500,
        marginTop: -100,
        padding: 50,
        paddingTop: 200,
        paddingBottom: 300,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 className="white-text" style={{ textAlign: 'center' }}>
        Trusted by homeowners & <br /> commercial developers in
      </h2>
      <div
        style={{
          width: 250,
          height: 2,
          backgroundColor: 'white',
          borderRadius: 100,
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: 20,
        }}
      >
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Murrells Inlet
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Myrtle Beach
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Surfside Beach
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Garden City
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          North Myrtle Beach
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: -15,
        }}
      >
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Conway
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Carolina Forest
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Litchfiend Beach
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Pawley's Island
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Little River
        </p>
      </div>

      <div
        style={{
          marginTop: 50,
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          width: 800,
          maxWidth: '90%',
        }}
      >
        <div className="exp-container">
          <p className="white-text large-num">10</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            years of <br /> expertise
          </p>
        </div>

        <div className="exp-container">
          <p className="white-text large-num">50</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            happy <br /> clients
          </p>
        </div>

        <div className="exp-container">
          <p className="white-text large-num">500</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            innovative <br /> projects
          </p>
        </div>
      </div>
    </div>
  );
}

export function TabletExperience() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 500,
        marginTop: -100,
        padding: 50,
        paddingTop: 200,
        paddingBottom: 500,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2 className="white-text" style={{ textAlign: 'center' }}>
        Trusted by homeowners & <br /> commercial developers in
      </h2>
      <div
        style={{
          width: 250,
          height: 2,
          backgroundColor: 'white',
          borderRadius: 100,
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Murrells Inlet
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Myrtle Beach
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Surfside Beach
        </p>
        <p
          className="white-text"
          style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
        >
          Garden City
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            North Myrtle Beach
          </p>
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            Conway
          </p>
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            Carolina Forest
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            Litchfiend Beach
          </p>
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            Pawley's Island
          </p>
          <p
            className="white-text"
            style={{ marginLeft: 15, marginRight: 15, fontSize: 20 }}
          >
            Little River
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="exp-container">
            <p className="white-text large-num">10</p>
            <p className="white-text plus">+</p>
            <p className="white-text exp-text">
              years of <br /> expertise
            </p>
          </div>

          <div className="exp-container" style={{ marginLeft: 50 }}>
            <p className="white-text large-num">50</p>
            <p className="white-text plus">+</p>
            <p className="white-text exp-text">
              happy <br /> clients
            </p>
          </div>
        </div>
        <div>
          <div className="exp-container">
            <p className="white-text large-num">500</p>
            <p className="white-text plus">+</p>
            <p className="white-text exp-text">
              innovative <br /> projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileExperience() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: 50,
        padding: 30,
        paddingTop: 75,
        paddingBottom: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 className="white-text" style={{ textAlign: 'center', fontSize: 20 }}>
        Trusted by homeowners & <br /> commercial developers in
      </h2>

      <div
        style={{
          width: 100,
          height: 2,
          backgroundColor: 'white',
          borderRadius: 100,
        }}
      />

      <div
        style={{
          width: '100%',
          marginTop: 30,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p className="white-text">Myrtle Beach</p>
          <p className="white-text">Murrells Inlet</p>
          <p className="white-text">Surfsude Beach</p>
          <p className="white-text">Garden City</p>
          <p className="white-text">North Myrtle Beach</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className="white-text">Conway</p>
          <p className="white-text">Carolina Forest</p>
          <p className="white-text">Litchfield Beach</p>
          <p className="white-text">Pawley's Island</p>
          <p className="white-text">Little River</p>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <div className="mobile-exp-container" style={{ paddingLeft: 50 }}>
          <p className="white-text large-num">10</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            years of <br /> experience
          </p>
        </div>
        <div className="mobile-exp-container">
          <p className="white-text large-num">50</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            happy <br /> clients
          </p>
        </div>
        <div className="mobile-exp-container">
          <p className="white-text large-num">500</p>
          <p className="white-text plus">+</p>
          <p className="white-text exp-text">
            innovative <br /> projects
          </p>
        </div>
      </div>
    </div>
  );
}
