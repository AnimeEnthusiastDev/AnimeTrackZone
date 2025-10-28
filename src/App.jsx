import { useState } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/ 

function Header() {
  return (
    <div>
      <p><b>AnimeTrackZone</b>&nbsp;&nbsp;&nbsp;This site under development</p>
    </div>
  );
}



function InputBox({userAnimeInput,setUserAnimeInput}) {
  const [userInput, setUserInput] = useState("");
  function saveInputText(event) {
    setUserInput(event.target.value)
    console.log(event.target.value)
  }
  function completedClickFunction() {



    console.log("clicked");
    setUserAnimeInput([
      ...userAnimeInput,
      {
        animename:userInput,
        category:"C",
        id:crypto.randomUUID()
      }
    ])
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
  }
  return (
    <div>
      <input 
        placeholder="Enter an anime.."
        onChange = {saveInputText}
      />
      <button onClick = {completedClickFunction}>Add to Completed</button>
      <button onClick = {watchingClickFunction}>Currently Watching</button>
      <button onClick = {watchlistClickFunction}>Add to Watchlist</button>
      <button onClick = {partiallyClickFunction}>Partially Completed</button>
      <button onClick = {droppedClickFunction}>Dropped</button>
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
  <div>
    {animename}
  </div>
  );
}
function Display({userAnimeInput,setUserAnimeInput}) {
  return (
    <>
    {userAnimeInput.map((store) => {
      return(
      <>
        {(store.category) === "C" && (
          <CompletedList animename={store.animename} key={store.id}/>
        
        
        
        
        )}

      </>
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
        <h1>Welcome to AnimeTrackZone</h1>
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
