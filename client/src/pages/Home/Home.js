import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "../Books/Books.css";
import "../Detail/Detail.css";


class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    image: "" // migedit - added
  };

  componentDidMount() {
    console.log(this.state)
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {

        this.setState({ books: res.data, title: "", author: "", synopsis: "", image: "" })
        console.log(this.state)
      }
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name + ": " + this.state)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state)
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        image: this.state.image
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
        <Typography className="newsImage-logo" align="center">newsImage</Typography>
        </Jumbotron>
        <Link to={"/books/"}>
                      Go
                    </Link>
        
      </Container>
    );
  }
}

export default Books;
