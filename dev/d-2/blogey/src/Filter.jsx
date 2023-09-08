import React from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom'

const Filter = () => {

    const [searchParam , setSearchParam] = useSearchParams()
    console.log(searchParam.get('age'))
    console.log(searchParam.get('post'))
    const age = searchParam.get('age'); 
    const post = searchParam.get('post') ;
  
  const navigate = useNavigate() ;
    return (
    <div>
      <h1>Filter Page</h1>
      <h2>Age: {age}</h2>
      <h2>Post : {post}</h2>
      <input type="text" placeholder='write something' onChange={(e)=>{setSearchParam({text:e.target.value})}} />
      <button onClick={()=>setSearchParam({post:"pakistan", age:22})}>change post param</button>
      <button  onClick={()=>{navigate('/about')}} >Go to About</button>
   
    </div>
  )
}

export default Filter
