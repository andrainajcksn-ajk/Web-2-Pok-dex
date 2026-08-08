import { useState, useEffect } from 'react'
import ListePokemon from './components/ListePokemon';


function App() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchAllPokes = async() => {
      const requetes = [];
        for (let i = 1; i <= 100; i++) {
          requetes.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then(r => r.json())
        );
      }
      const resultat = await Promise.all(requetes);
      const formatTableau = resultat.map(p => ({
        id: p.id,
        name: p.name,
        image: p.sprites.front_default,
        types: p.types.map(t => t.type.name)
      }));
      setPokemons(formatTableau);
    };
    fetchAllPokes();
  }, []);

  return (
    <>
      <ListePokemon pokemons = {pokemons}/>
    </>
  )
}

export default App