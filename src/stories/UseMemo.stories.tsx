import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo demo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {

        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA;

    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
            <input value={b} onChange={(event) => setB(Number(event.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


//----------------------------------------------------------------------------------//


type usersType = { users: Array<string> }

const SecretUsersTable = (props: usersType) => {
    return <div>
        {props.users.map(
            (user, index) => <div key={index}>{user}</div>
        )}
    </div>
}

const Users = React.memo(SecretUsersTable)

export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['John', 'Sam', 'Jenny']);

    const newArr = useMemo(() => {
       return users.filter(u => u.indexOf('n') > -1)
    },[users])

    const addUserHandler = () => {
        setUsers(
            [...users, 'Frondo' + new Date().getTime()]
        )
    }

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUserHandler}>add user</button>
            {counter}
            <Users users={newArr}/>
        </>
    )
}