
function CreateQues(props) {
  return (
    
    <>
      <div className="container mt-5  p-3 ">
        <h2>Add Questions</h2>
        <div className="form-floating mt-2">
          <input
            className="form-control w-50 "
            id="floatingInputQuesGrid"
            placeholder="Enter Question "
            value={props.quesinputVal}
            onChange={props.quesonChangeHandler}
          />
          <label htmlFor="floatingInputQuesGrid">Enter Question</label>
        </div>
        <p className="mt-3 ms-1">
          <b>
            Separate one answer option from another option with the help of a
            comma.
          </b>
        </p>
        <div className="form-floating mt-2">
          <input
            className="form-control w-50 "
            id="floatingInputQuesGrid"
            placeholder="Enter Answer Options "
            value={props.ansinputVal}
            onChange={props.ansonChangeHandler}
          />
          <label htmlFor="floatingInputQuesGrid">
            Enter Answer Options
          </label>
        </div>
        <div className="form-floating mt-2">
          <input
            className="form-control w-50 "
            id="floatingInputQuesGrid"
            placeholder="Enter Correct Answer "
            value={props.correctansinputVal}
            onChange={props.crtansonChangeHandler}
          />
          <label htmlFor="floatingInputQuesGrid">Enter Correct Answer</label>
        </div>
        <button
          className={`btn btn-warning warning-btn ${
            (props.correctansinputVal &&
              props.quesinputVal &&
              props.ansinputVal) === ""
              ? "disabled"
              : ""
          } mt-2 `}
          onClick={props.onClickSubmit}
        >
          Submit
        </button>
      </div>
      <div className="container"><hr className="w-100"/></div>
      
      {/* <div className="container"
              >
                <div className={`row ${
                  questions.length != 2 ? "d-flex justify-content-start align-items-start" : ""
                }`}>
                  {questions.map((value, index) => {
                    return (
                      <div
                        className={`col-sm-${
                          questions.length == 2 ? "12" : "3"
                        } border rounded  p-3 m-2`}
                      >
                        <p>
                          <b> Question: {index + 1} : </b> <br />{" "}
                          {value.question}
                        </p>
                        <p className="pt-3">
                          <b> Answer Options: </b>
                          <br />
                          {value.options.map((val, indx) => {
                            return (
                              <>
                                {indx + 1} : {val} <br />
                              </>
                            );
                          })}
                        </p>
                        <p className="pt-3">
                          <b> Correct Answer: </b> {value.correctAns}
                        </p>

                        <button
                          className="btn btn-danger me-2"
                          onClick={() => deleteQues(index)}
                        >
                          Delete
                        </button>
                        <button className="btn btn-warning" onClick={() => editQues(index)} >Edit</button>
                      </div>
                    );
                  })}
                </div>
              </div> */}
    </>
  );
}

export default CreateQues;
