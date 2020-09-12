import React, {useState, useEffect, useRef} from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios'

function App() {

  // set the default state to 'SAMPLE_FLASHCARDS'
  const [flashcards,setFlashcards] = useState([])
  const [categories, setCategories] = useState([])

  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(() =>{
    axios.get('https://opentdb.com/api_category.php')
    .then(res => {
      setCategories(res.data.trivia_categories)
    })
  },[])

  // use axios get data from API when the page is first loaded, that's why [] is empty
  useEffect(() =>{

  }, [])

// conver HTML format on API data to text
function decodeString(str){
  const textArea = document.createElement('textarea')
  textArea.innerHTML = str
  return textArea.value
}

function handleSubmit(e){
  // prevent form being submitted in the normal way and forcing it going through React code
  e.preventDefault()
  axios
  .get('https://opentdb.com/api.php',{
    params: {
      amount: amountEl.current.value,
      category: categoryEl.current.value
    }
  })
  .then(res => {
    // console.log(res.data)
    setFlashcards(res.data.results.map((questionItem, index) => {
      const answer = decodeString(questionItem.correct_answer)
      // create options that include incorrect answer and correct answer
      const options = [
        ...questionItem.incorrect_answers.map(a => decodeString(a)), 
        answer
      ]
      return{
        id: `${index}-${Date.now()}`,
        question: decodeString(questionItem.question),
        answer: answer,
        options: options.sort(()=> Math.random() - 0.5)
      }
    }))
  })
}

  return (
    <div>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor = "cateogry">Category</label>
          <select id="category" ref ={categoryEl}>
            {categories.map(category=>{
              return <option value ={category.id} key={category.id}>
                {category.name}
              </option>
            })}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor = "amuont">Number of Questions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>

        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>

      <div className = "container">
        <FlashcardList flashcards = {flashcards}/>
      </div>
    </div>
  );
}

// const SAMPLE_FLASHCARDS =[
//   {
//     id: 1,
//     question: "What is 2+2",
//     answer: '4',
//     options: [
//       "2",
//       "3",
//       "4",
//       "5",
//     ]
//   },
//   {
//     id: 2,
//     question: "What is 2+3",
//     answer: '5',
//     options: [
//       "2",
//       "3",
//       "4",
//       "5",
//     ]
//   }
// ]

export default App;
