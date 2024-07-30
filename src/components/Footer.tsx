import { useState } from 'react';
import { Form, MobileForm } from './Form';

import Icon from '../assets/icons/footer-icon.png';

import GoogleIcon from '../assets/icons/google-icon.png';
import FacebookIcon from '../assets/icons/facebook-icon.png';
import InstagramIcon from '../assets/icons/instagram-icon.png';

import WhiteGoogleIcon from '../assets/icons/white-google-icon.png';
import WhiteFacebookIcon from '../assets/icons/white-facebook-icon.png';
import WhiteInstagramIcon from '../assets/icons/white-instagram-icon.png';

export function Footer() {
  const [googleIcon, setGoogleIcon] = useState(false);
  const [facebookIcon, setFacebookIcon] = useState(false);
  const [instagramIcon, setInstagramIcon] = useState(false);

  return (
    <footer
      style={{
        backgroundColor: 'var(--light-blue)',
        padding: 50,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 50,
        }}
      >
        <div style={{ width: 500 }}>
          <img src={Icon} style={{ width: 150 }} />
          <p>
            Juarez Remodeling provides an all-in-one remodeling solution that
            combines innovation with high-quality design and work ethic.
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <h3>Contact</h3>
          <p>quote@juarezremodeling.com</p>
          <p>(843) 360 - 0520</p>

          <div>
            <a
              href="https://www.google.com/search?q=Juarez%20Remodeling&stick=H4sIAAAAAAAA_-NgU1IxqLCwMLVIMbe0SEtJSzE2Sja1MqhIMUgzMDVJtUi2SEpNNE9ZxCroVZpYlFqlEJSam5-SmpOZlw4AWG22mTwAAAA&hl=en-US&mat=CQKXHLmqFReVElcBEKoLaZx0l6Rsm9vTE65oPdEP5-5ZrFtRgoASm8U9Ob14RrydegFc4zI3neWWIer0ALGeM-fucBk_rp_05oMz3wj5-en24x2Ldj369FeSoka6K0tdKP0&authuser=0&ved=0CAEQrMcEahcKEwioj6vL28yHAxUAAAAAHQAAAAAQAg"
              target="_blank"
              onMouseEnter={() => setGoogleIcon(true)}
              onMouseLeave={() => setGoogleIcon(false)}
            >
              <img
                src={googleIcon ? WhiteGoogleIcon : GoogleIcon}
                className="footer-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/JuarezRemodelingMyrtleBeach/"
              target="_blank"
              onMouseEnter={() => setFacebookIcon(true)}
              onMouseLeave={() => setFacebookIcon(false)}
            >
              <img
                src={facebookIcon ? WhiteFacebookIcon : FacebookIcon}
                className="footer-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/juarezremodelingllc/"
              target="_blank"
              onMouseEnter={() => setInstagramIcon(true)}
              onMouseLeave={() => setInstagramIcon(false)}
            >
              <img
                src={instagramIcon ? WhiteInstagramIcon : InstagramIcon}
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>©Juarez Remodeling 2023</p>
    </footer>
  );
}

export function TabletFooter() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--light-blue)',
        padding: 50,
        paddingBottom: 20,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 100,
        }}
      >
        <Form />
      </div>

      <div style={{ marginBottom: 50, width: '80%' }}>
        <div>
          <img src={Icon} style={{ width: 200 }} />
          <p
            style={{
              fontWeight: 500,
              width: 470,
              maxWidth: '100%',
              fontSize: 20,
            }}
          >
            Juarez Remodeling provides an all-in-one remodeling solution that
            combines innovation with high-quality design and work ethic.
          </p>
        </div>

        <div style={{ marginTop: 75, marginBottom: 75, fontSize: 20 }}>
          <h3 style={{ fontSize: 30 }}>Contact</h3>
          <p>quote@juarezremodeling.com</p>
          <p>(843) 360 - 0520</p>
        </div>

        <div>
          <a
            href="https://www.google.com/search?q=Juarez%20Remodeling&stick=H4sIAAAAAAAA_-NgU1IxqLCwMLVIMbe0SEtJSzE2Sja1MqhIMUgzMDVJtUi2SEpNNE9ZxCroVZpYlFqlEJSam5-SmpOZlw4AWG22mTwAAAA&hl=en-US&mat=CQKXHLmqFReVElcBEKoLaZx0l6Rsm9vTE65oPdEP5-5ZrFtRgoASm8U9Ob14RrydegFc4zI3neWWIer0ALGeM-fucBk_rp_05oMz3wj5-en24x2Ldj369FeSoka6K0tdKP0&authuser=0&ved=0CAEQrMcEahcKEwioj6vL28yHAxUAAAAAHQAAAAAQAg"
            target="_blank"
          >
            <img src={GoogleIcon} className="tablet-footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/JuarezRemodelingMyrtleBeach/"
            target="_blank"
          >
            <img src={FacebookIcon} className="tablet-footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/juarezremodelingllc/"
            target="_blank"
          >
            <img src={InstagramIcon} className="tablet-footer-icon" />
          </a>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>©Juarez Remodeling 2023</p>
    </footer>
  );
}

export function MobileFooter() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--light-blue)',
        padding: 50,
        paddingBottom: 20,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 100,
        }}
      >
        <MobileForm />
      </div>

      <div style={{ marginBottom: 50, width: '100%' }}>
        <div>
          <img src={Icon} style={{ width: 125 }} />
          <p
            style={{
              fontWeight: 500,
              width: 470,
              maxWidth: '100%',
            }}
          >
            Juarez Remodeling provides an all-in-one remodeling solution that
            combines innovation with high-quality design and work ethic.
          </p>
        </div>

        <div style={{ marginTop: 75, marginBottom: 75 }}>
          <h3 style={{ fontSize: 30 }}>Contact</h3>
          <p>quote@juarezremodeling.com</p>
          <p>(843) 360 - 0520</p>
        </div>

        <div>
          <a
            href="https://www.google.com/search?q=Juarez%20Remodeling&stick=H4sIAAAAAAAA_-NgU1IxqLCwMLVIMbe0SEtJSzE2Sja1MqhIMUgzMDVJtUi2SEpNNE9ZxCroVZpYlFqlEJSam5-SmpOZlw4AWG22mTwAAAA&hl=en-US&mat=CQKXHLmqFReVElcBEKoLaZx0l6Rsm9vTE65oPdEP5-5ZrFtRgoASm8U9Ob14RrydegFc4zI3neWWIer0ALGeM-fucBk_rp_05oMz3wj5-en24x2Ldj369FeSoka6K0tdKP0&authuser=0&ved=0CAEQrMcEahcKEwioj6vL28yHAxUAAAAAHQAAAAAQAg"
            target="_blank"
          >
            <img src={GoogleIcon} className="tablet-footer-icon" />
          </a>
          <a
            href="https://www.facebook.com/JuarezRemodelingMyrtleBeach/"
            target="_blank"
          >
            <img src={FacebookIcon} className="tablet-footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/juarezremodelingllc/"
            target="_blank"
          >
            <img src={InstagramIcon} className="tablet-footer-icon" />
          </a>
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>©Juarez Remodeling 2023</p>
    </footer>
  );
}
