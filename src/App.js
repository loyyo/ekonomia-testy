import './App.css';
import QuestionList from './components/QuestionList'

const App = () => {
  return(
    <div className="app">
      <div className="intro">
        Testy z Ekonomii
      </div>
      <QuestionList/>
    </div>
  )
}

export default App;
