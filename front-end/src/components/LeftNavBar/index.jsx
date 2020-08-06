import React, { Component } from 'react'

import '../../css/LeftNavBar.css'

export default class LeftNavBar extends Component {



    render() {
        return(
            <div className='left-nav-bar-wrapper'>
                <ul>
                    <li>Usuário</li>
                    <li>Músicas</li>
                    <li>Playlists</li>
                </ul>
            </div>
        )
    }
}