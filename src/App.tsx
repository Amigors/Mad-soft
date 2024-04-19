import { useState } from "react";
import "./styles.css";
import { UserPage } from "./pages/user/user-page";
import { AdminPage } from "./pages/admin/admin-page";
import { Link, Route, Switch } from "wouter";

type TQuestion = {
    id: number;
    title: string;
    type: string;
    answers: string[],
    rightAnswer?: string | string[]
}



export default function App() {
    console.log("render");
    const service: TQuestion[] = [
        {
            id: 0,
            title: "Любимый цвет?",
            type: "single",
            answers: ["Крассный", "Зеленый", "Голубой", "Черный"],
            rightAnswer: "Крассный",
        },
        {
            id: 1,
            title: "Цвет неба?",
            type: "single",
            answers: ["Крассный", "Зеленый", "Голубой", "Черный"],
            rightAnswer: "Голубой",
        },
        {
            id: 2,
            title: "Виды деревьев?",
            type: "multiple",
            answers: ["Хвойные", "Лиственные", "Грибные", "Солевые"],
            rightAnswer: ["Хвойные", "Лиственные"],
        },
    ];
    return (
        <div className="App">
            <nav style={{ display: "flex", justifyContent: 'space-around' }}>
                <Link href="/">Начальная страница</Link>
                <Link href="/user">Тест</Link>
                <Link href="/admin">Админка</Link>
            </nav>
            <Switch>
                <Route path="/user">
                    <UserPage info={service} />
                </Route>
                <Route path="/admin">
                    <AdminPage info={service} />
                </Route>
            </Switch>

        </div>
    );
}
