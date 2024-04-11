import { Component } from 'react';
import Header from '../Header'
import ProductCard from '../ProductCard'
import { BsSearch } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";


import './index.css'
const productsList = [
  {
    id: 1,
    image:
      "https://static.vecteezy.com/system/resources/previews/006/126/596/original/best-selling-icon-for-products-and-online-shop-vector.jpg",
    name: "Product Name 1",
    description:
      "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
    price: "₹1500",
  },
  {
    id: 2,
    image:
      "https://e7.pngegg.com/pngimages/88/823/png-clipart-logo-product-design-brand-trademark-new-product-promotion-blue-text.png",
    name: "Product Name 2",
    description:
      "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
    price: "₹1500",
  },
  {
    id: 3,
    image:
      "https://e7.pngegg.com/pngimages/88/823/png-clipart-logo-product-design-brand-trademark-new-product-promotion-blue-text.png",
    name: "Product Name 3",
    description:
      "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
    price: "₹1500",
  },
  {
    id: 4,
    image:
      "https://static.vecteezy.com/system/resources/previews/006/126/596/original/best-selling-icon-for-products-and-online-shop-vector.jpg",
    name: "Product Name 4",
    description:
      "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
    price: "₹1500",
  },
  {
    id: 5,
    image:
      "https://e7.pngegg.com/pngimages/88/823/png-clipart-logo-product-design-brand-trademark-new-product-promotion-blue-text.png",
    name: "Product Name 5",
    description:
      "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
    price: "₹1500",
  },
];
class Products extends Component {
  render() {
    return (
      <div className="products-route">
        <Header />
        <div className="products-container">
          <div className="search-input-container">
            <BsSearch className="search-icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search"
            />
            <BsFilterRight />
          </div>
          <ul>{productsList.map(each=>(
            <ProductCard productDetails={each} key={each.id}/>
          ))}</ul>
        </div>
      </div>
    );
  }
}

export default Products 