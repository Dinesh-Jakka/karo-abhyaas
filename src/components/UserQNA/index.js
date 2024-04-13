import "./index.css";

const questionDetails = [
  {
    question: "sample question 1?",
    moduleName: "Biology",
    date: "11/04/2024",
  },
  {
    question: "sample question 2?",
    moduleName: "Chemistry",
    date: "12/04/2024",
  },
  {
    question: "sample question 3?",
    moduleName: "Biology",
    date: "13/04/2024",
  },

];

const QuestionItem = (props) => {
  const { questionDetails } = props;
  const { question, moduleName, date } = questionDetails;
  return (
    <div className="question-item">
      <div>
        <h1 className="question">{question}</h1>
        <div className="question">
          <p className="question-title">MODULE NAME :</p>
          <p className="question-value">{moduleName}</p>
        </div>
        <div className="question">
          <p className="question-title">DATE :</p>
          <p className="question-value">{date}</p>
        </div>
      </div>
      <button className="view-reply-button">VIEW REPLY</button>
    </div>
  );
};

const UserQNA = () => (
  <div className="questions-container">
    {questionDetails.map((questionDetails) => (
      <QuestionItem
        key={questionDetails.question}
        questionDetails={questionDetails}
      />
    ))}
  </div>
);

export default UserQNA;
