import { memo, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {

const [myApiData, setMyApiData]= useState(null)

const [myAuth, setMyAuth] = useState({
    email:null,
    password:null
})


const authData= async()=>{
try {
    const res= await fetch('http://localhost:3000/login');
    const data= await res.json();
    setMyApiData(data);
    console.log("Api data",data);
} catch (error) {
    console.log(error);
}
}

useEffect(()=>{
    authData();
},[])





const handleLogin =(event)=>{
event.preventDefault();
console.log("myApiData on handle login",myApiData);
console.log("myAuth on handle login",myAuth);

if(myApiData.email==myAuth.email && myApiData.password==myAuth.password   ){
    console.log('Authenticated...');
}else{
    alert('wrong email or password')
}

}

// console.log(`my auth`, myAuth);

  return (

<div  style={{maxWidth:'400px', alignItems:"center", display:'flex',justifyContent:"center"}} >
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"   onChange={(event)=>setMyAuth({...myAuth,email:event.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(event)=>setMyAuth({...myAuth,password:event.target.value})} />
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleLogin} >
        Submit
      </Button>
    </Form>
</div>
  );
}

export default memo(Login);