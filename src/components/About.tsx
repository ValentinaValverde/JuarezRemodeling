// import Video from '../assets/videos/TestimonialVideo.mp4';
// import ReactPlayer from 'react-player';

export function About() {
  return (
    <>
      <div
        id="about"
        style={{
          padding: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 100,
        }}
      >
        <div>
          <h1 style={{ fontSize: 75 }}>
            We follow a <br />
            simple philosophy.
          </h1>
          <h3 style={{ marginTop: -30 }}>
            Do good work at a fair price. On time, every time.
          </h3>
        </div>
        <div style={{ width: 500, maxWidth: '100%', textAlign: 'right' }}>
          <p>
            If you’ve been disappointed by remodelers who fail to deliver on
            their promises, know that you’re not alone. Juarez Remodeling
            Services stands apart. We take immense pride in our work, ensuring
            every project exceeds your vision. We work on every project as if
            it’s our own.
          </p>
        </div>
      </div>
      {/* video */}
      {/* 
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <video style={{ width: 800, maxWidth: '100%' }} controls>
            <source src={Video} type="video/mp4" />
          </video>
        </div> */}
      {/* <ReactPlayer url="https://vimeo.com/352786895" controls />; */}

      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/991717617?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          // frameBorder="0"
          // allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          title="Juarez Testimonial Video"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}

export function TabletAbout() {
  return (
    <>
      <div
        id="about"
        style={{
          padding: 50,
        }}
      >
        <div>
          <h1 style={{ fontSize: 60 }}>
            We follow a <br />
            simple philosophy.
          </h1>
          <h3 style={{ marginTop: -20 }}>
            Do good work at a fair price. On time, every time.
          </h3>
        </div>
        <div style={{ marginTop: -20 }}>
          <p>
            If you’ve been disappointed by remodelers who fail to deliver on
            their promises, know that you’re not alone. Juarez Remodeling
            Services stands apart. We take immense pride in our work, ensuring
            every project exceeds your vision. We work on every project as if
            it’s our own.
          </p>
        </div>
      </div>

      {/* video */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <video style={{ width: 600, maxWidth: '100%' }} controls>
          {/* <source src={Video} type="video/mp4" /> */}
        </video>
      </div>
    </>
  );
}

export function MobileAbout() {
  return (
    <>
      <div
        id="about"
        style={{
          padding: 20,
          marginTop: 50,
        }}
      >
        <div>
          <h1 style={{ fontSize: 30 }}>
            We follow a <br />
            simple philosophy.
          </h1>
          <h3 style={{ fontSize: 20 }}>
            Do good work at a fair price. <br />
            On time, every time.
          </h3>
        </div>
        <div>
          <p style={{ fontSize: 15 }}>
            If you’ve been disappointed by remodelers who fail to deliver on
            their promises, know that you’re not alone. Juarez Remodeling
            Services stands apart. We take immense pride in our work, ensuring
            every project exceeds your vision. We work on every project as if
            it’s our own.
          </p>
        </div>
      </div>

      {/* video */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <video style={{ width: 350, maxWidth: '100%' }} controls>
          {/* <source src={Video} type="video/mp4" /> */}
        </video>
      </div>
    </>
  );
}
