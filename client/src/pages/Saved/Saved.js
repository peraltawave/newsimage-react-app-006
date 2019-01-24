import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';



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
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";



const styles = theme => ({
    appBar: {
      position: 'relative',
      background: '#3b5998',

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
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit *4,
      background: '#3b5998',

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
      padding: `${theme.spacing.unit * 2}px 0`,
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

  
    bookThumb: {
        height: 'auto',
        width: '100px',
        margin: '10px',
        float: 'left',
        marginTop: '-1px',
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
                    
                            {/* this below is the main text header */}
                            <div className={this.props.classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Saved Articles
                            </Typography>
                            
                            </div>
                    </div>
                    {/* End hero unit */}

                    {/* this below is the default grid that is used only on the album page */}
                    <div className={classNames(this.props.classes.layout, this.props.classes.cardGrid)}>

                        <Grid container spacing={40}>
                            {this.state.cards.map(card => (
                                <Grid item key={card} sm={6} md={4} lg={3}>
                                    <Card className={this.props.classes.card}>
                                        <CardMedia
                                            className={this.props.classes.cardMedia}
                                            image={card.image} // eslint-disable-line max-len
                                            title={card.title}
                                        />
                                        <CardContent className={this.props.classes.cardMedia}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography>
                                                {card.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* onclick FUNCTION that saves an article to the /saved route */}
                                            <Button onClick={() => this.view(card.url, card.title, card.description, card.image)} size="small" color="primary">
                                                Save
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

                <div>
                    {this.state.articles.length ? (
                        <List>
                            {this.state.articles.map(article => (
                                <ListItem key={article._id}>
                                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                                    <Link to={article.url}>
                                        {/* this below is the display of the image and description */}
                                            <img src={article.image} className={this.props.classes.bookThumb} /> {article.description}
                                            {/* {article.description}{article.url} */}
                                    </Link>
                                        {/* this below is the display of the trash can delete icon - which is set in the DeleteBtn component*/}
                                        
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                                        /* this below is the else statement - what to show if we have saved no articles */
                                        <h3>No Articles to Display</h3>
                        )}
                    <div className={this.props.classes.heroButtons}>
                                <Grid container spacing={16} justify="center">
                                     <Grid item>
                                        <Button variant="contained" color="primary" href="/album">
                                        <KeyboardBackspace fontSize="small" /> back to articles
                                        </Button>
                                    </Grid>
                                    {/* <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid>  */}
                                </Grid>
                            </div>
                </div>

                {/* Footer */}
                <footer className={this.props.classes.footer}>
                    <Typography className="newsImage-footer" align="center">
                        newsImage&trade;
                    </Typography>
                    <Typography className="tagLine-footer" align="center" >
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