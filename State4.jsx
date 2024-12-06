import React ,{ useState} from 'react';

const State3 =() => {
    const [total , setTotal] =useState(0);
    return (
        <div>
            <h1>My Favourite Colour</h1>
            <button onClick={() => {
                setTotal(total+1);
            }}> Bhadta Hua</button>

            <button onClick={() => {
                setTotal(total-1);
            }}>Ghatta hua</button>

            <h2>{total}</h2>
        </div>


        






    )
    

}
export default State4;