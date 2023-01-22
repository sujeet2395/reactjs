import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';

function App() {
  return (
    <div className='App'>
      <Search/>
      <MovieList/>
    </div>
  );
}

export default App;
