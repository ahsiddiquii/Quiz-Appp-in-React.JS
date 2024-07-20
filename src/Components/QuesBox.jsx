function QuesBox(props) {
  return (
    <>
      <div className="container mt-4 p-3 ">
        <h4>Question No: {props.quesNo}</h4>
        <p className="fs-1">
          <b>Q: </b> {props.ques}
        </p>
      </div>
    </>
  );
}

export default QuesBox;
