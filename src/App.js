//import styling
import './App.css';
//import router to switch betweeen different components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import components
import Header from './components/Header/Header';
import UserForm from './components/UserForm/UserForm';
import LearnMore from './components/LearnMore/LearnMore';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
        <UserForm/>
        </Route>
        <Route path="/learnmore">
          <LearnMore/>
        </Route>
      </Switch>
    </Router>
  );
}

//export this component to the index.js file so it can be rendered to the index.html file in the public folder
export default App;
