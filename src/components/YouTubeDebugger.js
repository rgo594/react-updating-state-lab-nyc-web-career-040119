// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{
  state = {
    errors: [],
    user: null,
    settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
      }
    }
  }
  handleClick = () => {
    this.setState({
    settings: {
      ...this.state.settings,
      bitrate: 12
    }
  })
  }
  handleRes = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <div>
          <button className="bitrate" onClick={this.handleClick}>bitrate</button>
        </div>

        <div>
          <button className="resolution" onClick={this.handleRes}>resolution</button>
        </div>
      </div>
    )
  }
}

export default YouTubeDebugger
