function Results(props) {
  return (
    <>
      <div className="container mt-5">
        <h1>Quiz Results:</h1>
      </div>
      <div className="container mt-3 bg-dark rounded text-white p-4 fs-md-3">
        <p>
          Completed in:{" "}
          <span className="text-warning">{30 - props.count} seconds</span>
        </p>
        <p>
          Questions Attempted:{" "}
          <span className="text-warning">{props.questionAnswered}</span>
        </p>
        <p>
          Correct Answers:{" "}
          <span className="text-warning">{props.correctAnswer}</span>
        </p>
        <p>
          Total Questions:{" "}
          <span className="text-warning"> {props.totalQues}</span>
        </p>
        <p>
          Marks Obtained: <span className="text-warning">{props.marksObt}</span>
          / {props.totalMarks}
        </p>
        <p>
          Passing ratio:
          <span className={`text-warning`}> 70%</span>
        </p>
        <p>
          Percentage: You secured:{" "}
          <span
            className={`text-${
              (props.marksObt / props.totalMarks) * 100 >= 70
                ? "success"
                : "danger"
            }`}
          >
            {((props.marksObt / props.totalMarks) * 100).toFixed(2)}%
            {/* {Math.round((props.marksObt / props.totalMarks) * 100)}% */}
          </span>
        </p>
        <p>
          Passed or Failed:{" "}
          <span
            className={`text-${
              (props.marksObt / props.totalMarks) * 100 >= 70
                ? "success"
                : "danger"
            }`}
          >
            {(props.marksObt / props.totalMarks) * 100 >= 70
              ? "Passes"
              : "Failed"}
          </span>
        </p>
        <div className="container d-flex justify-content-center align-items-center">
          <button className="btn btn-success btn-lg " onClick={props.quizDone}>
            Quiz Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Results;
