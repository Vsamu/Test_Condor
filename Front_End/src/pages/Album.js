import React from "react";

import "./styles/Badges.css";
import "./styles/photo.css";
import confLogo from "../images/badge-header.svg";
import PhotosList from "../components/PhotosList";
import Api from "../components/Api";
import { Link } from "react-router-dom";
import PhotosListAl from "../components/PhotosListAl"
import overlayFactory from 'react-bootstrap-table2-overlay';

class Album extends React.Component {
  state = {
    form: "",
    data: [],  
    look:'',
  };
  async componentDidMount() {
    let res = await fetch("https://evening-reef-13816.herokuapp.com/");
    let data = await res.json();

    return this.setState({
      data: data
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  };  
  // state that save the input value
  SearchState = e => {
    this.setState({
      form: {
        ...this.state.form,
        name: e.target.value
      }
    });
  };

  createAlbum = e => {
      alert('Album' + ' ' + this.state.form.name + ' ' + 'was created')

  }

  //maniii ya inserto en esa weaaaa
  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>
        <div style={{textAlign:"right"}}>
            <Link to="/" className="btn btn-primary">
                Previous Page
            </Link>            
        </div>
        <form onSubmit={this.handleSubmit}>
        <div>
            <input type="text" className="form-control" onChange={this.SearchState} placeholder="Write your Album's Name" />                                        
            <button className="btn btn-primary" onClick={this.createAlbum}>
                 Create Album
            </button>
        </div>
        </form>
        <div>        
          <div className="Badge__list">
            <div className="Badge__container">
              <PhotosListAl 
              Photo={this.state.data}               
              value_album = {this.state.form.name}/>
            </div>            
          </div>
        </div>                
        <div className="row">        
            
        </div>
      </React.Fragment>
    );
  }
}

export default Album;
