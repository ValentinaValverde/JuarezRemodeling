import GoogleReviewCard from './GoogleReviewCard';

export default function GoogleReviews() {
  const data = [
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
      name: 'Same Mitchell',
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
    <div style={{ padding: 50 }}>
      <div style={{ display: 'flex', overflow: 'scroll' }}>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <GoogleReviewCard
                photo={item.photo}
                name={item.name}
                date={item.date}
                stars={item.stars}
                review={item.review}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
