import React, { useState, useEffect } from 'react';
import Buttons from '../componenets/Buttons'
import '../assets/scss/home.css'
import ShowInfo from '../componenets/ShowInfo';


const Home = () => {
    const [calculationText, setCalculationText] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const symble = async (c) => {
        let symbles = ['%', '/', 'x', '-', '+'];
        console.log('calculationText', calculationText)
        if (calculationText) {
            if (calculationText.substr(calculationText.length - 1) === c) {
                return;
            } else {
                if (c === '%') {
                    setCalculationText(calculationText + '/' + 100)
                    console.log('calculationText', calculationText);
                    return calculate('', calculationText + '/' + 100);
                }
                let flag = true;
                symbles.map(s => {
                    if (flag) {
                        console.log(s, calculationText.substr(calculationText.length - 1));
                        if (s === calculationText.substr(calculationText.length - 1)) {
                            setCalculationText(calculationText.slice(0, calculationText.length - 1) + '' + c);
                            flag = false;
                        } else {
                            setCalculationText(calculationText ? calculationText + '' + c : c);
                        }
                    }
                });
            }
        }
    }

    const numberClick = (n) => {
        setCalculationText(calculationText ? calculationText + '' + n : n);
    }

    const clear = (flag) => {
        flag === 'AC' ? setCalculationText('') : setCalculationText(calculationText.slice(0, calculationText.length - 1));
    }

    const dot = (d) => {
        if (calculationText) {
            if (calculationText.slice(0, calculationText.length - 1) === d) {
                return false;
            } else {
                let symbles = ['%', '/', 'x', '-', '+'];
                let temp = calculationText;
                symbles.map(s => {
                    temp = temp.replaceAll(s, ' ');
                });
                if (temp.split(' ')[temp.split(' ').length - 1].includes('.')) {
                    return false;
                } else {
                    setCalculationText(calculationText ? calculationText + '' + d : d);
                }
            }
        } else {
            setCalculationText(calculationText ? calculationText + '' + d : d);
        }
    }

    const calculate = (c, text) => {
        let symbles = ['%', '/', 'x', '-', '+'];
        let temp = text?text:calculationText;
        console.log('flag = false;', temp, calculationText);
        symbles.map(s => {
            temp = temp.replaceAll(s, ' ' + s + ' ');
        });
        if (temp.split(' ')[temp.split(' ').length - 1]) {
            console.log('1');
            var total = 0;
            let temp1 = temp.split(' ');
            let len = temp1.length;
            for (let j = 0; j < len; j++) {
                console.log('2');
                temp1 && temp1.map((t, i) => {
                    console.log('temp1[i + 1]', temp1[i + 1])
                    if (temp1[i + 1] === '+') {
                        total = Number(temp1[i]) + Number(temp1[i + 2]);
                        temp1.shift();
                        temp1.shift();
                        temp1.shift();
                        temp1 = [total, ...temp1];
                        setCalculationText(`${total}`);
                    } else if (temp1[i + 1] === 'x') {
                        total = Number(temp1[i]) * Number(temp1[i + 2]);
                        temp1.shift();
                        temp1.shift();
                        temp1.shift();
                        temp1 = [total, ...temp1];
                        setCalculationText(`${total}`);
                    } else if (temp1[i + 1] === '/') {
                        console.log('3')
                        total = Number(temp1[i]) / Number(temp1[i + 2]);
                        temp1.shift();
                        temp1.shift();
                        temp1.shift();
                        temp1 = [total, ...temp1];
                        setCalculationText(`${total}`);
                    } else if (temp1[i + 1] === '%') {
                        total = Number(temp1[i]) % Number(temp1[i + 2]);
                        temp1.shift();
                        temp1.shift();
                        temp1.shift();
                        temp1 = [total, ...temp1];
                        setCalculationText(`${total}`);
                    } else if (temp1[i + 1] === '-') {
                        total = Number(temp1[i]) - Number(temp1[i + 2]);
                        temp1.shift();
                        temp1.shift();
                        temp1.shift();
                        temp1 = [total, ...temp1];
                        setCalculationText(`${total}`);
                    }
                });
            }
        }
    }

    const info = (i) => {
        setShowInfo(!showInfo);
    }

    useEffect(() => {
        document.querySelector('#display-area').style.bottom = document.querySelector('#buttons-div').offsetHeight + 'px';
    })

    return (
        <React.Fragment>
            <div name="display-area" id="display-area">{calculationText}</div>
            <div id="buttons-div">
                <div className="btn-row"><Buttons name="AC" buttonClick={clear} />
                    <Buttons name="Del" buttonClick={clear} />
                    <Buttons name="%" buttonClick={symble} />
                    <Buttons name="/" buttonClick={symble} />
                </div>
                <div className="btn-row">
                    <Buttons name="7" buttonClick={numberClick} />
                    <Buttons name="8" buttonClick={numberClick} />
                    <Buttons name="9" buttonClick={numberClick} />
                    <Buttons name="x" buttonClick={symble} />
                </div>
                <div className="btn-row">
                    <Buttons name="4" buttonClick={numberClick} />
                    <Buttons name="5" buttonClick={numberClick} />
                    <Buttons name="6" buttonClick={numberClick} />
                    <Buttons name="-" buttonClick={symble} />
                </div>
                <div className="btn-row">
                    <Buttons name="1" buttonClick={numberClick} />
                    <Buttons name="2" buttonClick={numberClick} />
                    <Buttons name="3" buttonClick={numberClick} />
                    <Buttons name="+" buttonClick={symble} />
                </div>
                <div className="btn-row">
                    <Buttons name="i" buttonClick={info} />
                    <Buttons name="0" buttonClick={numberClick} />
                    <Buttons name="." buttonClick={dot} />
                    <Buttons name="=" buttonClick={calculate} />
                </div>
            </div>
            <ShowInfo showFun={info} show={showInfo}/>
        </React.Fragment>
    );
}

export default Home;
