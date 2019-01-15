import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Books.css";
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
          <h1>newsImage</h1>
        </Jumbotron>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Enter Some Information</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="ImageURL (Optional)"
              />

              <Input
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />

              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Info
              </FormBtn>
            </form>
          </Col>
          {/*  THIS SECTION DISPLAYS THE LIST OF BOOKS OR PICS THAT HAVE BEEN INPUT BY THE FORM!! */}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>I have entered these..</h2>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>{/*this is what is in the header */}
                      <img src={book.image} className="bookThumb" />
                      {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
