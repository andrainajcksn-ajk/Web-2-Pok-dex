import CartesPokemon from "./CartesPokemon";

function ListePokemon(props) {
    const {pokemons} = props;
    return (
        <div className="listePoké">
            {pokemons.map(p => {
                return <CartesPokemon key={p.id} pokemon={p}/>
            })}
        </div>
    );
}

export default ListePokemon