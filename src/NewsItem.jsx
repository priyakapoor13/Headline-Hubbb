import image from '../src/assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2"
      style={{
       
        display: 'flex',
        flexDirection: 'column', // Ensure card contents stack vertically
        height: '100%', // Let the card stretch to fill the container
      }}
    >
      <img 
  src={src ? src : image}
  alt="News" 
  className="card-img-top img-fluid"
  style={{ 
    height: '200px',       // You can adjust this height
    objectFit: 'cover',    // Ensures the image fills the space and crops excess
    width: '100%' 
  }} 
/>
      <div className="card-body d-flex flex-column" style={{ flex: 1 }}>
  <h5 className="card-title">{title}</h5>

  {/* Wrapper with flex-grow to absorb extra space */}
  <div style={{ flexGrow: 1 }}>
    <p className="card-text">
      {description
        ? description.slice(0, 90)
        : 'No official description available. Tap below to read more.'}
    </p>
  </div>

  <a href={url} className="btn btn-primary mt-auto">
    Read More
  </a>
</div>

    </div>
  );
};

export default NewsItem;

