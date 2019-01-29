import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import LogInTab from "../../components/Form/LogInForm";


import Typography from '@material-ui/core/Typography';


class Home extends Component {
  state = {
    
    image: "" // migedit - added
  };

  componentDidMount() {
    console.log(this.state)
    
  }

  

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name + ": " + this.state)
    this.setState({
      [name]: value
    });
  };

  
  

  render() {
    return (
      <Container fluid>
        <Jumbotron>
        <Typography className="newsImage-logo" align="center">newsImage</Typography>
        </Jumbotron>
        <LogInTab />
        
      </Container>
    );
  }
}

export default Home;
