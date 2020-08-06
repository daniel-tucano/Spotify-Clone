import React, { Component } from 'react'
import SimplePlayer from '../../SimplePlayer'

import '../../../css/NowPlayingBarCenter.css'

export default class NowPlayingBarCenter extends Component {



    render() {
        return(
            <div className='now-playing-bar-center'>
                <SimplePlayer
                    duration={this.props.duration}
                    played={this.props.played}
                    loaded={this.props.loaded}
                    isPlaying={this.props.isPlaying}
                    onPlayPause={this.props.onPlayPause}
                    onPrevius={this.props.onPrevius}
                    onNext={this.props.onNext}
                    onSeekChange={(e) => this.props.onSeekChange(e)}
                    onSeekMouseDown={(e) => this.props.onSeekMouseDown(e)}
                    onSeekMouseUp={(e) => this.props.onSeekMouseUp(e)}
                />
            </div>
        )
    }
}