import { Link, withRouter } from "react-router-dom";

import Cookies from "js-cookie";

import CartContext from "../../context/CartContext";

import "./index.css";

const Header = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {(value) => {
        const { cartList } = value;
        const cartItemsCount = cartList.length;
        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        );
      }}
    </CartContext.Consumer>
  );

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-logo-container">
          <Link className="website-logo" to="/">
            Karo Abhayaas
          </Link>

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-image"
              onClick={onClickLogout}
            />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/sign-up" className="nav-link">
                JOIN US
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/classes" className="nav-link">
                Classes
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/account" className="nav-link">
                <span className="material-symbols-outlined">person</span>
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                  alt="nav cart"
                  className="nav-bar-image"
                />
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/sign-up" className="nav-link">
              JOIN US
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/classes" className="nav-link">
              Classes
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/about-us" className="nav-link">
              About Us
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/account" className="nav-link">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
              {renderCartItemsCount()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
