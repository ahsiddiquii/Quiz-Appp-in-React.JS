import { Link } from "react-router-dom";
import "../App.css";

function QuizDetails(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4 text-white" to="/">
            <b> Quiz App</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent "
          >
            <ul className="navbar-nav ms-2  me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white Links m-1 p-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white Links m-1 p-3"
                  to="createquestions"
                >
                  Create Questions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white Links  m-1 p-3"
                  to="allquestions"
                >
                  All Questions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="container bg-dark rounded p-3 mt-2 "
        style={{ color: "white" }}
      >
        <h1 className="text-center">{props.title} </h1>
        <div className="d-md-flex justify-content-md-between  mt-3">
          <h5 className="">Total Questions: {props.totalQues} </h5>
          <h5 className=" ">
            Total Marks: {props.totalMarks} <br />
          </h5>
        </div>
        <h5>
          {props.timer < 30 ? "Time Left" : "Duration"}:{" "}
          <span className={`text-${props.timer <= 15 ? "danger" : "warning"}`}>
            {props.timer} secs
          </span>{" "}
        </h5>
      </div>
    </>
  );
}

export default QuizDetails;
