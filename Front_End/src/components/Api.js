

class Api { //Class for consults API's 
  // method for POST in Igmur Server
  async UploadImage(url) {
    const ClientId = 'Client-ID '+'546c25a59c58ad7'
    const reqOpts = {
      headers: {
        Accept: "application/json",
        Authorization: ClientId,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          image : url,
          type:'base64'
      })
    };
    let resp = await fetch('https://api.imgur.com/3/image', reqOpts); //Envío de formulario de actividad
    let response = await resp.json();
    return response;
  }

  //Method POST to search image by name descrimination
  async ShowState(filterName) {
    const reqOpts = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({          
          name: filterName
        })
      };      
      let resp = await fetch('http://localhost:5000/name', reqOpts); 
      let response = await resp.json();
      return response; 
  }
  //method for POST in Heroku Server
  async DbInLink(URL, name) {
    const reqOpts = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({
          imagen:URL,
          name: name
        })
      };
      let resp = await fetch('http://localhost:5000/', reqOpts); 
      let response = await resp.json();
      return response; 
  }


  async DeletImage(Id) {
    const reqOpts = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({
          imagen:Id,
        })
      };
      console.log(Id)
      let resp = await fetch('http://localhost:5000/delete', reqOpts); //Envío de formulario de actividad
      let response = await resp.json();
      return response; // se supone que aca se manda el dato de URL al API 
  }

  async UpdateAlbum(id, album) {    
    const reqOpts = {
      headers: {
        Accept: "application/json",        
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
          id : id,
          album: album,
      })
    };
    let resp = await fetch('http://localhost:5000/id', reqOpts); //Envío de formulario de actividad
    let response = await resp.json();
    return response;
  }
  //Method POST to
  async InTableAl(array) {
    const reqOpts = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({          
          name: array
        })
      };      
      let resp = await fetch('http://localhost:5000/tableAl', reqOpts); 
      let response = await resp.json();
      return response;

  }

    //Method GET to request to the other table
    async ReTableAl() {
      const reqOpts = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "GET",           
        };      
        let resp = await fetch('http://localhost:5000/OtherTaAl', reqOpts); 
        let response = await resp.json();
        return response;
    }


    //Method POST to
  async BringAlbum(Album_name) {
    const reqOpts = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST", 
        body: JSON.stringify({          
          name: Album_name
        })
      };      
      let resp = await fetch('http://localhost:5000/album', reqOpts); 
      let response = await resp.json();
      return response; 
  }


}
export default new Api();