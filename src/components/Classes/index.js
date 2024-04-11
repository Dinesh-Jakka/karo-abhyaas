import { Component } from "react";
// import { AiFillFire } from "react-icons/ai";
import { Audio } from "react-loader-spinner";
import Cookies from "js-cookie";
import Header from "../Header";
import VideoCard from '../VideoCard'
import './index.css'


const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Classes extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  };

  componentDidMount = () => {
    this.getVideos();
  };

  getVideos = async () => {
    this.setState({ apiStatus: apiStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");
    const url = "https://apis.ccbp.in/videos/all?search=ib hubs";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      const updatedData = data.videos.map((eachItem) => ({
        id: eachItem.id,
        description:
          "Unlock the secrets to acing the NEET (National Eligibility cum Entrance Test) with our comprehensive video lecture led by expert educators. Designed specifically for aspiring medical students, this informative session will equip you with invaluable strategies and tips to excel in one of the most competitive entrance exams in India.",
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
      }));
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }
  };

  successView = () => {
    const { videosList } = this.state;

    return (
      <ul className="all-classes-container">
        {videosList.map((each) => (
          <VideoCard videoDetails={each} key={each.id} />
        ))}
      </ul>
    );
  };

  failureView = () => (
    <div>
      {(value) => {
        const { isDarkTheme } = value;
        const theme = isDarkTheme ? "dark" : "light";
        const imgUrl = isDarkTheme
          ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png";

        return (
          <div>
            <img src={imgUrl} alt="failure view" />

            <p theme={theme}>Oops! Something Went Wrong</p>
            <p theme={theme} as="p">
              We are having some trouble to complete your request. Please try
              again
            </p>
            <button type="button" onClick={this.getVideos}>
              Retry
            </button>
          </div>
        );
      }}
    </div>
  );

  loader = () => (
    <div className="loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );

  checkApiStatus = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.successView();
      case apiStatusConstants.failure:
        return this.failureView();
      case apiStatusConstants.inProgress:
        return this.loader();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="classes-container">
        <Header />
        <div className="classes-content">{this.checkApiStatus()}</div>
      </div>
    );
  }
}
export default Classes;
