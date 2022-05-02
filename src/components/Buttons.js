import React,{useState} from 'react'
import classes from './Buttons.module.css'
//-----Adding buttons
const calBtns = []

for (let a = 1; a < 4; a++){
    calBtns.push(a)
}
calBtns.push('+')
for (let b = 4; b < 7; b++){
    calBtns.push(b)
}
calBtns.push('-')
for (let c = 7; c < 10; c++){
    calBtns.push(c)
}
calBtns.push('/')

//----------

const Buttons = () => {
    const [calc, setCalc] = useState([])
    const [result, setResult] = useState('')
    
    const backSpace = () => {
        setCalc(calc.slice(0,-1))
    }
    const calculate = () => {
        setResult(eval(calc))
    }
    const clearScreen = () => {
        setResult('')
        setCalc([])
    }
    console.log(calc)
    return (
        <div className={classes.centerall}>
        <div className={classes.app}>
            <div className={classes.screen}>
               {result&&<span className={classes.prev}>({result})</span>} {calc}
            </div>
            <div className={classes.display}>
                <div className={`${classes.twocols} ${classes.button}`} onClick={clearScreen}>AC</div>
                <div className={classes.button} onClick={backSpace}>DEL</div>
                <div className={classes.button} onClick={() => setCalc([...calc, '*'].join(''))}>x</div>
                {calBtns.map(btns => <div className={classes.button} key={btns} onClick={() => setCalc([...calc, btns].join(''))}>{btns}</div>)}
                <div className={classes.button} onClick={() => setCalc([...calc, '.'].join(''))}>.</div>
                <div className={`${classes.twocols} ${classes.button}`} onClick={() => setCalc([...calc, '0'].join(''))}>0</div>
                <div className={classes.button} onClick={calculate}>=</div>
            </div>
        </div>
        </div>
    )
}

export default Buttons
