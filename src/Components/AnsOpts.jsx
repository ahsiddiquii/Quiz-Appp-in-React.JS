function AnsOpts(props) {
  console.log(props.ansOptns);
  let answerOptions = props.ansOptns.map((value, index) => {
    return (
      <button
        className={`btn  me-3 mt-3  warning-btn btn-warning p-2 ${!props.disabled  ? "disabled" : ""}`}
        key={index}
        onClick={() => props.onSelectValue(value) }
      >
        {value}
      </button>
    );
  });
  return (
    <>
      <div className="container">{answerOptions}</div>
      <div className="container d-flex justify-content-center align-items-center mt-4">
        <button className={`btn btn-success btn-lg ${props.disabled ? "disabled" : ""}`} onClick={props.startQuiz}>Start Quiz</button>
      </div>
    </>
  );
}

export default AnsOpts;
