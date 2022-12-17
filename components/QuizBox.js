import { useEffect, useMemo, useState } from "react"
import JSConfetti from 'js-confetti'

export default function QuizBox({quiz}) {
const initAnswer = useMemo(() => quiz.answer,[quiz])
const jSConfetti = useMemo(() => {
    const canvas = document.getElementById('my_confetti');   
    return new JSConfetti({ canvas });
},[quiz]);

const [userAnswer, setUserAnswer] = useState('');

useEffect(() => {
    if(userAnswer != '') {
        if(userAnswer == initAnswer) {
            handleRight(userAnswer);
        } else {
            handleWrong(userAnswer);
        }
    }
},[userAnswer,initAnswer]);

const handleRight = ((userAnswer) => {
    const answers = document.querySelectorAll(".answer");
    jSConfetti.addConfetti();
    answers.forEach(answer => {
        if(answer.id == userAnswer) {
            answer.classList.add('right');
        } else {
            answer.classList.remove('wrong');
        }
    });
})

const handleWrong = ((userAnswer) => {
    const answers = document.querySelectorAll(".answer");
    answers.forEach(answer => {
        if(answer.id == userAnswer) {
            answer.classList.add('wrong');
        } else {
            answer.classList.remove('right','wrong');
        }
    })
})

    return (
        <div className="bg-heavy-blue p-6 rounded-lg my-4" id='my_confetti'>
            <h2 className="text-white text-2xl my-2">
                {quiz.title}
            </h2>
            <div className="ltsm:grid-cols-1 grid grid-cols-2 gap-4">
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='A' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.A}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='B' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.B}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='C' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.C}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='D' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.D}</button>
            </div>
        </div>
    )
}