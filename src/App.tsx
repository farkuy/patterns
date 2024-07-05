import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {FormBuilder} from "./patterns/builder/FormBuilder";

interface INewUserInfo{
    firstName: string,
    lastName: string,
    middleName: string,
}

function App() {

    const [newUserInfo, setNewUserInfo] = useState<INewUserInfo>( {
        firstName: "",
        lastName: "",
        middleName: "",
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
        setNewUserInfo({
            ...newUserInfo,
            [name]: event.target.value,
        });
        return
    };

    const newForm = new FormBuilder()
        .setInput('Имя', (e) => handleInputChange(e, 'firstName'))
        .setInput('Фамилия', (e) => handleInputChange(e, 'middleName'))
        .setInput('Отчество', (e) => handleInputChange(e, 'lastName'))
        .setButton('Отправить', () => alert(`${newUserInfo.middleName} ${newUserInfo.firstName} ${newUserInfo.lastName}`))
        .build()

    return (
    <div className="App">
        { newForm }
    </div>
  );
}

export default App;
