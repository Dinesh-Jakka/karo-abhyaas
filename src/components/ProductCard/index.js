import "./index.css";

const ProductCard = (props) => {
  const { productDetails } = props;
  const { name, id, description, image, price } = productDetails;

  return (
    <li className="video-card">
      <img src={image} className="video-thumbnail" />
      <div className="video-card-text-content">
        <p>{name}</p>
        <p>{description}</p>
        <div className="practice-btn-container">
          <button className="practice-btn">{price}</button>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
