import React from 'react'

import './styles/Badge.css';

import Image from 'react-bootstrap/Image'
import logo from '../images/badge-header.svg';
import BadgePhoto from './BadgePhoto'


//this one is also a medium-leve component who recive information using props of his child (BadgePhoto)
class PhotosList extends React.Component {
    render() {
        return(
            <ul className="row">                                        
                {this.props.Photos.map((Descrption) => {                    
                    return( 
                        <li className="col-6 col-md-3" key={Descrption.id_photo}>
                            <BadgePhoto 
                            Photo = {Descrption.End_point} 
                            Name = {Descrption.Name_photo}
                            Date = {Descrption.date_photo}/>
                        </li>
                    )                                
                })}
            </ul>
        );
    }
}

export default PhotosList


