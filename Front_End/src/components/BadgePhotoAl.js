import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

//This is the lowest-level component who provide two action (add and delete) by buttons, that depends of the callback
//that highest-level component (page) do.

class BadgePhotoAl extends React.Component {
  render() {
    return (
      <div className="Badge">        
        <div className="Badge__section-name">        
          <img
            className="img-fluid img-thumbnail"
            src={this.props.Photo}
            alt="Avatar"
          />
        </div>

        <div className="Badge__section-info">        
          <h5>{this.props.Date}</h5>          
        </div>

        <div className="Badge__footer"><h5>{this.props.Name}</h5>
        </div>
        { this.props.delete&&<div className="Badge__footer"><button onClick={this.props.erase}>delete</button></div>}
       { this.props.crearalbum&&<div className="Badge__footer"><button onClick={this.props.prueba}>Add</button></div>}
      </div>
    );
  }
}

export default BadgePhotoAl;
