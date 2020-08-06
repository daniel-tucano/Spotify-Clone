import React, { Component } from 'react'
import NowPlayingBar from '../../components/NowPlayingBar'
import LeftNavBar from '../../components/LeftNavBar'


import '../../css/Main.css'

export default class main extends Component {


    render() {
        return (
            <div className='main'>
                <NowPlayingBar/>
                <LeftNavBar/>
            </div>
        )
    }
}