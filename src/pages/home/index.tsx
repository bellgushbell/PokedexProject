import SearchForm from '@/components/SearchForm'
import { usePokemonListStore } from '@/store/pokemonList'
import PokemonCard from '@/components/PokemonCard'
import ReactLoading from "react-loading";


function HomePage() {

    const { pokemon, fetchPokemon } = usePokemonListStore()

    console.log(pokemon);
    console.log(fetchPokemon);



    return (<div className="w-[90%] m-[auto] max-w-[1100px]">

        <div className="flex justify-center">
            <img src="/images/logo.webp" className='max-h-[80px] mt-[20px]' alt="" />
        </div>

        <SearchForm />
        {fetchPokemon.loading && (<div className="h-[600px] flex justufy-center item-center">
            <ReactLoading type="spin" color="#fff" />
        </div>
        )}

        {!fetchPokemon.loading && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-[20px] mt-[40px] justify-center">
            {fetchPokemon.data?.map((item, index) => {
                return (
                    < PokemonCard
                        key={index}
                        image={item.image || ''}
                        name={item.name}
                        id={item.id}
                        types={item.types}
                    />
                )
            })}
        </div>}


    </div >
    )
}

export default HomePage
