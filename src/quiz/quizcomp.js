import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {

    var Questionbank = [
        {
            Question: "endi bro intha pani chesav?",
            Answers: [
                { Answer: "naku sambandham ledhu mawa", Number: 1 },
                { Answer: "plan chesindhi nene", Number: 2 },
                { Answer: "dhula therindha", Number: 3 },
                { Answer: "pichodu laa unnav raa", Number: 4 }
            ]
        },
        {
            Question: "endi bro antha pani chesav?",
            Answers: [
                { Answer: "naku sambandham ledhu mawa", Number: 1 },
                { Answer: "plan chesindhi nene", Number: 2 },
                { Answer: "dhula therindha", Number: 3 },
                { Answer: "pichodu laa unnav raa", Number: 4 }
            ]
        }, {
            Question: "endi bro entha pani chesav?",
            Answers: [
                { Answer: "naku sambandham ledhu mawa", Number: 1 },
                { Answer: "plan chesindhi nene", Number: 2 },
                { Answer: "dhula therindha", Number: 3 },
                { Answer: "pichodu laa unnav raa", Number: 4 }
            ]
        },
        {
            Question: "em pani chesav bro?",
            Answers: [
                { Answer: "naku sambandham ledhu mawa", Number: 1 },
                { Answer: "plan chesindhi nene", Number: 2 },
                { Answer: "dhula therindha", Number: 3 },
                { Answer: "pichodu laa unnav raa", Number: 4 }
            ]
        },
        {
            Question: "pani cheyava?",
            Answers: [
                { Answer: "naku sambandham ledhu mawa", Number: 1 },
                { Answer: "plan chesindhi nene", Number: 2 },
                { Answer: "dhula therindha", Number: 3 },
                { Answer: "pichodu laa unnav raa", Number: 4 }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(Number)=>
{
    if(Number==1)
    {
        setScore(score+1);
    }
    if(Number==2)
    {
        setScore(score+2);
    }
    if(Number==3)
    {
        setScore(score+3);
    }
    if(Number==4)
    {
        setScore(score+4);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                       
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.Number)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;