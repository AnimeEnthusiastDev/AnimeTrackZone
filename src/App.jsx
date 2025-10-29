import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'

function Header() {
  return (
    <div>
      <p><span className="sitename"><b>AnimeTrackZone</b></span><span className="sitestatus" >This site under development</span></p>
    </div>
  );
}
function InputBox({userAnimeInput,setUserAnimeInput}) {
  const [userInput, setUserInput] = useState("");
  function saveInputText(event) {
    setUserInput(event.target.value)
  }
  function completedClickFunction() {
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"C",
        id:crypto.randomUUID()
      }
    ])
    setUserInput("");
  }
  function watchingClickFunction() {
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"WA",
        id:crypto.randomUUID()
      }
    ])
    setUserInput("");
  }
  function watchlistClickFunction() {
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"WL",
        id:crypto.randomUUID()
      }
    ])
    setUserInput("");
  }
  function partiallyClickFunction() {
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"PC",
        id:crypto.randomUUID()
      }
    ])
    setUserInput("");
  }
  function droppedClickFunction() {
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"D",
        id:crypto.randomUUID()
      }
    ])
    setUserInput("");
  }
  return (
    <div>
      <input 
        placeholder="Enter an anime.."
        onChange = {saveInputText}
        value={userInput}
        className="animeinputbox"
      />
      <div>
      <button onClick = {completedClickFunction} className="completedB">Add to Completed</button>
      <button onClick = {watchingClickFunction} className="watchingB">Currently Watching</button>
      <button onClick = {watchlistClickFunction} className="watchlistB">Add to Watchlist</button>
      <button onClick = {partiallyClickFunction} className="partiallyB">Partially Completed</button>
      <button onClick = {droppedClickFunction} className="droppedB">Dropped</button>
      </div>
    </div>
  );
}
function CenterFeature({userAnimeInput,setUserAnimeInput}) {
  return (
    <>
      <InputBox
        userAnimeInput={userAnimeInput}
        setUserAnimeInput={setUserAnimeInput}
      />
    </>
  );
}

function CompletedList({animename}) {
  return(
  <div className="useranimecompleted">
    {animename}
  </div>
  );
}
function Display({userAnimeInput,setUserAnimeInput}) {
  return (
    <>
    {userAnimeInput.map((store) => {
      return(
        (store.category) === "C" && (
          <CompletedList animename={store.animename} key={store.id}/>
        )
        /* (store.category) === "WA" && (
          <CompletedList animename={store.animename} key={store.id}/>
        )
        (store.category) === "WL" && (
          <CompletedList animename={store.animename} key={store.id}/>
        )
        (store.category) === "PC" && (
          <CompletedList animename={store.animename} key={store.id}/>
        )
         (store.category) === "D" && (
          <CompletedList animename={store.animename} key={store.id}/>
        ) */
      )
    })}
    </>
  );
}
function App() {
  const [count, setCount] = useState(0)
  const [userAnimeInput, setUserAnimeInput] = useState([]);
  return (
    <>
      <Header />
      <div>
        <h1>Welcome to AnimeTrackZone<button className="likeB">Like</button></h1>
      </div>
      <CenterFeature
        userAnimeInput={userAnimeInput}
        setUserAnimeInput={setUserAnimeInput}
      /> 
      <Display 
        userAnimeInput={userAnimeInput}
        setUserAnimeInput={setUserAnimeInput}
      />
    </>
  )
}

export default App
