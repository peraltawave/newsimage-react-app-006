import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Save, CameraIcon } from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
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


import FriendCard from "../../components/FriendCard";
import Wrapper from "../../components/Wrapper";
import friends from "./friends.json";
import "./Team.css";





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
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit *4,
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
    paddingTop: '100%', // originally 56.25% 16:9
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
    friends

  };

  

  componentDidMount() {

    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=599a090fac7d4698901471c3edff281c')
      .then(res => {

        var news = [];

        for (var i = 0; i < 4; i++) {
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




  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" className={this.props.classes.appBar}>
          <Toolbar>
            <CameraIcon className={this.props.classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Meet the Team
          </Typography>
          </Toolbar>
        </AppBar>

        <main>
          {/* Hero unit */}
          <div className={this.props.classes.heroUnit}>
            <div className={this.props.classes.heroContent}>
              <Typography className="newsImage-logo" align="center"> 
                newsImage Team  
            </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Below is a collection of current news articles represented only by it's associated image. You can choose to visit the news article or save it for later.
            </Typography>
              
            </div>
          </div>


          <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>




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
                        {/*card.title*/}
                      </Typography>
                      <Typography>
                        {card.description} 
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => this.view(card.url, card.title, card.description, card.image)} size="small" color="primary">
                        
                        <Save className={this.props.classes.icon} />

                        {/* CURLY BOIZ
                        THIS IS THE FUNCTION TO CALL TO SAVE - BUT WE CALL IT */}
                    </Button>
                      <Button size="small" color="primary" href={card.title} target="_blank">
                      <Visibility className={this.props.classes.icon} />

                    </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className={this.props.classes.heroButtons}>
               <Grid container spacing={16} justify="center">
                 <Grid item>
                   <Button variant="contained" color="primary" href="/saved">
                     my saved articles
                 </Button>
                 </Grid>
               </Grid>
             </div>
        </main>

        
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