import { useState } from 'react';
import GoogleReviewCard, { TabletGoogleReviewCard } from './GoogleReviewCard';

export default function GoogleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const items = [
    {
      photo: '',
      name: 'Janet Sloan',
      date: '07/26/2024',
      stars: 0,
      review:
        "Librado and team's experience and integrity are unmatched. We are lucky to have them serve our area.",
    },
    {
      photo: '',
      name: 'Sam Mitchell',
      date: '07/14/2024',
      stars: 0,
      review:
        'Juarez Remodeling consistently overdelivers with innovation solutions. We will never partner with another contractor.',
    },
    {
      photo: '',
      name: 'Karen Burch',
      date: '08/01/2024',
      stars: 0,
      review:
        'Their team has become like family. We could not recommend their talent enough.',
    },
    {
      photo: '',
      name: 'Name 4',
      date: '00/00/0000',
      stars: 0,
      review: 'lorem ipsum dolor sit amet',
    },
  ];
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 50,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginRight: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {items.slice(currentIndex, currentIndex + 3).map((item, i) => (
            <div key={i}>
              <GoogleReviewCard
                photo={item.photo}
                name={item.name}
                date={item.date}
                stars={item.stars}
                review={item.review}
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginLeft: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export function TabletGoogleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const items = [
    {
      photo: '',
      name: 'Janet Sloan',
      date: '07/26/2024',
      stars: 0,
      review:
        "Librado and team's experience and integrity are unmatched. We are lucky to have them serve our area.",
    },
    {
      photo: '',
      name: 'Sam Mitchell',
      date: '07/14/2024',
      stars: 0,
      review:
        'Juarez Remodeling consistently overdelivers with innovation solutions. We will never partner with another contractor.',
    },
    {
      photo: '',
      name: 'Karen Burch',
      date: '08/01/2024',
      stars: 0,
      review:
        'Their team has become like family. We could not recommend their talent enough.',
    },
    {
      photo: '',
      name: 'Name 4',
      date: '00/00/0000',
      stars: 0,
      review: 'lorem ipsum dolor sit amet',
    },
  ];
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 50,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginRight: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {items.slice(currentIndex, currentIndex + 2).map((item, i) => (
            <div key={i}>
              <TabletGoogleReviewCard
                photo={item.photo}
                name={item.name}
                date={item.date}
                stars={item.stars}
                review={item.review}
              />
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginLeft: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export function MobileGoogleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const items = [
    {
      photo: '',
      name: 'Janet Sloan',
      date: '07/26/2024',
      stars: 0,
      review:
        "Librado and team's experience and integrity are unmatched. We are lucky to have them serve our area.",
    },
    {
      photo: '',
      name: 'Sam Mitchell',
      date: '07/14/2024',
      stars: 0,
      review:
        'Juarez Remodeling consistently overdelivers with innovation solutions. We will never partner with another contractor.',
    },
    {
      photo: '',
      name: 'Karen Burch',
      date: '08/01/2024',
      stars: 0,
      review:
        'Their team has become like family. We could not recommend their talent enough.',
    },
    {
      photo: '',
      name: 'Name 4',
      date: '00/00/0000',
      stars: 0,
      review: 'lorem ipsum dolor sit amet',
    },
  ];
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 50,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginRight: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <GoogleReviewCard
            key={currentIndex}
            photo={items[currentIndex].photo}
            name={items[currentIndex].name}
            date={items[currentIndex].date}
            stars={items[currentIndex].stars}
            review={items[currentIndex].review}
          />
        </div>
        <button
          onClick={nextSlide}
          style={{
            width: 30,
            height: 30,
            padding: 10,
            borderRadius: 100,
            border: 'solid 1.5px #e4e4e4',
            backgroundColor: 'white',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginLeft: -20,
            zIndex: 999,
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
