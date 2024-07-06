import React, {useEffect, useState} from 'react';
import {useGetUsersDummyJson} from "./hooks/useGetUsersDummyJson";
import {IUser} from "./models";
import {UserLIstItem} from "./UserLIstItem";
import {useGetUsersJsonPlaceholder} from "./hooks/useGetUsersJsonPlaceholder";

export const UserList = () => {
    const [allUsers, setAllUsers] = useState<IUser []>([]);

    const { usersDummyJson } = useGetUsersDummyJson();
    const { usersJsonPlaceholder } = useGetUsersJsonPlaceholder();

    useEffect(() => {
        if (usersDummyJson) {
            if (allUsers.length > 0)
                setAllUsers([...allUsers, ...usersDummyJson])
            else
                setAllUsers(usersDummyJson)
        }
        if (usersJsonPlaceholder) {
            if (allUsers.length > 0)
                setAllUsers([...allUsers, ...usersJsonPlaceholder])
            else
                setAllUsers(usersJsonPlaceholder)
        }
    }, [usersDummyJson])

    return (
        <div>
            {
                allUsers.map((user) => {
                    return (
                    <UserLIstItem
                        firstName={user.firstName}
                        maidenName={user.maidenName}
                        lastName={user.lastName}
                        age={user.age}
                    /> )
                })
            }
        </div>
    );
};

