import React , { useState} from "react";

const State3 =() => {
    const [total , setTotal] =useState(0);
    const [colour,setColour] = useState("black")
    return (
        <div>
            <button onClick={() => {
                setTotal(total+1);
            }}> Bhadta Hua</button>

            <button onClick={() => {
                setTotal(total-1);
            }}>Ghatta hua</button>

            <h2>{total}</h2>



            <h1 style={{color:colour}}>My Favourite Colour!</h1>

            <button onClick={() =>{
                setColour("blue");
            }}>Blue</button>

            <button onClick={() =>{
                setColour("yellow");
            }}>Yellow</button>

            <button onClick={() =>{
                setColour("Green");
            }}>Green</button>

            <button onClick={() =>{
                setColour("Red");
            }}>Red</button>

            <button onClick={() => {
                setColour("violet");
            }}>Violet</button>

            <button onClick={() =>{
                setColour("magenta");
            }}>Magenta</button>
        </div>

    )
    

}
export default State3;