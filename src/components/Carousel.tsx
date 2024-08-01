import { useState } from 'react';

// interface Image {
//   src: string[];
//   alt?: string;
// }

export function Carousel(images: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const openModal = (image: string | null) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="carousel">
        <div className="carousel-images">
          {images
            // error here?
            .slice(currentIndex, currentIndex + 4)
            .concat(
              images.slice(0, Math.max(0, (currentIndex + 4) % images.length))
            )
            .slice(0, 4)
            .map((image, index) => (
              <img
                loading="lazy"
                key={index}
                src={image}
                alt={`Slide ${index}`}
                onClick={() => openModal(image)}
                style={{
                  width: '25%',
                  cursor: 'pointer',

                  paddingTop:
                    index === 1
                      ? '50px'
                      : index === 2
                      ? '100px'
                      : index === 3
                      ? '50px'
                      : 'none',
                }}
              />
            ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: 20,
          marginTop: -40,
        }}
      >
        <svg
          className="svg-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 68.5 68.5"
          onClick={next}
        >
          <g
            id="Right_arrow"
            data-name="Right arrow"
            transform="translate(1 1)"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M69.5,36.25A33.25,33.25,0,1,1,36.25,3,33.25,33.25,0,0,1,69.5,36.25Z"
              transform="translate(-3 -3)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M18,38.6,31.3,25.3,18,12"
              transform="translate(15.25 7.95)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M12,18H38.6"
              transform="translate(7.95 15.25)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <img
            loading="lazy"
            className="modal-content"
            src={selectedImage}
            alt="Selected"
            // style={{ width: 200 }}
          />
          <span className="close">&times;</span>
        </div>
      )}
    </div>
  );
}

export function TabletCarousel(images: []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedImage, setSelectedImage] = (useState < Image) | (null > null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const openModal = (image: string | null) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const carouselImageStyle = {
    maxWidth: '100%',
    width: 500,
    transition: 'transform 0.5s ease',
  };

  const centerImageStyle = {
    ...carouselImageStyle,
    paddingTop: 75,
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: 20,
        }}
      >
        <svg
          className="svg-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 68.5 68.5"
          onClick={goToNext}
        >
          <g
            id="Right_arrow"
            data-name="Right arrow"
            transform="translate(1 1)"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M69.5,36.25A33.25,33.25,0,1,1,36.25,3,33.25,33.25,0,0,1,69.5,36.25Z"
              transform="translate(-3 -3)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_6"
              data-name="Path 6"
              d="M18,38.6,31.3,25.3,18,12"
              transform="translate(15.25 7.95)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M12,18H38.6"
              transform="translate(7.95 15.25)"
              fill="none"
              stroke="#071a64"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          margin: 'auto',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <img
            loading="lazy"
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous"
            style={{ ...carouselImageStyle }}
            onClick={() =>
              openModal(
                images[(currentIndex - 1 + images.length) % images.length]
              )
            }
          />
          <img
            src={images[currentIndex]}
            alt="Current"
            style={centerImageStyle}
            onClick={() => openModal(images[currentIndex])}
          />
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Next"
            style={{ ...carouselImageStyle }}
            onClick={() =>
              openModal(images[(currentIndex + 1) % images.length])
            }
          />
        </div>
      </div>

      {selectedImage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 1000,
            paddingTop: 60,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
          onClick={closeModal}
        >
          <img
            loading="lazy"
            className="modal-content"
            src={selectedImage}
            alt="Selected"
            style={{ width: 500 }}
          />
          <span className="close">&times;</span>
        </div>
      )}
    </>
  );
}

export function MobileCarousel(images: []) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [selectedImage, setSelectedImage] = (useState < Image) | (null > null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const openModal = (image: string | null) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="carousel">
        <div className="mobile-carousel-content">
          <div
            className="mobile-carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 80}%)`,
            }}
          >
            {images.map((image, index) => (
              <div className="mobile-carousel-item" key={index}>
                <img
                  loading="lazy"
                  onClick={() => openModal(image)}
                  src={image}
                  alt={`Slide ${index}`}
                  style={{
                    cursor: 'pointer',
                    marginTop: index === currentIndex ? '50px' : '0',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: 20,
          }}
          onClick={nextSlide}
        >
          <svg
            className="svg-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 68.5 68.5"
          >
            <g
              id="Right_arrow"
              data-name="Right arrow"
              transform="translate(1 1)"
            >
              <path
                id="Path_5"
                data-name="Path 5"
                d="M69.5,36.25A33.25,33.25,0,1,1,36.25,3,33.25,33.25,0,0,1,69.5,36.25Z"
                transform="translate(-3 -3)"
                fill="none"
                stroke="#071a64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_6"
                data-name="Path 6"
                d="M18,38.6,31.3,25.3,18,12"
                transform="translate(15.25 7.95)"
                fill="none"
                stroke="#071a64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M12,18H38.6"
                transform="translate(7.95 15.25)"
                fill="none"
                stroke="#071a64"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>

      {selectedImage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 1000,
            paddingTop: 60,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
          onClick={closeModal}
        >
          <img
            loading="lazy"
            className="modal-content"
            src={selectedImage}
            alt="Selected"
            style={{ width: 500 }}
          />
          <span className="close">&times;</span>
        </div>
      )}
    </>
  );
}
