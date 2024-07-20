function QuizCompletedScr (props){

    return (
<>
    <div className="container p-5 mt-1 text-center text-md-start">
<h1 className={`text-warning mb-3`}>Click below to show your results</h1>
<button
          className="btn btn-success btn-lg "
          onClick={props.handleClick}
        >
          Show Results
        </button>
    </div>
</>
    );
}
export default QuizCompletedScr;