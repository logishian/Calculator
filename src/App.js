// import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import "./css/style.css"

function App() {

  const [value, setValue] = useState('0');
  const [prev, setPrev] = useState('');
  let used = false;

  function addToCurrent(event, btnvalue) {

    if (value.length === 1 && value === '0' && btnvalue !== '.')
    {
      setValue(btnvalue);
    }
    else{
      setValue(value+btnvalue);
      setPrev("");
    }
  }

  function reset() {
    setValue('0');
    setPrev('');
  }

  function calculate() {
    setPrev(value);
    let total = eval(value);
    setValue(String(total).includes('.') ? total.toFixed(9) : total);
  }


  return (
    <div className="App">
      <div className="calc">
        <div className="floaty">{prev}</div>
        <input type="text" value = {value} className="result" />
        <Button btnvalue = {'7'} addToCurrent={event => addToCurrent(event, '7')}/>
        <Button btnvalue = {'8'} addToCurrent={event => addToCurrent(event, '8')}/>
        <Button btnvalue = {'9'} addToCurrent={event => addToCurrent(event, '9')}/>
        <Button btnvalue = {'/'} addToCurrent={event => addToCurrent(event, '/')}/>
        <Button btnvalue = {'4'} addToCurrent={event => addToCurrent(event, '4')}/>
        <Button btnvalue = {'5'} addToCurrent={event => addToCurrent(event, '5')}/>
        <Button btnvalue = {'6'} addToCurrent={event => addToCurrent(event, '6')}/>
        <Button btnvalue = {'*'} addToCurrent={event => addToCurrent(event, '*')}/>
        <Button btnvalue = {'1'} addToCurrent={event => addToCurrent(event, '1')}/>
        <Button btnvalue = {'2'} addToCurrent={event => addToCurrent(event, '2')}/>
        <Button btnvalue = {'3'} addToCurrent={event => addToCurrent(event, '3')}/>
        <Button btnvalue = {'+'} addToCurrent={event => addToCurrent(event, '+')}/>
        <Button btnvalue = {'0'} addToCurrent={event => addToCurrent(event, '0')}/>
        <Button btnvalue = {'.'} addToCurrent={event => addToCurrent(event, '.')}/>
        <Button btnvalue = {'-'} addToCurrent={event => addToCurrent(event, '-')}/>
        <Button btnvalue = {'='} addToCurrent={calculate}/>
        <Button btnvalue = {'C'} addToCurrent={reset}/>
      </div>
    </div>
  );
}

export default App;
