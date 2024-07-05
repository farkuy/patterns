import {makeAutoObservable} from "mobx";

class SingleTonUserStore{
    firstName?: string;
    lastName?: string;
    middleName?: string;
    private static instance: SingleTonUserStore;

    constructor() {
        if (SingleTonUserStore.instance) {
            return SingleTonUserStore.instance;
        }
        this.firstName = "";
        this.lastName = "";
        this.middleName = "";
        makeAutoObservable(this)
        SingleTonUserStore.instance = this;
    }

    setFirstName (value: string) {
        this.firstName = value;
    }

    setLastName (value: string) {
        this.lastName = value;
    }

    setMiddleName (value: string) {
        this.middleName = value;
    }

    get allName() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}

export const userInfo = new SingleTonUserStore();
