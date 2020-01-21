import React from 'react'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap';

// a bootstrap navbar for provide a better view
class Simple extends React.Component {   
    render() {
        return <Navbar bg="light" expand="lg">
        <Navbar.Brand href="http://tecsky.net">Photos Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
           {this.props.deleteState&&<Nav.Link onClick={this.props.cancelDelete}>Cancel Delete</Nav.Link>}
            <Nav className="mr-auto">                
                <NavDropdown title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={this.props.add}>Add Photos</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.props.delete}>Delete Photos</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.props.create}>Create Album</NavDropdown.Item>                    
                    <NavDropdown.Divider />                    
                </NavDropdown>
            </Nav>
            <Form inline onSubmit={this.props.Submit}>
                <FormControl type="text" onChange={this.props.searchInput} placeholder="Search" className="mr-sm-2" name="search"  />
                <Button variant="outline-success" onClick={this.props.searchButton}>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
    }
}
export default Simple