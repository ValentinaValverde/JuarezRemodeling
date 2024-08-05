import { useState } from 'react';
import { Carousel, MobileCarousel, TabletCarousel } from './Carousel';

import DesktopBackgroundImage from '../assets/images/portfolio-background.png';
import TabletBackgroundImage from '../assets/images/portfolio-background-tablet.png';

import Image1 from '../assets/images/CompleteHome/full-home-1.jpeg';
import Image2 from '../assets/images/CompleteHome/full-home-2.jpeg';
import Image3 from '../assets/images/CompleteHome/full-home-3.jpeg';
import Image4 from '../assets/images/CompleteHome/full-home-4.jpeg';
import Image5 from '../assets/images/CompleteHome/full-home-5.jpeg';
import Image6 from '../assets/images/CompleteHome/full-home-6.jpeg';
import Image7 from '../assets/images/CompleteHome/full-home-7.jpeg';
import Image8 from '../assets/images/CompleteHome/full-home-8.jpeg';
import Image9 from '../assets/images/CompleteHome/full-home-9.jpeg';
import Image10 from '../assets/images/CompleteHome/full-home-10.jpeg';
import Image11 from '../assets/images/CompleteHome/full-home-11.jpeg';
import Image12 from '../assets/images/CompleteHome/full-home-12.jpeg';
import Image13 from '../assets/images/CompleteHome/full-home-13.jpeg';

import Img1 from '../assets/images/OutdoorOasis/image-01.jpg';
import Img2 from '../assets/images/OutdoorOasis/image-02.jpg';
import Img3 from '../assets/images/OutdoorOasis/image-03.jpg';
import Img4 from '../assets/images/OutdoorOasis/image-04.jpg';
import Img5 from '../assets/images/OutdoorOasis/image-05.jpg';
import Img6 from '../assets/images/OutdoorOasis/image-06.jpg';
import Img7 from '../assets/images/OutdoorOasis/image-07.jpg';

export function Portfolio() {
  const [pressed, setPressed] = useState(false);

  const contentChange = () => {
    setPressed(!pressed);
  };

  const completeHomeImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
  ];

  const oasisImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div
      id="portfolio"
      style={{
        backgroundImage: `url(${DesktopBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        marginTop: -300,
        paddingTop: 300,
        paddingBottom: 300,
      }}
    >
      <div
        style={{
          // padding: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',

          // spacing
          padding: 50,
          paddingRight: 100,
          paddingLeft: 100,
        }}
      >
        <div style={{ width: 500 }}>
          <h1 style={{ fontSize: 75, marginTop: -25 }}>Our Portfolio</h1>
          <p style={{ marginTop: -25 }}>Click an image to expand your view.</p>
        </div>

        <div style={{ width: 500, maxWidth: '100%' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              display: 'inline-block',
            }}
          >
            <button
              onClick={contentChange}
              style={
                pressed
                  ? {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
                  : { border: 'none', backgroundColor: 'white' }
              }
            >
              Outdoor Oasis
            </button>
            <button
              onClick={contentChange}
              style={
                pressed
                  ? { border: 'none', backgroundColor: 'white' }
                  : {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
              }
            >
              Complete Home
            </button>
          </div>
          {pressed ? (
            <p>
              This comprehensive project in Murrells Inlet included framing and
              sheetrock installation, slab doors, and finish trim. We
              constructed covers for pool equipment and HVAC units, and fixed
              the entry door installation through a block wall left by a
              previous contractor. Additionally, we designed flood-mitigating
              measures for the existing fence and transformed a pool cabana
              rendering into a beautiful, structurally sound reality in just a
              few days.
            </p>
          ) : (
            <p>
              This whole-home remodel was for a Mt. Gilead client in Murrells
              Inlet, SC. The Juarez team replaced subfloors and installed all
              new flooring throughout the home. We also removed walls to create
              an open-floor concept, as well as added additional features such
              as walk-in closets, a patio, and even French doors. In addition to
              the carpentry completed, we gutted/replaced the entire plumbing
              system, and shored up faulty electrical outlets to ensure a
              perfectly remodeled home. Within a short period of time, our
              client was able to sell her newly renovated home above market
              value and move into the home of her dreams.
            </p>
          )}
        </div>
      </div>

      {/* <Carousel images={pressed ? oasisImages : completeHomeImages} /> */}

      {pressed ? (
        <Carousel images={oasisImages} />
      ) : (
        <Carousel images={completeHomeImages} />
      )}
    </div>
  );
}

export function TabletPortfolio() {
  const [pressed, setPressed] = useState(false);

  const contentChange = () => {
    setPressed(!pressed);
  };

  const completeHomeImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
  ];

  const oasisImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div
      id="portfolio"
      style={{
        backgroundImage: `url(${TabletBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        marginTop: -400,
        paddingTop: 600,
        paddingBottom: 400,
      }}
    >
      <div
        style={{
          padding: 50,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: 500 }}>
          <h1 style={{ fontSize: 75, marginTop: -25 }}>Our Portfolio</h1>
        </div>

        <div style={{ width: 500, maxWidth: '100%' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              display: 'inline-block',
            }}
          >
            <button
              onClick={contentChange}
              style={
                pressed
                  ? {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
                  : { border: 'none', backgroundColor: 'white' }
              }
            >
              Outdoor Oasis
            </button>
            <button
              onClick={contentChange}
              style={
                pressed
                  ? { border: 'none', backgroundColor: 'white' }
                  : {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
              }
            >
              Complete Home
            </button>
          </div>
          {pressed ? (
            <>
              <p>
                This comprehensive project in Murrells Inlet included framing
                and sheetrock installation, slab doors, and finish trim. We
                constructed covers for pool equipment and HVAC units, and fixed
                the entry door installation through a block wall left by a
                previous contractor. Additionally, we designed flood-mitigating
                measures for the existing fence and transformed a pool cabana
                rendering into a beautiful, structurally sound reality in just a
                few days.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Click an image to expand your view.
              </p>
            </>
          ) : (
            <>
              <p>
                This whole-home remodel was for a Mt. Gilead client in Murrells
                Inlet, SC. The Juarez team replaced subfloors and installed all
                new flooring throughout the home. We also removed walls to
                create an open-floor concept, as well as added additional
                features such as walk-in closets, a patio, and even French
                doors. In addition to the carpentry completed, we
                gutted/replaced the entire plumbing system, and shored up faulty
                electrical outlets to ensure a perfectly remodeled home. Within
                a short period of time, our client was able to sell her newly
                renovated home above market value and move into the home of her
                dreams.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Click an image to expand your view.
              </p>
            </>
          )}
        </div>
      </div>

      <div style={{ height: 50 }} />

      {/* <TabletCarousel images={pressed ? oasisImages : completeHomeImages} /> */}

      {pressed ? (
        <TabletCarousel images={oasisImages} />
      ) : (
        <TabletCarousel images={completeHomeImages} />
      )}
    </div>
  );
}

export function MobilePortfolio() {
  const [pressed, setPressed] = useState(false);

  const contentChange = () => {
    setPressed(!pressed);
  };

  const completeHomeImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
  ];

  const oasisImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  return (
    <div
      id="portfolio"
      style={{
        backgroundImage: `url(${TabletBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        marginTop: -300,
        paddingTop: 350,
        paddingBottom: 200,
      }}
    >
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: 500 }}>
          <h1 style={{ fontSize: 50, marginTop: -25 }}>Our Portfolio</h1>
        </div>

        <div style={{ width: 500, maxWidth: '100%' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              display: 'inline-block',
            }}
          >
            <button
              onClick={contentChange}
              style={
                pressed
                  ? {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
                  : { border: 'none', backgroundColor: 'white' }
              }
            >
              Outdoor Oasis
            </button>
            <button
              onClick={contentChange}
              style={
                pressed
                  ? { border: 'none', backgroundColor: 'white' }
                  : {
                      border: 'none',
                      backgroundColor: 'var(--dark-blue)',
                      color: 'white',
                    }
              }
            >
              Complete Home
            </button>
          </div>
          {pressed ? (
            <>
              <p>
                This comprehensive project in Murrells Inlet included framing
                and sheetrock installation, slab doors, and finish trim. We
                constructed covers for pool equipment and HVAC units, and fixed
                the entry door installation through a block wall left by a
                previous contractor. Additionally, we designed flood-mitigating
                measures for the existing fence and transformed a pool cabana
                rendering into a beautiful, structurally sound reality in just a
                few days.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Click an image to expand your view.
              </p>
            </>
          ) : (
            <>
              <p>
                This whole-home remodel was for a Mt. Gilead client in Murrells
                Inlet, SC. The Juarez team replaced subfloors and installed all
                new flooring throughout the home. We also removed walls to
                create an open-floor concept, as well as added additional
                features such as walk-in closets, a patio, and even French
                doors. In addition to the carpentry completed, we
                gutted/replaced the entire plumbing system, and shored up faulty
                electrical outlets to ensure a perfectly remodeled home. Within
                a short period of time, our client was able to sell her newly
                renovated home above market value and move into the home of her
                dreams.
              </p>
              <p style={{ fontWeight: 'bold' }}>
                Click an image to expand your view.
              </p>
            </>
          )}
        </div>
      </div>

      {/* <MobileCarousel images={pressed ? oasisImages : completeHomeImages} /> */}

      {pressed ? (
        <MobileCarousel images={oasisImages} />
      ) : (
        <MobileCarousel images={completeHomeImages} />
      )}
    </div>
  );
}
