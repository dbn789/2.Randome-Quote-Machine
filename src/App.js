import React from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = React.useState({'quote': 'Random Quote Machine. This is my first React app!', 'author': 'Vitaly Tutaev'});
  const [color, setColor] = React.useState('gray');
  const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "X-Api-Key": "W3EfE+evEFYdgmTbX459ZQ==UB8Ym2SjwsY9Qia8",
      }
    };
    const url = new URL ('https://api.api-ninjas.com/v1/quotes?category=');
    let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
    let tumblrLink = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='


function changeColor() {
const colors = [];
for (let i = 0; i < 3; i++) colors.push(Math.floor(Math.random()*255))
  return `RGB(${colors[0]},${colors[1]},${colors[2]})`
}

    function nextQuote(){
      getData().then(res => {
          const newColor = changeColor();
          setColor(newColor);
          setQuote(res[0]);
        })
      
    }

async function getData() {
  const res = await fetch(url, options);
  const json = await res.json();
  return json;
} 

twitterLink += encodeURIComponent('"' + quote.quote + '" '+ quote.author);
tumblrLink += encodeURIComponent(quote.author) + '&content=' + encodeURIComponent(quote.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';


  return (
    <div style={{backgroundColor:color,  transitionProperty: 'all', transitionDuration:'0.5s', transitionTimingFunction:'linear' }} id="body" >
    <div id="quote-box">
    <div id="content">
      <h2 style={{color: color}}>{quote.quote}</h2>
      <h3 style={{color:color}}>{quote.author}</h3>
      <div className="buttons">
      <a style={{backgroundColor:color}} id="tweet-quote" href={twitterLink} target="_blank">
      <i className="fa fa-twitter"></i>
        </a> 
      <a style={{backgroundColor:color}} id="tumblr-quote" href={tumblrLink} target="_blank">
      <i className="fa fa-tumblr"></i>
        </a> 
      <button style={{backgroundColor:color}} id="new-quote" onClick={nextQuote}>New quote</button>
      </div>
    </div> 
    </div>
    </div>
  );
}

export default App;
