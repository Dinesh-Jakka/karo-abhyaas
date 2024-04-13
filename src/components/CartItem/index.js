import CartContext from "../../context/CartContext";
import Popup from "reactjs-popup";
import "./index.css";

const CartItem = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { deleteCartItem } = value;
      const { cartItemDetails } = props;
      const { id, image, name, price } = cartItemDetails;
      const onDeleteItem = () => {
        deleteCartItem(id);
      };
      return (
        <li className="cart-list-item">
          <img alt="item img" className="item-img" src={image} />
          <h1>{name}</h1>
          <p className="price">{price}</p>

          <Popup trigger={<button className="deletebtn"> Delete</button>}>
            {(close) => {
              return (
                <div className="delete-product-popup">
                  <h1>Delete "{name}" From Cart?</h1>
                  <div className="btns-container">
                    <button className="cancel-btn" onClick={close}>
                      Cancel
                    </button>
                    <button className="deletebtn" onClick={onDeleteItem}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            }}
          </Popup>
        </li>
      );
    }}
  </CartContext.Consumer>
);

export default CartItem;