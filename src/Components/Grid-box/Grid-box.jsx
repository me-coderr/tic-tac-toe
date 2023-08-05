import React, { useEffect, useRef, useState } from 'react'

const Grid_box = ({setToRestart, toRestart, className, updateGridBoxValue, stopGame}) => {
    
    const initialXOvalue = '';
    
    const thisComponent = useRef(null);

    const [xo, setXO] = useState(initialXOvalue);
    const [beenClicked, setBeenClicked] = useState(false);

    useEffect(() => {
        if(toRestart) {
            setXO(initialXOvalue);
            setBeenClicked((false));
            setToRestart((prevState) => !prevState);
        }
        return
    }, [toRestart]);

    const checkIfWin = (xos) => {

        let win = false;

        if(xos[0] == xos[1] && xos[1] == xos[2] && xos[0] != initialXOvalue && xos[1] != initialXOvalue ) win = true;
        else if(xos[3] == xos[4] && xos[4] == xos[5] && xos[5] != initialXOvalue && xos[4] != initialXOvalue) win = true;
        else if(xos[6] == xos[7] && xos[7] == xos[8] && xos[8] != initialXOvalue && xos[7] != initialXOvalue ) win = true;
        else if(xos[0] == xos[8] && xos[8] == xos[4] && xos[8] != initialXOvalue && xos[4] != initialXOvalue ) win = true;
        else if(xos[2] == xos[4] && xos[4] == xos[6] && xos[6] != initialXOvalue && xos[4] != initialXOvalue ) win = true;
        else if(xos[3] == xos[6] && xos[6] == xos[0] && xos[0] != initialXOvalue && xos[6] != initialXOvalue ) win = true;
        else if(xos[1] == xos[4] && xos[4] == xos[7] && xos[7] != initialXOvalue && xos[4] != initialXOvalue ) win = true;
        else if(xos[2] == xos[8] && xos[8] == xos[5] && xos[5] != initialXOvalue && xos[8] != initialXOvalue ) win = true;
        // console.log(win)

        return win;
    }

    useEffect(() => {
        if(xo == initialXOvalue) return;

        let boxValues = Array.from(document.getElementsByClassName('square')).map((elem) => {
            return elem.value;
        });

        let didWin = checkIfWin(boxValues);

        if(didWin) stopGame(xo);

    }, [xo]);

    const modifyXO = (e) => {
        if(!beenClicked){
            updateGridBoxValue(setXO);
            setBeenClicked(!beenClicked);
        }
        return;
    }

  return <div style = {{display: 'inline'}} className="square-wrapper"><button ref={thisComponent} type="button" value={xo} onClick={modifyXO} className={className}>{xo}</button></div>
}

export default Grid_box;