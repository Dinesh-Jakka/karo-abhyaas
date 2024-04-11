import { Link } from "react-router-dom";

import "./index.css";

const Review = (props) => {
  const { studentDetails } = props;
  const { id, name, text } = studentDetails;
  return (
    <Link to={`/student/${id}`} className="link-item">
      <li className="review-item">
        <h1 className="title">{name}</h1>
        <p className="text">{text}</p>
      </li>
    </Link>
  );
};
export default Review;
