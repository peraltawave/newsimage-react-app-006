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
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';



const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});


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
                <main>
                    {/* Hero unit */}
                    <div className={this.props.classes.heroUnit}>
                        <div className={this.props.classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Saved Articles
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                Below is a list of your saved articles
                            </Typography>
                            <div className={this.props.classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                     <Grid item>
                                        <Button variant="contained" color="primary" href="/album">
                                            back to articles
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid> 
                                </Grid>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {this.state.cards.map(card => (
                                <Grid item key={card} sm={6} md={4} lg={3}>
                                    <Card className={this.props.classes.card}>
                                        <CardMedia
                                            className={this.props.classes.cardMedia}
                                            image={card.image} // eslint-disable-line max-len
                                            title={card.title}
                                        />
                                        <CardContent className={this.props.classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={() => this.view(card.url, card.title, card.description, card.image)} size="small" color="primary">
                                           
Save
                        {/* CURLY BOIZ
                        THIS IS THE FUNCTION TO CALL TO VIEW */}
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                    </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>

                {/* THIS IS COPIED FROM books.js - put into the render */}
                <div>
                    {/* <Jumbotron>
            <h2>I have entered these..</h2>
          </Jumbotron> */}
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