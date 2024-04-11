import Cookies from "js-cookie";
import { Redirect, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../Header";
import TopStudentCard from "../TopStudentCard";
import Review from '../Review'
import Footer from '../Footer'

import "./index.css";

const topStudentsList = [
  {
    id: 1,
    name: "Dinesh",
    image:
      "https://www.adamanthr.com/wp-content/uploads/2016/04/dummy-man-570x570.png",
    text: "Every session is very detailed and provides simplified explanations.",
  },
  {
    id: 2,
    name: "Sneha",
    image:
      "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-woman-570x570.png",

    text: "I'm clearing others' doubts because of the in-depth understanding I developed here.",
  },
  {
    id: 3,
    name: "Vedanth",
    image: "https://pixy.org/src/31/315160.png",
    text: "With end-to-end guidance from the trainers, I learned things at a remarkable pace.",
  },
  {
    id: 4,
    name: "Shastra",
    image:
      "https://cdn2.iconfinder.com/data/icons/business-finance-ii-flat/2048/Business_Woman-512.png",
    text: "Every session is very detailed and provides simplified explanations.",
  },
];

const studentReviewsList = [
  {
    id: 1,
    name: "Malavika",
    text: "Every session is very detailed and provides simplified explanations.",
  },
  {
    id: 2,
    name: "Sunny",
    text: "I'm clearing others' doubts because of the in-depth understanding I developed here.",
  },
  {
    id: 3,
    name: "Shravani",
    text: "With end-to-end guidance from the trainers, I learned things at a remarkable pace.",
  },
  {
    id: 4,
    name: "Venkatesh",
    text: "Every session is very detailed and provides simplified explanations.",
  },
];

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };

  return (
    <>
      <Header />

      <div className="home-container">
        <div className="slider-container">
          <Slider className="slider-container" {...settings}>
            <div>
              <img
                className="slider-img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EVvRAZGcN4jtQRQf3VDJCAAAAA%26pid%3DApi&f=1&ipt=c2d7bbee11ef8aab2f8bd7fbe112a0f8b4f548968b457b15c0535c3dad4d8bb3&ipo=images"
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="https://dk7h1f5gq849l.cloudfront.net/subscription_photos/1677325885.NEETFC01.png"
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.b8dO1S6LDhISwlGjoQon2gHaB6%26pid%3DApi&f=1&ipt=3a0154b3e4df932afc61d4ccefb6025ed61507bb532cac10b459aa797b6c1c83&ipo=images"
              />
            </div>
            <div>
              <img
                className="slider-img"
                src="https://blogs.mcqdb.com/darwin/wp-content/uploads/sites/3/2021/08/NEET-Prep-tips.jpg"
              />
            </div>
          </Slider>
        </div>
        <h1 className="home-heading">Top Students</h1>
        <ul className="top-students-container">
          {topStudentsList.map((each) => (
            <TopStudentCard studentDetails={each} key={each.id} />
          ))}
        </ul>
        <h1 className="home-heading">Reviews</h1>
        <ul className="students-reviews-container">
          {studentReviewsList.map((each) => (
            <Review studentDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Home;
