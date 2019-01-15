import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';





class Album extends React.Component {
    state = {
        cards: [],
        articles: []

    };


    loadArticles() {
        API.getArticles().then(res => {
            this.setState({ articles: res.data });
        })
    }

    componentDidMount() {
        this.loadArticles();

    }



    deleteArticle = id => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };




    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" className={this.props.classes.appBar}>
                    <Toolbar>
                        <CameraIcon className={this.props.classes.icon} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Saved Articles
                        </Typography>
                    </Toolbar>
                </AppBar>
               

                {/* THIS IS COPIED FROM books.js - put into the render */}
                <div>
                    {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <ListItem key={article._id}>
                                    <Link to={"/album/" + article._id}>
                                        <strong>{/*this is what is in the header */}
                                            <img src={article.image} className="bookThumb" />
                                            {article.url}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>

                {/* Footer */}
                    <footer className={this.props.classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                            newsImage&trade;
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                            a picture is worth a thousand words
                        </Typography>
                    </footer>
                {/* End footer */}
            </React.Fragment>

        );
    }
}

Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);