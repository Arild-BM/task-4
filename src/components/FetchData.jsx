import { useState, useEffect } from "react";


/**
 * Fetches data from some API and displays it
 */
function FetchData() {
  // Somewhere to store our data
  const [ fetchedData, setFetchedData ] = useState(null)
  const [ counter, setCounter ] = useState(5)

  // Downloading data
  useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => setFetchedData(data.results))

      return () => {
        // Code in here get run when this component gets removed from the DOM
      }
    },[]
  )
  
  
  return (
    <div>
      {
      fetchedData && (
      <div>
        <button onClick={() => setCounter((i) => i - 1 === -1 ? 19 : i-1)}>Prev</button>
        <h1>{counter +" - " + fetchedData[counter].name}</h1>
        <button onClick={() => setCounter((i) => i + 1 === 20 ? 0 : i + 1)}>Next</button>
      </div>)
      }
      </div>
    
  )
}

export default FetchData;