import "./index.css";

const testDetails = [
  {
    testName: "Test 1",
    moduleName: "Biology",
    date: "11/04/2024",
    marks: 100,
    duration: "30 Mins",
  },
  {
    testName: "Test 2",
    moduleName: "Physics",
    date: "12/04/2024",
    marks: 100,
    duration: "45 Mins",
  },
  {
    testName: "Test 3",
    moduleName: "Chemistry",
    date: "13/04/2024",
    marks: 100,
    duration: "60 Mins",
  },
];

const TestItem = (props) => {
  const { testDetails } = props;
  const { testName, moduleName, date, marks, duration } = testDetails;
  return (
    <div className="test-con">
      <div>
        <h1 className="test-name">{testName}</h1>
        <div className="test">
          <p className="test-title">MODULE NAME :</p>
          <p className="test-value">{moduleName}</p>
        </div>
        <div className="test">
          <p className="test-title">DATE :</p>
          <p className="test-value">{date}</p>
        </div>
        <div className="test">:
          <p className="test-title">MARKS :</p>
          <p className="test-value">{marks}</p>
        </div>
        <div className="test">
          <p className="test-title">DURATION :</p>
          <p className="test-value">{duration}</p>
        </div>
      </div>

      <button className="start-button">START</button>
    </div>
  );
};

const UserTests = () => (
  <div className="test-container">
    {testDetails.map((testDetails) => (
      <TestItem key={testDetails.testName} testDetails={testDetails} />
    ))}
  </div>
);

export default UserTests;
