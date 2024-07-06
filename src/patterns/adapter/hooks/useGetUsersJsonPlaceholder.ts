import {useEffect, useState} from "react";
import axios from "axios";
import {IUser} from "../models";

interface IEnotherUser {
    name: string
}

const adapter = (user: IEnotherUser) => {
    const firstAndMiddleName = user.name.split(" ")
    return {
        firstName: firstAndMiddleName[0],
        lastName: "",
        maidenName: firstAndMiddleName[1],
        age: undefined,
    }
}

export const useGetUsersJsonPlaceholder = () => {
    const [users, setUsers] = useState<IUser []>([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                const userAdapter: IUser [] = data.data.map((user: IEnotherUser) => {
                    return  adapter(user);
                })
                setUsers(userAdapter)
            })
    }, [])

    return {
        usersJsonPlaceholder: users
    };
};

