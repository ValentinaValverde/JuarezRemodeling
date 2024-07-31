import { Link } from 'react-scroll';
import HeroVideo from '../assets/videos/HeroVideo.mp4';

export function Landing() {
  return (
    <>
      <div
        style={{
          filter: 'brightness(75%)',
        }}
      >
        <video
          src={HeroVideo}
          style={{ width: '100%' }}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div
        style={{
          position: 'absolute',
          padding: 50,
          top: 150,
          right: 0,
          textAlign: 'right',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',

          //   backgroundColor: 'pink',
        }}
      >
        <h1
          style={{ fontWeight: 'normal', marginBottom: -40 }}
          className="white-text"
        >
          Let's make your house
        </h1>
        <h1 style={{ marginBottom: -10 }} className="white-text">
          feel more like home.
        </h1>
        <p className="white-text">
          We are the local choice for top-quality, affordable remodeling <br />
          and renovation services across the Grand Strand.
        </p>

        <div>
          <Link
            className="white-text"
            to="portfolio"
            smooth={true}
            duration={900}
            // style={{ marginRight: 25 }}
          >
            <button className="secondary-button" style={{ marginRight: 10 }}>
              View Our Portfolio
            </button>
          </Link>

          <Link
            // className="white-text"
            to="contact"
            smooth={true}
            duration={900}
          >
            <button className="primary-button">Get a Quote</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export function TabletLanding() {
  return (
    <>
      <div
        style={{
          filter: 'brightness(75%)',
          height: 600,
          backgroundColor: 'black',
          overflow: 'hidden',
        }}
      >
        <video
          src={HeroVideo}
          style={{ height: '100%' }}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div
        style={{
          position: 'absolute',
          padding: 50,
          top: 150,
          marginTop: 200,
          // backgroundColor: 'pink',
        }}
      >
        <h1
          style={{ fontWeight: 'normal', marginBottom: -40 }}
          className="white-text"
        >
          Let's make your house
        </h1>
        <h1 style={{ marginBottom: -10 }} className="white-text">
          feel more like home.
        </h1>
        <p className="white-text">
          We are the local choice for top-quality, affordable remodeling <br />
          and renovation services across the Grand Strand.
        </p>

        <div>
          <Link
            className="white-text"
            to="portfolio"
            smooth={true}
            duration={900}
            // style={{ marginRight: 25 }}
          >
            <button className="secondary-button" style={{ marginRight: 10 }}>
              View Our Portfolio
            </button>
          </Link>

          <Link
            // className="white-text"
            to="contact"
            smooth={true}
            duration={900}
          >
            <button className="primary-button">Get a Quote</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export function MobileLanding() {
  return (
    <>
      <div
        style={{
          filter: 'brightness(75%)',
          height: 600,
          backgroundColor: 'black',
          overflow: 'hidden',
        }}
      >
        <video
          src={HeroVideo}
          style={{ height: '100%' }}
          autoPlay
          loop
          muted
        ></video>
      </div>

      <div
        style={{
          position: 'absolute',
          padding: 20,
          top: 150,

          marginTop: 250,
        }}
      >
        <h1
          style={{ fontWeight: 'normal', marginBottom: -10, fontSize: 30 }}
          className="white-text"
        >
          Let's make your house
        </h1>
        <h1 style={{ fontSize: 30 }} className="white-text">
          feel more like home.
        </h1>
        <p className="white-text" style={{ fontSize: 15, lineHeight: 1.5 }}>
          We are the local choice for top-quality, affordable remodeling and
          renovation services across the Grand Strand.
        </p>

        <div>
          <Link
            className="white-text"
            to="portfolio"
            smooth={true}
            duration={900}
            style={{ marginRight: 10 }}
          >
            <button className="secondary-button mobile-button">
              View Our Portfolio
            </button>
          </Link>

          <Link
            // className="white-text"
            to="contact"
            smooth={true}
            duration={900}
          >
            <button className="primary-button mobile-button">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
