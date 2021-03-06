import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


//This is the medium-leve component who call the BadgePhoto component to provide information and image
const Example = (props) => {
  return (               
    <ListGroup>
        <div className="container">
            <h2>Album's List</h2>
        </div>
        {props.row.map((element) => {
            return(
                <ListGroupItem key="1" >{element} <button className="btn btn-primary" onClick={props.button}>Go To {element} album</button> </ListGroupItem> 
                
            )
        })} 
        
    </ListGroup>
  );

}

export default Example;