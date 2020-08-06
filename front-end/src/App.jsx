import React, { Component } from 'react';
import Routes from './routes'
import fireApp from './FirebaseConfig'
import 'fontsource-roboto';
import './App.css'


export default class App extends Component {

  constructor(props) {
    super(props)

    // users.get().then((doc) => {
    //   doc.docs[0].data().playlists[0].get().then( doc_2 => {
    //     console.log(doc_2.data().musics[0].get().then( doc_3 => {
    //       console.log(doc_3.data().name)
    //     }))
    //   })
    // })

    // users.doc('bananinha').set({
    //   nome:'otario'
    // }).then( () => {
    //   console.log('deu certo')
    // })

    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fireApp.auth().onAuthStateChanged( (user) => {
      if ( user ) {
        this.setState({
          user
        })
      }

      this.setState({
        user: null,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Routes user />
      </div>
    )
  }
}
