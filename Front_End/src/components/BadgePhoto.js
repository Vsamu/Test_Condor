import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class BadgePhoto extends React.Component {
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
        </div>                        
    );
  }
}

export default BadgePhoto;
