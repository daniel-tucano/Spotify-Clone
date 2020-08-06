import React, { Component } from 'react'
import ProgressBar from '../../ProgressBar'

import '../../../css/NowPlayingBarRight.css'

export default class NowPlayingBarRight extends Component {

    render() {
        return (
            <div className='now-playing-bar-right'>
                <div className='volume-controler'>
                    <ProgressBar
                        playedValue={this.props.volume}
                        onMouseDown={e => (this.props.onVolumeMouseDown(e))}
                        onChange={e => (this.props.onVolumeChange(e))}
                    />
                </div>
            </div>
        )
    }
}