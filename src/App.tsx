import React from 'react';
import './App.css';
import {FormBuilder} from "./patterns/builder/FormBuilder";

function App() {

    const newForm = new FormBuilder()
        .setInput('Имя')
        .setInput('Фамилия')
        .setInput('Отчество')
        .setButton('Отправить', () => alert(32))
        .build()

    return (
    <div className="App">
        { newForm }
    </div>
  );
}

export default App;
