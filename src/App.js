// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css'
import './App.css';
import Header from './components/Partials/Header'
import Footer from './components/Partials/Footer'
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div>
      <Header />
        <RegisterScreen />
      <Footer />
    </div>
  );
}

export default App;
