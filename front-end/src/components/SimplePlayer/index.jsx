import React, { Component } from 'react'
import ProgressBar from '../ProgressBar'

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import '../../css/SimplePlayer.css'

export default class SimplePlayer extends Component {


    /* Seção de Render */

    render() {
        return (
            <div className='player-wraper'>
                <div className='controlers'>
                    <div className='control-buttons-row'>
                        <IconButton disableFocusRipple={true}>
                            <SvgIcon className='voltar-musica' component={SkipPreviousIcon} onClick={this.props.onPrevius} />
                        </IconButton>
                        <IconButton disableFocusRipple={true}>
                            <SvgIcon className='play-pause' component={this.props.isPlaying ? PauseIcon : PlayArrowIcon} onClick={this.props.onPlayPause} />
                        </IconButton>
                        <IconButton disableFocusRipple={true}>
                            <SvgIcon className='passar-musica' component={SkipNextIcon} onClick={this.props.onNext} />
                        </IconButton>
                    </div>
                    <div className='range-seeker-row'>
                        <div className='played-time'>
                            {formatTime(this.props.played*this.props.duration)}
                        </div>
                        <ProgressBar
                            className='seeker'
                            playedValue={this.props.played}
                            loadedValue={this.props.loaded}
                            onChange={(e) => this.props.onSeekChange(e)}
                            onMouseUp={(e) => this.props.onSeekMouseUp(e)}
                            onMouseDown={this.props.onSeekMouseDown}
                        />
                        <div className='duration-time'>
                            {formatTime(this.props.duration)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const u_seconds = Math.floor((seconds % 60) % 10)
    const dec_seconds = Math.floor((seconds % 60) / 10)

    return `${minutes}:${dec_seconds}${u_seconds}`
}