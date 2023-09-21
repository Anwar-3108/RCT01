import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardComp({ name, email, id, rating, address ,getApiData ,image}) {

const dlt=(id)=>{
  const check=confirm('Are you sure you want to delete this item?');
  getApiData();
check?(fetch(`http://localhost:3000/restaurant/${id}`,{
  method:"DELETE",
  headers:{
    "Content-Type":"application/json:"
  }
}) ,
getApiData()) : "" ;




}




  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{rating}</Card.Title>
        <Card.Title>{address}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> &nbsp;&nbsp;&nbsp;
        <Button variant="primary">
          {" "}
          <Link
            to={"/update/" + id}
            style={{ color: "white", textDecoration: "none" }}
          >
            <span class="material-symbols-outlined">edit</span>
          </Link>{" "}
        </Button>
        <Button variant="danger" style={{ marginLeft: "2%" }} onClick={()=>dlt(id)}>
          {" "}
        
            <span class="material-symbols-outlined">delete</span>
          
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComp;
