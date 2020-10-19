import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FlashcardList from './FlashcardList';
import Login from './Login';
import Header from "./Header";
import './app.css';
import {fb_db} from './firebase';

function App() {

  // set the default state to 'SAMPLE_FLASHCARDS'
  const [flashcards,setFlashcards] = useState(SAMPLE_FLASHCARDS)
  const currentCards = []; 
  

  // Pull from a dataset called 'cards' from Firebase
  const loadData = fb_db.ref().child('cards');
  loadData.on('child_added', snap => {
    currentCards.push({
      id: snap.val().id,
      front_image: snap.val().front_image,
      back_image: snap.val().back_image
    })
  })

  console.log(currentCards)


  return (
    <Router>
      <div>
        
          <Switch>
          <Route path="/login">
              <Header />
              <div className = "container">
                <Login />
              </div>
            </Route>
            <Route path="/">
              <Header />
              <div className = "container">
                <FlashcardList flashcards = {flashcards}/>
              </div>
            </Route>
          </Switch>
        </div>
      
      </Router>
  );
}

const SAMPLE_FLASHCARDS =[
  {
    id: 1,
    front_image: "https://firebasestorage.googleapis.com/v0/b/react-flashcards-8c200.appspot.com/o/demo_image%2FA%20notecards%20crop_print%201.jpg?alt=media&token=0296e5a9-877a-43dc-9fdb-1fd5c7c27f5c",
    back_image: 'https://firebasestorage.googleapis.com/v0/b/react-flashcards-8c200.appspot.com/o/demo_image%2FA%20notecards%20crop_print%202.jpg?alt=media&token=8e9392d5-a669-471c-9d65-1b7341c709614',
  },
  {
    id: 2,
    front_image: "https://firebasestorage.googleapis.com/v0/b/react-flashcards-8c200.appspot.com/o/demo_image%2FA%20notecards%20crop_print%203.jpg?alt=media&token=84df7b17-4987-45de-8e1f-ead1cd31cfe7",
    back_image: 'https://firebasestorage.googleapis.com/v0/b/react-flashcards-8c200.appspot.com/o/demo_image%2FA%20notecards%20crop_print%204.jpg?alt=media&token=4ed2ff25-bf49-42c4-ab98-0d0787d1147f',
  },
  {
    id: 3,
    front_image: "What is 3+3",
    back_image: '6',
  },
  {
    id: 4,
    front_image: "What is 3+4",
    back_image: '7',
  }
]

export default App;
