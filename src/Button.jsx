import { useState, useEffect } from "react"; //import useState

function Button({countToDisplay, buttonName}){  //countToDisplay is a prop which is act as  function
    const [count, setCount] = useState(0) 
    
    useEffect(() => { 
        countToDisplay(count); //pass count to the countToDisplay function through the useEffect
    }, [count]);

    return (
        <button onClick={() => setCount((count) => count + 1)}>
          {buttonName}
        </button>        
    )
}

export default Button; //default mean only one function is return inside this fil e