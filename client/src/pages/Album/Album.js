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
    cards: []

  };


  componentDidMount() {

    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=599a090fac7d4698901471c3edff281c')
      .then(res => {

        var news = [];

        for (var i = 0; i < 20; i++) {
          var obj = {

            image: res.data.articles[i].urlToImage,
            title: res.data.articles[i].url,
            description: res.data.articles[i].description,
            url: res.data.articles[i].url
          };

          news.push(obj)
        }
        this.setState({ cards: news });
      })
  }

  //Take data to API layer to go to backend to be saved/loaded
  view = (url, title, description, image) => {
    var data =
    {
      url: url,
      title: title,
      description: description,
      image: image
    };
    API.saveArticle(data).then(savedArticle =>{
      console.log(savedArticle)
    })
    .catch()
  }


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={this.props.classes.appBar}>
          <Toolbar>
            <CameraIcon className={this.props.classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
          </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={this.props.classes.heroUnit}>
            <div className={this.props.classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Album layout
            </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
            </Typography>
              <div className={this.props.classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
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
        {/* Footer */}
        <footer className={this.props.classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
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