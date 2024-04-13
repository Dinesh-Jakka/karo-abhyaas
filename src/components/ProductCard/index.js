import CartContext from "../../context/CartContext";
import "./index.css";

const ProductCard = (props) => (
    
    <CartContext.Consumer>
      {value=>{
        const {addCartItem}=value 
        const onClickAddToCart=()=>{
          addCartItem({id,name,description,image,price})
        }
          const { productDetails } = props;
          // console.log(productDetails)
          const { name, id, description, image, price } = productDetails;
        return (
          <li className="video-card">
            <img alt="video thumbnail" src={image} className="video-thumbnail" />
            <div className="video-card-text-content">
              <p>{name}</p>
              <p>{description}</p>
              <p>{price}</p>
              <div className="practice-btn-container">
                <button onClick={onClickAddToCart} className="practice-btn">ADD TO CART</button>
              </div>
            </div>
          </li>
        );
      }}
    </CartContext.Consumer>

);

export default ProductCard;
