import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import TitleBar from './TitleBar.js';

// MEDIA PLAYER
import Sound from '../../node_modules/react-sound';

// MATERIAL DESIGN
import Card from '../../node_modules/material-ui/lib/card/card';
import CardActions from '../../node_modules/material-ui/lib/card/card-actions';
import CardMedia from '../../node_modules/material-ui/lib/card/card-media';
import CardTitle from '../../node_modules/material-ui/lib/card/card-title';
import FloatingActionButton from '../../node_modules/material-ui/lib/floating-action-button';
import Play from '../../node_modules/material-ui/lib/svg-icons/av/play-arrow';
import Pause from '../../node_modules/material-ui/lib/svg-icons/av/pause';
import AppBar from '../../node_modules/material-ui/lib/app-bar';
// import CardHeader from '../../node_modules/material-ui/lib/card/card-header';
// import CardText from '../../node_modules/material-ui/lib/card/card-text';

class SongPlayer extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      status : "STOPPED",
      disabled : false
    }
    
  }

  playSong() {
    console.log("playSong")
    this.setState({
      status: "PLAYING",
      disabled: true
    });
    
  }

  stopSong() {
    console.log("stopSong")
    this.setState({
      status: "STOPPED",
      disabled: false
    });
    
  }

  render() {
    return (
      <div>
        <AppBar title={'Now Playing'} />
        <Card>
          
          <CardMedia>
            <img src={this.props.location.state.song.image} />
          </CardMedia>
          <CardTitle title={this.props.location.state.song.name} subtitle={this.props.location.state.song.artist}  />
          <CardActions>
            <FloatingActionButton onClick={this.playSong.bind(this)} disabled={this.state.disabled}>
              <Play />
            </FloatingActionButton>
            <span></span>
            <FloatingActionButton onClick={this.stopSong.bind(this)} disabled={!this.state.disabled}>
              <Pause />
            </FloatingActionButton>
          </CardActions>
        </Card>
        <Sound
          url={this.props.location.state.song.url}
          playStatus={this.state.status}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying} />
      </div>
    )
  }
}

export default SongPlayer;