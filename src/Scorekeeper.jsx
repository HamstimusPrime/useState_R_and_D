import { v4 as uuid } from 'uuid';
import { useState } from 'react';
export default function ScoreKeeper({ numPlayers }) {
    //create state

    const listNumbers = [];
    for (let i = 0; i < numPlayers; i++) {
        listNumbers[i] = { id: uuid(), playerNum: i + 1, numberCount: 0 };
    }
    const [playerInfo, setPlayerInfo] = useState(listNumbers);



    function addNumber(id) {

        const newList = playerInfo.map((item) => {
            item.id === id && item.numberCount++;
            return (item);
        });

        setPlayerInfo(newList)
    }

    function resetNumbers() {

        setPlayerInfo(listNumbers)

    }
    return (
        <>
            <ul>

                {playerInfo.map((item) => {
                    return (
                        <li key={item.id} onClick={() => { addNumber(item.id) }}>Player {item.playerNum}: {item.numberCount} <button> +1 </button></li>
                    )
                })}

            </ul>

            <button onClick={resetNumbers}>reset</button>

        </>)
}