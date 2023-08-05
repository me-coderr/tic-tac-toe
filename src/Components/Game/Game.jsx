import React, { useState } from 'react';
import Grid_box from '../Grid-box/Grid-box';
import ResetGame from '../ResetGame/ResetGame';

const Game = (props) => {

    const [didWin, setDidWin] = useState(false);
    const [toRestart, setToRestart] =useState(false);

    let timesPlayed = 0;

    const onResetClick = () => {
        setToRestart(true);
        setDidWin(false);
    }

    const updateGridBoxValue = (setXO) => {
        if(timesPlayed++ % 2 == 0) setXO('O');
        else setXO('X');
    }

    const stopGame = (player) => {
        setDidWin(player);
    }

  return  <>
        {
        (didWin) ? 
        <div className="won">
            <h1>Player {didWin} Won</h1>
        </div>
        :
        <div className='game'>
            <div className="board-row row1">
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-top-0 b-left-0"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-top-0"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-top-0 b-right-0"></Grid_box>
            </div>
            <div className="board-row row2">
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-left-0"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-right-0"></Grid_box>
            </div>
            <div className="board-row row3">
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-bottom-0 b-left-0"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-bottom-0"></Grid_box>
                <Grid_box setToRestart = {setToRestart} toRestart = {toRestart}  stopGame = {stopGame} updateGridBoxValue = {updateGridBoxValue} className="square b-bottom-0 b-right-0"></Grid_box>
            </div>
        </div>
        }
        <ResetGame onResetClick = {onResetClick}/>
        </>

}

export default Game;
