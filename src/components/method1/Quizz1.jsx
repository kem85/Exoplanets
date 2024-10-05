import React, { useState } from 'react';
import './Quizz1.css';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "What does Astrometry measure?",
      answerOptions: [
        { answerText: 'Brightness of stars', isCorrect: false },
        { answerText: 'The positions and movements of stars', isCorrect: true },
        { answerText: 'Size of planets', isCorrect: false },
        { answerText: 'Distance between galaxies', isCorrect: false },
      ],
    },
    {
      questionText: "How do we detect a star's wobble?",
      answerOptions: [
        { answerText: 'By its gravity', isCorrect: false },
        { answerText: 'By Doppler shifts or visible wobbles', isCorrect: true },
        { answerText: 'By color change', isCorrect: false },
        { answerText: 'By light refraction', isCorrect: false },
      ],
    },
    {
      questionText: "How difficult is Astrometry to perform from Earth?",
      answerOptions: [
        { answerText: 'Very easy', isCorrect: false },
        { answerText: 'Extremely difficult due to atmospheric distortion', isCorrect: true },
        { answerText: 'Impossible', isCorrect: false },
        { answerText: 'Moderately hard', isCorrect: false },
      ],
    },
    {
      questionText: "Which planet is closest to Earth?",
      answerOptions: [
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Proxima Centauri b', isCorrect: true },
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}! 🎉
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                className="quiz-button"
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
