
function AllQues(props) {
  return (
    <>
      <div className="container mt-5">
        <div
          className={`row ${
            props.questions.length !== 2
              ? "d-flex justify-content-start align-items-start"
              : ""
          }`}
        >
          {props.questions.map((value, index) => {
            return (
              <div
                className={`col-sm-${
                  props.questions.length === 2 ? "12" : "3"
                } border rounded  p-3 m-2`}
                key={index}
              >
                <p>
                  <b> Question: {index + 1} : </b> <br /> {value.question}
                </p>
                <p className="pt-3">
                  <b> Answer Options: </b>
                  <br />
                  {value.options.map((val, indx) => {
                    return (
                      <span key={indx}>
                        {indx + 1} : {val} <br />
                      </span>
                    );
                  })}
                </p>
                <p className="pt-3">
                  <b> Correct Answer: </b> {value.correctAns}
                </p>

                <button
                  className="btn danger-btn btn-danger me-2"
                  onClick={() => props.deleteQues(index)}
                >
                  Delete
                </button>
                <button
                  className="btn warning-btn btn-warning"
                  onClick={() => props.editQues(index)}
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllQues;
