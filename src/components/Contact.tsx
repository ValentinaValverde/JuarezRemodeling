import image from '../assets/images/contact-background.png';
import { Form } from './Form';

export function Contact() {
  return (
    <div
      id="contact"
      style={{
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',

        padding: 50,
      }}
    >
      <div>
        <h3 className="white-text">Renovation is tough,</h3>
        <h1
          className="white-text"
          style={{ marginTop: -25, marginBottom: -10, fontSize: 75 }}
        >
          we've got <br /> your back.
        </h1>
      </div>

      <Form />
    </div>
  );
}

export function TabletContact() {
  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',

        display: 'flex',
        alignItems: 'flex-end',

        padding: 50,
      }}
    >
      <div style={{ marginTop: 300 }}>
        <span className="white-text" style={{ fontSize: 40, fontWeight: 600 }}>
          Renovation is <br /> tough,
        </span>
        <span className="white-text" style={{ fontSize: 70, fontWeight: 900 }}>
          we've <br /> got your back.
        </span>
      </div>
    </div>
  );
}

export function MobileContact() {
  return (
    <div
      id="contact"
      style={{
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',

        padding: 30,
        paddingTop: 250,
      }}
    >
      <div>
        <h3 className="white-text">Renovation is tough,</h3>
        <h1
          className="white-text"
          style={{ marginTop: -25, marginBottom: -10 }}
        >
          we've got <br /> your back.
        </h1>
      </div>
    </div>
  );
}
