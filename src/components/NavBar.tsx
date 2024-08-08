import { useState } from 'react';
import Logo from '../assets/images/primary-logo.png';
import { Link } from 'react-scroll';

export function NavBar() {
  return (
    <nav>
      <div>
        <img src={Logo} style={{ width: 300 }} />
      </div>
      <div className="navbar-container">
        <Link
          className="white-text"
          to="about"
          smooth={true}
          duration={800}
          style={{ marginRight: 50 }}
        >
          about us
        </Link>

        <Link
          className="white-text"
          to="portfolio"
          smooth={true}
          duration={900}
          style={{ marginRight: 50 }}
        >
          portfolio
        </Link>

        <Link
          className="white-text"
          to="services"
          smooth={true}
          duration={1000}
          style={{ marginRight: 50 }}
        >
          services
        </Link>

        <Link className="white-text" to="contact" smooth={true} duration={1100}>
          contact
        </Link>
      </div>
    </nav>
  );
}

export function TabletNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  const linkClick = () => {
    setSidebar(false);
  };

  return (
    <>
      <nav>
        <div>
          <img src={Logo} style={{ width: 300 }} />
        </div>
        <div className="navbar-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="36.383"
            viewBox="0 0 52.084 36.383"
            onClick={openSidebar}
            className="navbarIcon"
          >
            <g
              id="hamburger_menu_icon"
              data-name="hamburger menu icon"
              transform="translate(-4.5 -7.125)"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M42.981,14.465H6.173A1.977,1.977,0,0,1,4.5,12.3h0a1.977,1.977,0,0,1,1.673-2.17H42.981a1.977,1.977,0,0,1,1.673,2.17h0A1.977,1.977,0,0,1,42.981,14.465Z"
                transform="translate(11.93 -3)"
                fill="#fff"
              />
              <path
                id="Path_23"
                data-name="Path 23"
                d="M54.414,21.215H6.67a2.177,2.177,0,0,1-2.17-2.17h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,21.215Z"
                transform="translate(0 6.271)"
                fill="#fff"
              />
              <path
                id="Path_24"
                data-name="Path 24"
                d="M54.414,27.965H6.67A2.177,2.177,0,0,1,4.5,25.8h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,27.965Z"
                transform="translate(0 15.542)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </nav>

      {sidebar ? (
        <>
          <div
            style={{
              backgroundColor: 'var(--orange)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              padding: 50,

              position: 'fixed',
              top: 0,
              right: 0,
              width: '25%',
              height: '100%',

              boxShadow: '5px 0px 10px black',
              zIndex: 999,
            }}
          >
            <div onClick={linkClick}>
              <span className="close">&times;</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <Link
                className="white-text"
                to="about"
                smooth={true}
                duration={800}
                style={{ fontSize: 30, marginTop: 0, marginBottom: 20 }}
                onClick={linkClick}
              >
                about us
              </Link>

              <Link
                className="white-text"
                to="portfolio"
                smooth={true}
                duration={900}
                style={{ fontSize: 30, marginTop: 0, marginBottom: 20 }}
                onClick={linkClick}
              >
                portfolio
              </Link>

              <Link
                className="white-text"
                to="services"
                smooth={true}
                duration={1000}
                style={{ fontSize: 30, marginTop: 0, marginBottom: 20 }}
                onClick={linkClick}
              >
                services
              </Link>

              <Link
                className="white-text"
                to="contact"
                smooth={true}
                duration={1100}
                style={{ fontSize: 30, marginTop: 0, marginBottom: 20 }}
                onClick={linkClick}
              >
                contact
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export function MobileNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  const linkClick = () => {
    setSidebar(false);
  };

  return (
    <>
      <nav className="mobile-nav">
        <div>
          <img src={Logo} style={{ width: 200 }} />
        </div>
        <div className="navbar-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="36.383"
            viewBox="0 0 52.084 36.383"
            onClick={openSidebar}
            className="navbarIcon"
          >
            <g
              id="hamburger_menu_icon"
              data-name="hamburger menu icon"
              transform="translate(-4.5 -7.125)"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M42.981,14.465H6.173A1.977,1.977,0,0,1,4.5,12.3h0a1.977,1.977,0,0,1,1.673-2.17H42.981a1.977,1.977,0,0,1,1.673,2.17h0A1.977,1.977,0,0,1,42.981,14.465Z"
                transform="translate(11.93 -3)"
                fill="#fff"
              />
              <path
                id="Path_23"
                data-name="Path 23"
                d="M54.414,21.215H6.67a2.177,2.177,0,0,1-2.17-2.17h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,21.215Z"
                transform="translate(0 6.271)"
                fill="#fff"
              />
              <path
                id="Path_24"
                data-name="Path 24"
                d="M54.414,27.965H6.67A2.177,2.177,0,0,1,4.5,25.8h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,27.965Z"
                transform="translate(0 15.542)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </nav>

      {sidebar ? (
        <>
          <div
            style={{
              backgroundColor: 'var(--orange)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'flex-end',
              padding: 40,

              position: 'fixed',
              top: 0,
              right: 0,
              width: '30%',
              height: '100%',

              boxShadow: '5px 0px 10px black',
              zIndex: 999,
            }}
          >
            <div onClick={linkClick}>
              <span className="close">&times;</span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <Link
                className="white-text mobile-navbar-link"
                to="about"
                smooth={true}
                duration={800}
                onClick={linkClick}
              >
                about us
              </Link>

              <Link
                className="white-text mobile-navbar-link"
                to="portfolio"
                smooth={true}
                duration={900}
                // style={{  }}
                onClick={linkClick}
              >
                portfolio
              </Link>

              <Link
                className="white-text mobile-navbar-link"
                to="services"
                smooth={true}
                duration={1000}
                onClick={linkClick}
              >
                services
              </Link>

              <Link
                className="white-text mobile-navbar-link"
                to="contact"
                smooth={true}
                duration={1100}
                onClick={linkClick}
              >
                contact
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
