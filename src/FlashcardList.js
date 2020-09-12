import React from 'react';
import Flashcard from './Flashcard'

function FlashcardList({ flashcards}) {
    return (
        <div className="card-grid">
            {/* loop through each card in flashcard deck and pass each one to Flashcard componnent */}
            {flashcards.map(flashcard =>{
                return <Flashcard flashcard = {flashcard} key={flashcard.id}/>
            })}

            
        </div>
    )
}

export default FlashcardList
