import { useState } from "react";

type TUserAnswer = {
    idQuestion: number;
    text: string;
};

export const UserPage = ({ info }: any) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    console.log('info ', info)
    const currentQuestion = info[currentQuestionIndex];
    const dataUserAnswers = useState<TUserAnswer>();
    console.log("currentQuestion ", currentQuestion);
    return (
        <div className="App">
            <h1>{currentQuestion.title}</h1>
            {currentQuestion.answers.map((elem: any) => {
                console.log("elem ", elem);
                return (
                    <>
                        <input type="radio" id={elem} value={elem} name={elem}></input>
                        <label id={elem}>{elem}</label>
                    </>
                )

            })}

            {currentQuestionIndex === info.length - 1 ? (
                <>
                    <button
                        onClick={() => {
                            setCurrentQuestionIndex((prev) => prev - 1);
                        }}
                        disabled={currentQuestionIndex === 0}
                    >
                        Назад
                    </button>
                    <button
                        onClick={() => {
                            console.log("отпрвляем");
                        }}
                    >
                        Отправить
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => {
                            setCurrentQuestionIndex((prev) => prev - 1);
                        }}
                        disabled={currentQuestionIndex === 0}
                    >
                        Назад
                    </button>
                    <button
                        onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                        disabled={currentQuestionIndex === info.length - 1}
                    >
                        Вперед
                    </button>
                </>
            )}
        </div>
    );
};
