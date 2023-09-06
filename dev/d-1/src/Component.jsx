import React, { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
const compStyle = {
    background: 'white',
    color: 'black',
    height: '540px',
    margin: '0px 2px 0px 2px',
    alignItem: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // margin:'auto'
}
// let name1;



const Component = () => {

    /*
    const [name, setName]= useState('Syed');
    const [count , setCount] = useState(0)

    const handleName=()=>{
        let name = ['syed','anwar','rizwan']
        let int = Math.floor(Math.random()*3) ;
        // name1=name[int] ;
        // return name[int] ;
        setName(name[int]) ;
        
    }

    const handleClick=()=>{
        // setCount(count+1) ;
        setCount((prev)=>prev+1)
        // setCount((prev)=>prev+1) ;// it is correct way to do it
        // setCount(count+1) // count=1
        // setCount(count+1) //IDEALI it should be  count=2 but it won't

    }
    
*/


    const [item, setItem] = useState([
        {
            id: 1,
            checked: true,
            item: "item-1"
        },
        {
            id: 2,
            checked: false,
            item: "item-2",

        },
        {
            id: 3,
            checked: false,
            item: 'item-3'
        }]
    )
    return (
        <main style={compStyle}>

            {/* <h4>{name}</h4>
        <h4>{count}</h4>
          <button  onClick={handleName}>click me to change name </button>
          <button  onClick={handleClick}>click me inc count</button> */}

            {/* ======================================================== */}

            <ul>
                {item.map((e) => {
                    return <li key={e.id}>
                                <input type="button" checked={e.checked} />
                                <label htmlFor="">{e.item}</label>
                                <FaTrashAlt role='button' tabIndex={e.id}/>
                          </li>
                })}
            </ul>


        </main>
    )
}

export default Component
