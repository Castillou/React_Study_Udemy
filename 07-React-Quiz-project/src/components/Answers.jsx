import { useRef } from 'react';

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef();
    // 각자 속하는 컴포넌트 함수 사이클로부터 독립적으로 보관되고 관리되는 값을 관리하기 위해 참조를 사용할 수 있음

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected';
                }

                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)} className={cssClasses} disabled={answerState !== ''}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
