import React from 'react'

import './styles/Badge.css';

import Image from 'react-bootstrap/Image'
import logo from '../images/badge-header.svg';
import BadgePhotoAl from './BadgePhotoAl'
import Api from './Api'

class PhotosListAl extends React.Component { 
    state={}
    render() {
        return(
            <ul className="row">                                        
                {this.props.Photo.map((Descrption) => {  
                    
                    this.handleclick = async e => {
                        const id = Descrption.id_photo; 
                        const otro = this.props.value_album                          
                        const req = await Api.UpdateAlbum(id, otro)                        
                        return (alert(req.message + ' ' + otro))     //maniiii estas alli?si 
                    }  
                    return( 
                        <li className="col-4 col-md-3" key={Descrption.id_photo}>                            
                            <BadgePhotoAl 
                            Photo = {Descrption.End_point} 
                            Name = {Descrption.Name_photo}
                            Date = {Descrption.date_photo}                             
                            prueba = {this.handleclick}                             
                            crearalbum = {this.props.addphoto}
                            erase={()=>this.props.obtainId(Descrption.id_photo)}
                            delete = {this.props.deletephoto}

                            />
                        </li>
                    )                                
                })}

                {}

            </ul>
        );
    }
}

export default PhotosListAl;

