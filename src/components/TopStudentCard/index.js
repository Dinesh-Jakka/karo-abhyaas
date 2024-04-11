import { Link } from "react-router-dom";

import "./index.css";

const TopStudentCard = (props) => {
  const { studentDetails } = props;
  const {id,name,image,text}=studentDetails;
  return (
    <Link to={`/student/${id}`} className="link-item">
      <li className="student-item">
        <img src={image} alt="student" className="thumbnail" />
        <h1 className="title">{name}</h1>
        <p className="text">{text}</p>
      </li>
    </Link>
  );
};
export default TopStudentCard;
