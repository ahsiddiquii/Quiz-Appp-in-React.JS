function StatusBar(props) {
  return (
    <>
      <div
        className="container mt-3 bg-dark p-3 pt-4  rounded d-flex justify-content-between"
        style={{ color: "white" }}
      >
        <p className="fs-md-5">Answered Questions: {props.questionAnswered}</p>
        <p className="fs--md-5">Correct Questions: {props.correctAnswer}</p>
        <p className="fs-sm-5">Marks Obtained: {props.marksObt}</p>
      </div>
      
    </>
  );
}

export default StatusBar;
