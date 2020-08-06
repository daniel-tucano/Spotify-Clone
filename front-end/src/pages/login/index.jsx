import React, { Component } from 'react'
import fireApp from '../../FirebaseConfig'
import * as firebase from "firebase/app";
import "firebase/auth";

import '../../css/LoginPage.css'

const FirebaseAuth = fireApp.auth();

const GoogleAuth = new firebase.auth.GoogleAuthProvider();
GoogleAuth.addScope('https://www.googleapis.com/auth/datastore')

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleGoogleSignIn = () => {
        FirebaseAuth.signInWithPopup(GoogleAuth)
            .then(user => {
                this.props.history.push('/main')
            })
            .catch(e => (console.log(e.message)))
    }

    handleEmailLogIn = () => (
        FirebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(user => {
                this.props.history.push('/main')
            })
            .catch(e => console.log(e.message))
    )

    handleEmailSignUp = () => (
        FirebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(e => console.log(e.message))
    )


    render() {
        return (
            <div className='login-page-wrapper'>
                <div className='login-page-main-block'>
                    <button className='btn-google-signin' onClick={this.handleGoogleSignIn}>Continue With Google</button>
                    <input type='text' className='input-email input-login' onChange={this.handleEmailChange} />
                    <input type='text' className='input-password input-login' onChange={this.handlePasswordChange} />
                    <div className='btns-row'>
                        <button className='btn-email-login btn-login' onClick={this.handleEmailLogIn}>Log In</button>
                        <button className='btn-email-signin btn-login' onClick={this.handleEmailSignUp}>Sign Up</button>
                    </div>
                </div>
            </div>

        )
    }

}