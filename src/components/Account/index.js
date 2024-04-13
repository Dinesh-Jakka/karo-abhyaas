import { Component } from "react";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";

import "./index.css";
import UserOrders from "../UserOrders";
import UserTests from "../UserTests";
import UserQNA from "../UserQNA";
import Header from "../Header";

const tabConstantsData = {
  orders: "ORDERS",
  tests: "TESTS",
  qna: "QNA",
};

class Account extends Component {
  state = {
    activeTab: "ORDERS",
  };

  onClickLogout = () => {
    const { history } = this.props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  

  onClickOrders = () => this.setState({ activeTab: tabConstantsData.orders });

  onClickTests = () => this.setState({ activeTab: tabConstantsData.tests });

  onClickQNA = () => this.setState({ activeTab: tabConstantsData.qna });

  renderAccountTabs = () => {
    const { activeTab } = this.state;
    return (
      <div className="account-tabs">
        <button
          className={
            activeTab === tabConstantsData.orders
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickOrders}
        >
          ORDERS
        </button>
        <button
          className={
            activeTab === tabConstantsData.tests
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickTests}
        >
          TESTS
        </button>
        <button
          className={
            activeTab === tabConstantsData.qna
              ? "active-tab-button"
              : "tab-button"
          }
          onClick={this.onClickQNA}
        >
          Q/A
        </button>
      </div>
    );
  };

  renderUserdetails = () => (
    <div className="user-details-container">
      <div className="user-content-container">
        <div>
          <h1 className="user-details-title">Some One</h1>
          <p className="user-details-number">+919988776655</p>
          <p className="user-details-gmail">someone.j@gmail.com</p>
        </div>
        <div className="address-container">
          <h1 className="user-details-title">ADDRESS</h1>
          <p className="user-details-address">
            +R107, AJMERA INFINITY, <br />
            KARUNA NAGAR, ELECTRONIC CITY,
            <br />
            BANGALORE, INDIA
            <br />
            PIN: 846009
          </p>
        </div>
      </div>
      <div className="edit-logout-buttons">
        <button className="edit-button">EDIT</button>
        <button className="logout-button" onClick={this.onClickLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  );

  renderActiveTabView = () => {
    const { activeTab } = this.state;

    switch (activeTab) {
      case tabConstantsData.orders:
        return <UserOrders />;
      case tabConstantsData.tests:
        return <UserTests />;
      case tabConstantsData.qna:
        return <UserQNA />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="account-route">
        <Header />
        <div className="account-container">
          {this.renderUserdetails()}
          {this.renderAccountTabs()}
          {this.renderActiveTabView()}
        </div>
      </div>
    );
  }
}

export default withRouter(Account);