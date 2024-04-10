import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

type usersType = { users: Array<string> }

const SecretUsersTable = (props: usersType) => {
    return <div>
        {props.users.map(
            (user, index) => <div key={index}>{user}</div>
        )}
    </div>
}

const Users = React.memo(SecretUsersTable)

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['John', 'Sam', 'Jenny']);

    const addUserHandler = () => {
        setUsers(
            [...users, 'Frodo' + new Date().getTime()]
        )
    }

    return (
        <>
            <button onClick={() => {setCounter(counter + 1)}}>+</button>
            <button onClick={addUserHandler}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}