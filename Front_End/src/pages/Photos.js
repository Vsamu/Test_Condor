import React from "react";

import "./styles/Badges.css";
import "./styles/photo.css";
import Simple from "../components/Simple";
import confLogo from "../images/badge-header.svg";
import PhotosList from "../components/PhotosList";
import Api from "../components/Api";
import { Link } from "react-router-dom";
import PhotosListAl from "../components/PhotosListAl";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Example from '../components/ListOfAlbum';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      image: "",
      form: "",
      formOther: "",
      crearalbum: false,
      showAdd: false,
      look:'',
      data_backup: [],
      deleteState: false,
      other:'',
      rowState:false,
      albumlista: [],
      last:[],
    };
    this.albumlist = []
  }
  

  async componentDidMount() {
    console.log("3. didmount");
    let res = await fetch("https://evening-reef-13816.herokuapp.com/");
    let data = await res.json();

    return this.setState({
      data: data
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  //Set state of photo component
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        name: e.target.value
      }
    });
  };  

  // button for add image to heroku server
  AddImage = async e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(file);

    reader.onloadend = async () => {
      const index = await reader.result.indexOf(",");
      const data = reader.result.substring(index + 1);
      const response = await Api.UploadImage(data);
      const URL = await response.data.link;
      return this.setState({
        image: URL
      });
    };
    reader.readAsDataURL(file);
  };

  //button for add image to component
  AddPhoto = async e => {
    const image = this.state.image;
    const name = this.state.form.name;
    console.log(name);
    console.log(image);
    const resp = await Api.DbInLink(image, name);
    let res = await fetch("https://evening-reef-13816.herokuapp.com/");
    let data = await res.json();

    return this.setState({
      data: data,
      form: {
        ...this.state.form,
        name: ""
      },
      showAdd: false,
    });
  };


  ShowState = async e => {                     
    var pp = this.state.data;            
    try {
      if (this.state.look.name) {
        const resulta = pp.filter(element => element.Name_photo === this.state.look.name)
        const result = resulta
        console.log(result)
        const response = result                        
        return(
        this.setState({
            data_backup : this.state.data,
            data: response,                                        
        }))
      } else {
        this.setState({
          data:this.state.data_backup,
        })
      }    
    } catch {
        alert("Image's name does not exist")
    }                                        
}
SearchState= e => {
  this.setState({
    look: {
      ...this.state.form,
      name: e.target.value,
    },
  },()=>{
    if (!this.state.look.name) {
      this.setState({
      data:this.state.data_backup,
      })
    }    
  });
}

AlbumCreate = async () =>{
  this.albumlist.push(this.state.form.name);
  const res = await Api.InTableAl(this.albumlist)
  const response = await Api.ReTableAl;
  console.log(response)    

  this.setState({    
    other: this.state.form.name,
    showAl:false,
    rowState:true,
  },()=>{
    this.setState({
      albumlista: this.albumlist
    })
  })  
  alert('Album was created with succefully')
}

funtion = async ()=> {  
  const resp = await Api.BringAlbum(this.state.form.name)
  this.setState({
    last: resp
  })

}
  render() {
    return (
      <React.Fragment>
        <div>
          <Simple
            add={()=>this.setState({
              crearalbum: false,
              showAdd:true,              
            })}
            delete={() =>{
              this.setState({
                crearalbum:false,
                deleteState: true,                
              })
            }}
            create={() =>
              this.setState({
                crearalbum: true,
                showAl: true,
              })              
            }
            deleteState = {this.state.deleteState}
            Submit={this.handleSubmit}
            searchInput={this.SearchState}
            searchButton={this.ShowState}
            cancelDelete={() => {
              this.setState({
                deleteState: false
              })
            }}
          />
        </div>                
        <br />        
        <div className="Badge__list">
          <div className="Badge__container">
            <PhotosListAl
              value_album={this.state.form.name}
              addphoto={this.state.crearalbum}
              Photo={this.state.data}
              deletephoto = {this.state.deleteState}
              obtainId = {async (id)=>{
                  const req = await Api.DeletImage(id)
                  let res = await fetch("https://evening-reef-13816.herokuapp.com/");
                  let data = await res.json();
              
                  return this.setState({
                    data: data
                  });                                   
              }}
            />
          </div>
        </div>
        <div className="row">
            <Example            
            row={this.state.albumlista} 
            button={this.funtion}/>
        </div>

        <div className="row">
            <PhotosList 
            Photos={this.state.last}/>

        </div>


        {/*modal of addPhoto*/}
        <div>
          <Modal show={this.state.showAdd} onHide={()=>this.setState({
                showAdd: false,
              })}>
            <Modal.Header closeButton>
              <Modal.Title>Add Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input type="file" name="image" onChange={this.AddImage} accept="image/png, image/jpeg" className="btn btn-primary" />           
              <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Name"
                />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>this.setState({
                showAdd: false,
              })}>
                Close
              </Button>
              <Button variant="primary" onClick={this.AddPhoto}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        


        {/*modal of Album*/}
        <div>
          <Modal show={this.state.showAl} onHide={()=>this.setState({
                showAl: false,
              })}>
            <Modal.Header closeButton>
              <Modal.Title>Add Photo</Modal.Title>
            </Modal.Header>
            <Modal.Body>              
              <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Album"
                />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={()=>this.setState({
                showAdd: false,
              })}>
                Close
              </Button>
              <Button variant="primary" onClick={this.AlbumCreate}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
  
      </React.Fragment>
    );
  }
}

export default Photos;
