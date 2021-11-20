import './App.css';
import CardList from './Components/CardList'
import Footer from './HOC/Footer';
import Header from './HOC/Header';

function App() {
  return (
    <div className="App">

      <Header />

      <CardList />

      <Footer />
    </div>
  );
}

export default App;
