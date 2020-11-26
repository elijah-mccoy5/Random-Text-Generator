import React, {useState} from 'react';
import lorem from './lorem'
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count <=0) { 
      amount = 1}
    if (count > 8){
      amount = 8
    }
   setText(lorem.slice(0, amount));
  }
  return (
    <div className="App">
      <h3 className="header">Tired of Boring Dummy Text?</h3>
      <form className="lorem-form" 
      onSubmit={handleSubmit}>
        <label
        className="label"
        htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count}
        onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">Generate</button>
        <article className="lorem-text">
            {text.map((item, index) => (
               <p className="ipsum" key={index}>{item }</p>
            ))}
        </article>
      </form>
    </div>
  );
}

export default App;
