import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListBooksComponent from './components/ListBooksComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddBookComponent from './components/AddBookComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListBooksComponent}></Route>
            <Route path="/books" component={ListBooksComponent}></Route>
            <Route path="/add-book" component={AddBookComponent}></Route>
            {/* <ListBooksComponent /> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
