import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {

    var Questionbank = [
        {
            Question: "How often you feel sad?",
            Answers: [
                { Answer: "I do not feel sad.", Number: 0 },
                { Answer: "I feel sad for some time", Number: 1 },
                { Answer: "I am sad all the time and I can't snap out of it.", Number: 2 },
                { Answer: "I am so sad and unhappy that I can't stand it.", Number: 3 }
            ]
        },
        {
            Question: "Are you worried about your future?",
            Answers: [
                { Answer: "I am not particularly discouraged about the future.", Number: 0 },
                { Answer: "I feel discouraged about the future.", Number: 1 },
                { Answer: "I feel I have nothing to look forward to.", Number: 2 },
                { Answer: "I feel the future is hopeless and that things cannot improve.", Number: 3 }
            ]
        },
        {
            Question: "Do you consider yourself as a failure?",
            Answers: [
                { Answer: "I do not feel like a failure.", Number: 0 },
                { Answer: "I feel I have failed more than the average person.", Number: 1 },
                { Answer: "As I look back on my life, all I can see is a lot of failures.", Number: 2 },
                { Answer: "I feel I am a complete failure as a person.", Number: 3 }
            ]
        },
        {
            Question: "How Satisfied are you with the things you are used to?",
            Answers: [
                { Answer: 'I get as much satisfaction out of things as I used to.', Number: 0 },
                { Answer: "I don't enjoy things the way I used to", Number: 1 },
                { Answer: "I don't get real satisfaction out of anything anymore.", Number: 2 },
                { Answer: "I am dissatisfied or bored with everything.", Number: 3 }
            ]
        },
        {
            Question: "Do you feel disappointed about your work?",
            Answers: [
                { Answer: "I don't feel disappointed in myself.", Number: 0 },
                { Answer: "I am partially disappointed in myself.", Number: 1 },
                { Answer: "I am disgusted with myself", Number: 2 },
                { Answer: "I hate myself.", Number: 3 }
            ]
        },
        {
            Question: "Do you feel guilty for the works you done before?",
            Answers: [
                { Answer: "I don't feel particularly guilty", Number: 0 },
                { Answer: "I feel guilty a good part of the time.", Number: 1 },
                { Answer: "I feel quite guilty most of the time.", Number: 2 },
                { Answer: "I feel guilty all of the time.", Number: 3 }
            ]
        },
        {
            Question: "Do you think you are being punished?",
            Answers: [
                { Answer: "I don't feel I am being punished", Number: 0 },
                { Answer: "I feel I may be punished.", Number: 1 },
                { Answer: "I expect to be punished.", Number: 2 },
                { Answer: "I feel I am being punished.", Number: 3 }
            ]
        },
        {
            Question: "Suggest the best option that suits you",
            Answers: [
                { Answer: "I don't feel I am any worse than anybody else.", Number: 0 },
                { Answer: "I am critical of myself for my weaknesses or mistakes.", Number: 1 },
                { Answer: "I blame myself all the time for my faults.", Number: 2 },
                { Answer: "I blame myself for everything bad that happens.", Number: 3 }
            ]
        },
        {
            Question: "Express your views on killing yourself",
            Answers: [
                { Answer: "I don't have any thoughts of killing myself.", Number: 0 },
                { Answer: "I have thoughts of killing myself, but I would not carry them out.", Number: 1 },
                { Answer: "I would like to kill myself.", Number: 2 },
                { Answer: "I would kill myself if I had the chance.", Number: 3 }
            ]
        },
        {
            Question: "How often do you cry",
            Answers: [
                { Answer: "I don't cry any more than usual.", Number: 0 },
                { Answer: "I cry more now than I used to.", Number: 1 },
                { Answer: "I cry all the time now.", Number: 2 },
                { Answer: "I used to be able to cry, but now I can't cry even though I want to.", Number: 3 }
            ]
        },
        {
            Question: "How frequent do you become irritated?",
            Answers: [
                { Answer: "I am no more irritated by things than I ever was.", Number: 0 },
                { Answer: "I am slightly more irritated now than usual.", Number: 1 },
                { Answer: "I am quite annoyed or irritated a good deal of the time.", Number: 2 },
                { Answer: "I feel irritated all the time.", Number: 3 }
            ]
        },
        {
            Question: "How is your interest on other people",
            Answers: [
                { Answer: "I have not lost interest in other people.", Number: 0 },
                { Answer: "I am less interested in other people than I used to be.", Number: 1 },
                { Answer: "I have lost most of my interest in other people.", Number: 2 },
                { Answer: "I have lost all of my interest in other people.", Number: 3 }
            ]
        },
        {
            Question: "How well you can make your decisions",
            Answers: [
                { Answer: "I make decisions about as well as I ever could.", Number: 0 },
                { Answer: "I put off making decisions more than I used to.", Number: 1 },
                { Answer: "I have greater difficulty in making decisions more than I used to.", Number: 2 },
                { Answer: "I can't make decisions at all anymore.", Number: 3 }
            ]
        },
        {
            Question: " How do you perceive your physical appearance?",
            Answers: [
                { Answer: "I don't feel that I look any worse than I used to.", Number: 0 },
                { Answer: "I am worried that I am looking old or unattractive.", Number: 1 },
                { Answer: "I feel there are permanent changes in my appearance that make me look unattractive", Number: 2 },
                { Answer: "I believe that I look ugly.", Number: 3 }
            ]
        },
        {
            Question: "How well are you working than before",
            Answers: [
                { Answer: "I can work about as well as before.", Number: 0 },
                { Answer: "It takes an extra effort to get started at doing something.", Number: 1 },
                { Answer: "I have to push myself very hard to do anything.", Number: 2 },
                { Answer: "I can't do any work at all.", Number: 3 }
            ]
        },
        {
            Question: "Are you able to sleep properly",
            Answers: [
                { Answer: "I can sleep as well as usual.", Number: 0 },
                { Answer: "I don't sleep as well as I used to.", Number: 1 },
                { Answer: "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.", Number: 2 },
                { Answer: "I wake up several hours earlier than I used to and cannot get back to sleep.", Number: 3 }
            ]
        },
        {
            Question: "How easily you get tired",
            Answers: [
                { Answer: "I don't get more tired than usual.", Number: 0 },
                { Answer: "I get tired more easily than I used to.", Number: 1 },
                { Answer: "I get tired from doing almost anything", Number: 2 },
                { Answer: "I am too tired to do anything.", Number: 3 }
            ]
        },
        {
            Question: "How is your appetite compared to your past",
            Answers: [
                { Answer: "My appetite is no worse than usual.", Number: 0 },
                { Answer: "My appetite is not as good as it used to be.", Number: 1 },
                { Answer: "My appetite is much worse now.", Number: 2 },
                { Answer: "I have no appetite at all anymore", Number: 3 }
            ]
        },
        {
            Question: "How much weight you have lost",
            Answers: [
                { Answer: "I haven't lost much weight, if any, lately.", Number: 0 },
                { Answer: "I have lost more than five pounds.", Number: 1 },
                { Answer: "I have lost more than ten pounds.", Number: 2 },
                { Answer: "I have lost more than fifteen pounds.", Number: 3 }
            ]
        },
        {
            Question: "Are you worried about your physical illness",
            Answers: [
                { Answer: "I am no more worried about my health than usual.", Number: 0 },
                { Answer: "I am worried about physical problems like aches, pains, upset stomach, or constipation.", Number: 1 },
                { Answer: "I am very worried about physical problems and it's hard to think of much else.", Number: 2 },
                { Answer: "I am so worried about my physical problems that I cannot think of anything else.", Number: 3 }
            ]
        },
        


    ]
    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [visible, setVisible] = useState(true)
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const hide = () => setVisible(false)

const handleAnswerResponse=(Number)=>
{
    if(Number===1)
    {
        setScore(score+1);
    }
    if(Number===2)
    {
        setScore(score+2);
    }
    if(Number===3)
    {
        setScore(score+3);
    }
    if(Number===4)
    {
        setScore(score+4);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion< Questionbank.length)
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
console.log(score);
var bro = parseInt(score);
if(bro<10){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <div className='mawa'>
                    
                       <button type="submit" onClick={resetQuiz}>Attempt Again!!</button>
                       
                    </div>
                    <p>These ups and downs are considered normal</p>
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
else if(bro>=11 && bro <= 16){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <div className='text1'>You have scored {score} </div>
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p className='text2'>Mild mood disturbance</p>
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
else if(bro>=17 && bro <=20){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    <div className='text1'>You have scored {score} </div>
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <div className='text2'>Borderline clinical depression</div>
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
else if(bro>=21 && bro <=30){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p>Moderate depression</p>
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
else if(bro>=31 && bro <=40){
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p>Severe depression</p>
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
else {
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} 
                    <>
                       <button type="submit" onClick={resetQuiz}>Attempt again!!</button>
                       
                    </>
                    <p>Extreme depression</p>
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


}
export default QuizComp;