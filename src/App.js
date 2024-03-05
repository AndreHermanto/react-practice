import logo from './logo.svg';
import './App.css';
import Article from './components/Article/Article';
import * as Books from './components/Book/Book';
import List from './components/List/List';
import BlogContent from './components/Blog/Blog';

function App() {
  const info = "Today is happy day"
  const obj = {
    street: "Charles",
    streetNo: "12",
    unitNo: "2"
  }

  const arr = ["a", "b", "c"]
  return (
    <div className="App">
      <Article info={info}/>
      <Books.Book title="Game of thrones" showList={false} address={obj}/>
      <List arr={arr} />

      <BlogContent articleText={"This is a blog"}/>
    </div>
  );
}

export default App;
