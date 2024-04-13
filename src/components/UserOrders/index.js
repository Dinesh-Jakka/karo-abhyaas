import "./index.css";

const orderDetails = [
  {
    orderId: "1357",
    name: "NEET BOOK 1",
    date: "10/04/2024",
    address: [
      "+R107, AJMERA INFINITY,",
      "KARUNA NAGAR, ELECTRONIC CITY,",
      "BANGALORE, INDIA",
      "PIN: 846009",
    ],
  },
  {
    orderId: "2468",
    name: "NEET BOOK 2",
    date: "11/04/2024",
    address: [
      "+R107, AJMERA INFINITY,",
      "KARUNA NAGAR, ELECTRONIC CITY,",
      "BANGALORE, INDIA",
      "PIN: 846009",
    ],
  },
  {
    orderId: "3578",
    name: "NEET BOOK 3",
    date: "11/04/2024",
    address: [
      "+R107, AJMERA INFINITY,",
      "KARUNA NAGAR, ELECTRONIC CITY,",
      "BANGALORE, INDIA",
      "PIN: 846009",
    ],
  },
];

const UserOrders = () => (
  <ul className="order-list-container">
    {orderDetails.map((eachOrderDetails) => (
      <li className="order">
        <div>
          <h1 className="order-id">ORDER #{eachOrderDetails.orderId}</h1>
          <div className="order-type-container">
            <p className="order-title">PRODUCT :</p>
            <p className="order-value">{eachOrderDetails.name}</p>
          </div>
          <div className="order-type-container">
            <p className="order-title">DATE :</p>
            <p className="order-value">{eachOrderDetails.date}</p>
          </div>
          <div className="order-type-container">
            <p className="order-title">ADDRESS:</p>
            <p className="order-value">
              {eachOrderDetails.address[0]} <br />
              {eachOrderDetails.address[1]}
              <br />
              {eachOrderDetails.address[2]}
              <br />
              {eachOrderDetails.address[3]}
            </p>
          </div>
        </div>
        <div className="order-options">
          <button className="order-option-btn">VIEW DETAILS</button>
          <button className="order-option-btn">TRACK ORDER</button>
          <button className="order-option-btn">DOWNLOAD INVOICE</button>
        </div>
      </li>
    ))}
  </ul>
);

export default UserOrders;
