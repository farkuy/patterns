import axios from "axios";
import {useEffect, useState} from "react";
import {IUser} from "../models";

export const useGetUsersDummyJson = () => {
    const [users, setUsers] = useState<IUser []>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(data => {
                const users: IUser [] = data.data.users.map((user: IUser) => {
                    return {
                        firstName: user.firstName,
                        lastName: user.lastName,
                        maidenName: user.maidenName,
                        age: user.age
                    }
                })
                setUsers(users)
            })
    }, [])

    return {
        usersDummyJson: users
    };
};

