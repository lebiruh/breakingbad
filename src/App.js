import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(response.data);
      setCharacters(response.data);
      setIsLoading(false);
    }
    fetchCharacters();
  }, [query]);


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid characters={characters} isLoading={isLoading}/>
    </div>
  );
}

export default App;
