import React, {ChangeEvent, ReactNode} from "react";
import {CreateForm} from "./CreateForm";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";

export class FormBuilder {
    elements: ReactNode [] = [];
    constructor() {
        this.elements = [];
    }

    setInput(placeholder: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void) {
        const newInput = <Input placeholder={placeholder} change={onChange}/>
        this.elements.push(newInput)
        return this
    }

    setButton(title: string, click: () => void) {
        const newButton = <Button title={title} click={click}/>
        this.elements.push(newButton)
        return this
    }

    build() {
        return <CreateForm childes={this.elements}/>
    }
}