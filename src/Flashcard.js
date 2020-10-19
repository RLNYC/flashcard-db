import React, {useState, useEffect, useRef} from 'react'

function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
    // const [height, setHeight] = useState('initial')

    // const frontEl = useRef()
    // const backEl = useRef()

    // function setMaxHeight(){
    //     const frontHeight = frontEl.current.getBoundingClientRect().height
    //     const backHeight = backEl.current.getBoundingClientRect().height
    //     setHeight(Math.max(frontHeight, backHeight, 100))
    // }

    // useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    // useEffect(() => {
    //     window.addEventListener('resize', setMaxHeight)
    //     return () => window.removeEventListener('resize',setMaxHeight)
    // }, [])

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            // style={{height: height}}            
            onClick={() => setFlip(!flip)}
        >
            {/* {flip ? flashcard.answer : flashcard.question} */}
            {/* <div className = "front" ref={frontEl}> */}
            <div className = "front">
                <img src={flashcard.front_image} alt="" width="450px"/>
            </div>

            <div className="back">
            {/* <div className="back" ref={backEl}> */}
                <img src={flashcard.back_image} alt="" width="450px"/>
            </div>
            
        </div>
    )
}

export default Flashcard
