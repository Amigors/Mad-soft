import { useState } from "react";

type TAdminPage = {
    info: any;
};

export const AdminPage = ({ info }: TAdminPage) => {
    console.log("AdminPage ", info);
    return (
        <div className="App">
            {info.map((elem: any) => {
                console.log("elem ", elem);
                return (
                    <>
                        <h1>
                            {elem.title}
                            <button>X</button>
                        </h1>

                        {elem.answers.map((item: any) => {
                            return (
                                <>
                                    <input type="radio" id={item} value={item} name={item}></input>
                                    <label id={item}>{item}</label>
                                </>
                            )
                        })}

                    </>
                );
            })}
            <div><button>Добавить вопрос</button></div>

            {/* Добавление вопроса
            <div>
                Введите текст вопроса
                <input type="text" />
            </div>
            <div>
                Выберите тип вопроса по количеству правильных ответов
                <select id="select">
                    <option>Один вариант</option>
                    <option>Несколько вариантов</option>
                    <option>Короткий ответ</option>
                    <option>Развернутый ответ</option>
                </select>
            </div>
            <div>
                Впишите варианты ответов через запятую (не менее двух)
                <input type="text" />
            </div>
            <div>
                Впишите правильный ответ (несколько вариантов для вопроса с множественным выбором)
                <input type="text" />
            </div> */}
        </div>
    );
};
