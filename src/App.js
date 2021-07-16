// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import './assets/css/bootstrap.min.css'
import './App.css';
import Header from './components/Partials/Header'
import Footer from './components/Partials/Footer'
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={HomeScreen}></Route>
            <Route path="/login" exact component={LoginScreen}></Route>
            <Route path="/register" exact component={RegisterScreen}></Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
