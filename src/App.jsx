import { useState } from "react";
import "./App.css";
import AnsOpts from "./Components/AnsOpts";
import CreateQues from "./Components/CreateQues";
import QuesBox from "./Components/QuesBox";
import QuizDetails from "./Components/QuizDetails";
import Results from "./Components/Results";
import StatusBar from "./Components/StatusBas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllQues from "./Components/AllQues";
import QuizCompletedScr from "./Components/QuizCompletedScr";

function App() {
  const [quizData, setQuizData] = useState({
    quizName: "React Quiz",
    totalMarks: 60,
    perQuesMarks: 10,
    questions: [
      {
        question: "Html Stands For _______",
        options: [
          "Hyper Text Makeup Language",
          "html",
          "Case Cading Style Sheet",
          "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
      },
      {
        question: "Css Stands For _________",
        options: [
          "Hypertext markup language",
          "Java",
          "Ram",
          "Casecading Style Sheet",
        ],
        correctAns: "Casecading Style Sheet",
      },
      {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
      },
      {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
      },
      {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
      },
      {
        question: "Rom Stands For _________",
        options: [
          "Hyper Text Markup Language",
          "html",
          "HTml",
          "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
      },
    ],
  });

  const { quizName, totalMarks, perQuesMarks, questions } = quizData;
  const [indexNum, setIndexNum] = useState(0);
  const [correctAnswer, setcorrectAnswer] = useState(0);
  const [questionAnswered, setquestionAnswered] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [count, setCount] = useState(30);
  const [intervalId, setIntervalId] = useState(0);





  const startQuiz = () => {
   let v =  setInterval(() => {
      setCount(previous => previous -1 );
    }, 1000);
    // console.log(v)
    setIntervalId(v);
    setdisabled(true);
    }

    if(count === 0 || questionAnswered === questions.length){
      clearInterval(intervalId);
      // setCount(10);
        // setIntervalId(0);
    }

  //   const startQuiz = setInterval(() => {
  //     setCount(prevCount => prevCount - 1);
  //   }, 1000);
  //   setIntervalId(startQuiz);
  // };

  // const startQuiz = () => {
  //   if (intervalId) {
  //     clearInterval(intervalId);
  //     setIntervalId(0);
  //     return;
  //   }

  //   const newIntervalId = setInterval(() => {
  //     setCount(prevCount => prevCount - 1);
  //   }, 1000);
  //   setIntervalId(newIntervalId);
  // };
  
  // const startQuiz = () => {
  //   setInterval(() => {
  //     setCount(prevCount => prevCount - 1);
  //   }, 1000);
  // }


  

  let showPreviousQues = () => {
    setIndexNum(indexNum - 1);
  };

  let onSelectValue = (e) => {
    console.log(e);
    setquestionAnswered(questionAnswered + 1);
    if (indexNum >= questions.length - 1) {
      setIndexNum(0);
      // setcorrectAnswer(0);
    } else {
      setIndexNum(indexNum + 1);
    }
    // setIndexNum(indexNum + 1);
    if (e === questions[indexNum].correctAns) {
      
      setcorrectAnswer(correctAnswer + 1);
    }
  };

  
  // let onSelectValue = (e) => {
  //   if (e === questions[indexNum].correctAns) {
  //     setcorrectAnswer(correctAnswer + 1);
  //   }
  //   if (indexNum >= questions.length - 1) {
  //     setIndexNum(0);
  //     setcorrectAnswer(0);
  //   } else {
  //     setIndexNum(indexNum + 1);
  //   }
  // };

  // ---ADD QUESTIONS SECTION---
  const [ansinputVal, setansinputVal] = useState("");
  const [quesinputVal, setquesinputVal] = useState("");
  const [correctansinputVal, setcorrectansinputVal] = useState("");
  const [quesEditindex, setquesEditindex] = useState();

  let quesonChangeHandler = (e) => {
    setquesinputVal(e.target.value);
  };
  let ansonChangeHandler = (e) => {
    setansinputVal(e.target.value);
  };
  let crtansonChangeHandler = (e) => {
    setcorrectansinputVal(e.target.value);
  };

  let a = ansinputVal;
  let aSplit = a.split(",");

  let array = {
    question: quesinputVal,
    options: aSplit,
    correctAns: correctansinputVal,
  };

  // ---For Edit & Add New Questions:---
  let onClickSubmit = () => {
    // ---For Edit Questions:---
    if (quesEditindex > -1) {
      questions[quesEditindex] = array;
      setQuizData({
        quizName: "React Quiz",
        perQuesMarks: 10,
        questions: [...questions],
      });
      setquesEditindex(-1);
      setquesinputVal("");
      setansinputVal("");
      setcorrectansinputVal("");
    } else {
      // ---For Add New Questions:---
      questions.push(array);
      setQuizData({
        quizName: "React Quiz",
        perQuesMarks: 10,
        questions: [...questions],
      });
      setquesinputVal("");
      setansinputVal("");
      setcorrectansinputVal("");
    }
  };

  // ---For Delete Questions:---
  let deleteQues = (index) => {
    questions.splice(index, 1);
    setQuizData({
      quizName: "React Quiz",
      perQuesMarks: 10,
      questions: [...questions],
    });
    console.log(questions);
  };

  // ---For Edit Questions:---
  let editQues = (index) => {
    setquesEditindex(index);
    setquesinputVal(questions[index].question);
    setcorrectansinputVal(questions[index].correctAns);
    const [opt1, opt2, opt3, opt4] = questions[index].options;
    setansinputVal(`${opt1},${opt2},${opt3},${opt4}`);
  };

  const handleClick = (event) => {
    setIsShown(true);
  };

  const quizDone = () => {
    setIsShown(false);
    setIndexNum(0);
    setcorrectAnswer(0);
    setquestionAnswered(0);
    setCount(30);
    setdisabled(false)
  };

  return (
    <BrowserRouter>
      <QuizDetails
        title={quizName}
        totalMarks={perQuesMarks * questions.length}
        totalQues={questions.length}
        timer={count}
      />
      <Routes>
        {/* <Route
          path="/"
          element={ isShown ? <Results questionAnswered={questionAnswered} correctAnswer={correctAnswer}
              marksObt={correctAnswer * perQuesMarks} totalMarks={perQuesMarks * questions.length}
        totalQues={questions.length} quizDone={quizDone}/> : [
            <QuesBox
              quesNo={indexNum + 1}
              ques={questions[indexNum].question}
            />,
            <AnsOpts
              ansOptns={questions[indexNum].options}
              onSelectValue={onSelectValue}
              showPreviousQues={showPreviousQues}
              // showNextQues={showNextQues}
              indexNum={indexNum}
              questions={questions}
              handleClick={handleClick}
            />,
            <StatusBar
              questionAnswered={questionAnswered}
              correctAnswer={correctAnswer}
              marksObt={correctAnswer * perQuesMarks}
            />,
          ]}
        /> */}
        <Route
          path="/"
          element={
            (questionAnswered === questions.length) || count === 0 ? (
              isShown ? (
                <Results
                  questionAnswered={questionAnswered}
                  correctAnswer={correctAnswer}
                  marksObt={correctAnswer * perQuesMarks}
                  totalMarks={perQuesMarks * questions.length}
                  totalQues={questions.length}
                  quizDone={quizDone}
                  count={count}
                />
              ) : (
                [
                  <QuizCompletedScr handleClick={handleClick} />,
                  <StatusBar
                    questionAnswered={questionAnswered}
                    correctAnswer={correctAnswer}
                    marksObt={correctAnswer * perQuesMarks}
                    count={count}
                  />,
                ]
              )
            ) : (
              [
                <QuesBox
                  quesNo={indexNum + 1}
                  ques={questions[indexNum].question}
                />,
                <AnsOpts
                  ansOptns={questions[indexNum].options}
                  onSelectValue={onSelectValue}
                  showPreviousQues={showPreviousQues}
                  // showNextQues={showNextQues}
                  indexNum={indexNum}
                  questions={questions}
                  handleClick={handleClick}
                  startQuiz={startQuiz}
                  count={count}
                  disabled={disabled}
                />,
                <StatusBar
                  questionAnswered={questionAnswered}
                  correctAnswer={correctAnswer}
                  marksObt={correctAnswer * perQuesMarks}
                />,
              ]
            )
          }
        />
        <Route
          path="/createquestions"
          element={[
            <CreateQues
              quesinputVal={quesinputVal}
              quesonChangeHandler={quesonChangeHandler}
              ansinputVal={ansinputVal}
              ansonChangeHandler={ansonChangeHandler}
              correctansinputVal={correctansinputVal}
              crtansonChangeHandler={crtansonChangeHandler}
              onClickSubmit={onClickSubmit}
            />,

            <AllQues
              questions={questions}
              deleteQues={deleteQues}
              editQues={editQues}
            />,
          ]}
        />
        <Route
          path="/allquestions"
          element={
            <AllQues
              questions={questions}
              deleteQues={deleteQues}
              editQues={editQues}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
