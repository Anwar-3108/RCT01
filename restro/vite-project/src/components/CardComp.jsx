import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardComp({name, email, id,rating,address}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/300" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{rating}</Card.Title>
        <Card.Title>{address}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> &nbsp;&nbsp;&nbsp;
        <Button variant="primary"> <Link to={'/update/'+id}  style={{color:"white" , textDecoration:'none'}}>Update</Link> </Button>

      </Card.Body>
    </Card>
  );
}

export default CardComp;