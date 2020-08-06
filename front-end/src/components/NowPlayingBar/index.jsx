import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import '../../css/NowPlayingBar.css'
import NowPlayingBarLeft from './NowPlayingBarLeft'
import NowPlayingBarCenter from './NowPlayingBarCenter'
import NowPlayingBarRight from './NowPlayingBarRight'


export default class NowPlayingBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false,
            isSeeking: false,
            currentPlayingIndex: 0,
            played: 0,
            playedSeconds: 0,
            loaded: 0,
            loadedSeconds: 0,
            duration: 0,
            volume: 0.5,
        }
    }

    /* Seção relativa ao React Player */

    handleOnReady = () => {
        this.setState({ duration: this.player.getDuration() })
        return
    }


    handlePlayPause = () => (
        this.setState((state, props) => ({
            isPlaying: !state.isPlaying,
        }))
    )

    handlePrevius = () => {
        if (this.state.currentPlayingIndex > 0) {
            this.setState((state, props) => ({
                currentPlayingIndex: (state.currentPlayingIndex - 1),
                played: 0,
                loaded: 0,
                playedSeconds: 0,
                loadedSeconds: 0,
            }))
        }
        return
    }


    handleNext = () => {
        if (this.state.currentPlayingIndex < this.props.musicUrls.length - 1) {
            this.setState((state, props) => ({
                currentPlayingIndex: (state.currentPlayingIndex + 1),
                played: 0,
                loaded: 0,
                playedSeconds: 0,
                loadedSeconds: 0,
            }))
        }
        return
    }

    handleProgress = (state) => {
        if (!this.state.isSeeking) {
            this.setState(state)
        }
        return
    }

    refPlayer = (player) => (
        this.player = player
    )

    /* Seção relativa ao controler de Seek */

    handleSeekChange = (currentPlayed) => {
        this.setState({ played: currentPlayed, playedSeconds: currentPlayed * this.player.getDuration() })
        return
    }

    handleSeekMouseDown = (currentPlayed) => {
        this.setState({ played: currentPlayed, playedSeconds: currentPlayed * this.player.getDuration(), isSeeking: true })
        return
    }

    handleSeekMouseUp = (currentPlayed) => {
        this.setState({ isSeeking: false })
        this.player.seekTo(currentPlayed)
        return
    }

    /* Seção relativa ao controler de Volume */

    handleVolumeChange = (e) => {
        this.setState({ volume: parseFloat(e) })
        return
    }

    handleVolumeMouseDown = (e) => {
        this.setState({ volume: parseFloat(e) })
        return
    }


    render() {
        return (
            <div className='now-playing-bar-wrapper'>
                <ReactPlayer
                    url={'https://musicasspotifyclone.s3-sa-east-1.amazonaws.com/01+Do+I+Wanna+Know_.mp3'}
                    wrapper={'div'}
                    style={{display: 'none'}}
                    playing={this.state.isPlaying}
                    volume={this.state.volume}
                    onProgress={this.handleProgress}
                    onReady={this.handleOnReady}
                    config={{
                        file: {
                            forceAudio: true,
                        }
                    }}
                    ref={this.refPlayer}
                />
                <NowPlayingBarLeft />
                <NowPlayingBarCenter
                    duration={this.state.duration}
                    played={this.state.played}
                    loaded={this.state.loaded}
                    isPlaying={this.state.isPlaying}
                    onPlayPause={this.handlePlayPause}
                    onPrevius={this.handlePrevius}
                    onNext={this.handleNext}
                    onSeekChange={(e) => this.handleSeekChange(e)}
                    onSeekMouseDown={(e) => this.handleSeekMouseDown(e)}
                    onSeekMouseUp={(e) => this.handleSeekMouseUp(e)}
                />
                <NowPlayingBarRight
                    volume={this.state.volume}
                    onVolumeChange={(e) => this.handleVolumeChange(e)}
                    onVolumeMouseDown={(e) => this.handleVolumeMouseDown(e)}
                />
            </div>
        )
    }
}