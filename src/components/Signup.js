import React, { Component } from "react"
import { Form, Button, Card, Alert,Container ,Image } from "react-bootstrap"
import logo from '../images/Logotyp_OLX_.png'
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";




firebase.initializeApp({
  apiKey: "AIzaSyAFl4DWzgBy2ZOR0wGthm6D2jm7Y2CNj5I",
  authDomain: "olx-auth.firebaseapp.com"
})

class Signup extends React.Component{
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", firebase.auth().currentUser.photoURL)
    })
  }

  render() {
    console.log("props=>",this.props)
    return (
           
      <div>
           
           
        <div>
        {this.state.isSignedIn ? (
          <span >
            <div className="auth">
            <h1 profileName={firebase.auth().currentUser.displayName}>Welcome {firebase.auth().currentUser.displayName}</h1>
            <Image clasName="profile" src={firebase.auth().currentUser.photoURL} roundedCircle />
            <Button variant="secondary" size="lg" block onClick={() => firebase.auth().signOut()}>
            SignOut
            </Button>
            </div>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
        
      </div>
     )
  }
}
export default Signup;