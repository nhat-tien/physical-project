import { useEffect, useMemo, useState } from "react"
import JSConfetti from 'js-confetti'

export default function QuizBox({quiz}) {
const initAnswer = useMemo(() => quiz.answer,[quiz])
const [userAnswer, setUserAnswer] = useState('');


useEffect(() => { 
    const canvas = document.getElementById('my_confetti')
    if(userAnswer != '') {
        if(userAnswer == initAnswer) {
            handleRight(userAnswer);
            handleConfetti(canvas);
        } else {
            handleWrong(userAnswer);
        }
    }
},[userAnswer,initAnswer]);

const handleRight = ((userAnswer) => {
    const answers = document.querySelectorAll(".answer");
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

const handleConfetti = (canvas) => {
    const jsConfetti = new JSConfetti({ canvas });
    jsConfetti.addConfetti();
}

    return (
        <div className="bg-heavy-blue p-6 rounded-lg mb-3 relative mt-8">
            <h2 className="text-white text-2xl my-2">
                {quiz.title}
            </h2>
            <div className="ltsm:grid-cols-1 grid grid-cols-2 gap-4 z-30">
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='A' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.A}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='B' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.B}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='C' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.C}</button>
                <button className="answer bg-white text-blue-for-text text-md font-medium rounded-md p-3" id='D' onClick={(e) => setUserAnswer(e.target.id)}>{quiz.D}</button>
            </div>
            <canvas className='absolute top-0 right-0 h-16 w-full' id='my_confetti'></canvas>
        </div>

    )
}