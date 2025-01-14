import { useEffect } from 'react'
import { pokemonListServices, pokemonDetailServices } from '@/services'
import { useForm } from 'react-hook-form';
import { usePokemonListStore } from '@/store/pokemonList'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail';
import { generationList } from '@/utils/optionList';


const useSearchForm = () => {
    const { register, watch } = useForm();

    const { setFetchPokemonList, fetchPokemon, setPokemonList } = usePokemonListStore();

    const keyword = watch("keyword")
    const type = watch("type")
    const generation = watch("generation")
    const sort = watch("sort")

    const callData = async (filter: {
        name: string;
        limit: number;
        offset: number;
    }) => {
        setFetchPokemonList({ data: [], loading: true, error: null })
        const responseList = await pokemonListServices.getPokemonList(filter.limit, filter.offset)
        const pokeList = []


        if (responseList.status === 200) {
            const responseResults = responseList.data?.results || []
            for (const pokemon of responseResults) {
                const response = await pokemonDetailServices.getPokemonDetail(pokemon.name)
                const pokeData = response.data
                if (pokeData)
                    pokeList.push({
                        ...pokeData,
                        image:
                            pokeData.sprites.other.dream_world.front_default ||
                            pokeData.sprites.other['official-artwork'].front_default
                    })
            }
            setFetchPokemonList({ data: pokeList, loading: false, error: null })
            const data = filterPokemon(pokeList, keyword, type, sort)
            setPokemonList({ data: data, loading: false, error: null })

        } else {
            setFetchPokemonList({
                data: [],
                loading: false,
                error: responseList.error,
            })
        }
    }


    const filterPokemon = (
        pokeList: IPokemonDetailResponse[],
        keyword: string = '',
        type: string = 'all types',
        sort: 'id' | 'name' = 'id'
    ) => {
        const keywordFilter = pokeList.filter((item) =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        )

        const typeFilter =
            type !== 'all types'
                ? keywordFilter.filter((item) =>
                    item.types.some((f) => f.type.name.toLowerCase() === type.toLowerCase())
                )
                : keywordFilter

        return sortBy(typeFilter, sort)
    }

    const sortBy = (data: IPokemonDetailResponse[], type: 'id' | 'name') => {
        switch (type) {
            case 'id':

                return data.sort((a, b) => a.id - b.id)
            case 'name':

                return data.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
            default:
                return data.sort((a, b) => a.id - b.id)
        }

    }


    useEffect(() => {

        if (generation !== undefined) {
            callData(generationList[generation])
        }
    }, [generation])

    useEffect(() => {
        const data = filterPokemon(fetchPokemon.data, keyword, type, sort)

        setFetchPokemonList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword, type, sort, fetchPokemon.data.length])



    return {
        fieldKeyword: register("keyword"),
        fieldGeneration: register("generation"),
        fieldType: register("type"),
        fieldSort: register("sort"),

    }
}
export { useSearchForm }



// import React, { useEffect } from 'react'
// import { pokemonListServices, pokemonDetailServices } from '@/services'
// import { useForm } from 'react-hook-form';
// import { usePokemonListStore } from '@/store/pokemonList'
// import { IPokemonDetailResponse } from '@/interface/pokemonDetail';
// import { generationList } from '@/utils/optionList';


// const useSearchForm = () => {
//     const { handleSubmit, register, watch, formState: { errors } } = useForm();

//     const { setFetchPokemonList, fetchPokemon, setPokemonList } = usePokemonListStore();

//     const keyword = watch("keyword")
//     const type = watch("type")
//     const generation = watch("generation")
//     const sort = watch("sort")

//     const callData = async (filter: {
//         name: string;
//         limit: number;
//         offset: number;
//     }) => {
//         setFetchPokemonList({ data: [], loading: true, error: null })
//         const responseList = await pokemonListServices.getPokemonList(filter.limit, filter.offset)
//         const pokeList = []


//         if (responseList.status === 200) {
//             const responseResults = responseList.data?.results || []
//             for (const pokemon of responseResults) {
//                 const response = await pokemonDetailServices.getPokemonDetail(pokemon.name)
//                 const pokeData = response.data
//                 if (pokeData)
//                     pokeList.push({
//                         ...pokeData,
//                         image:
//                             pokeData.sprites.other.dream_world.front_default ||
//                             pokeData.sprites.other['official-artwork'].front_default
//                     })
//             }
//             setFetchPokemonList({ data: pokeList, loading: false, error: null })
//             const data = filterPokemon(pokeList, keyword, type, sort)
//             setPokemonList({ data: data, loading: false, error: null })

//         } else {
//             setFetchPokemonList({
//                 data: [],
//                 loading: false,
//                 error: responseList.error,
//             })
//         }
//     }


//     const filterPokemon = (
//         pokeList: IPokemonDetailResponse[],
//         keyword: string = '',
//         type: string = 'all types',
//         sort: 'id' | 'name' = 'id'
//     ) => {
//         const keywordFilter = pokeList.filter((item) =>
//             item.name.toLowerCase().includes(keyword.toLowerCase())
//         )

//         const typeFilter =
//             type !== 'all types'
//                 ? keywordFilter.filter((item) =>
//                     item.types.some((f) => f.type.name.toLowerCase() === type.toLowerCase())
//                 )
//                 : keywordFilter

//         return sortBy(typeFilter, sort)
//     }

//     const sortBy = (data: IPokemonDetailResponse[], type: 'id' | 'name') => {
//         switch (type) {
//             case 'id':

//                 return data.sort((a, b) => a.id - b.id)
//             case 'name':

//                 return data.sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
//             default:
//                 return data.sort((a, b) => a.id - b.id)
//         }

//     }


//     useEffect(() => {

//         if (generation !== undefined) {
//             callData(generationList[generation])
//         }
//     }, [generation])

//     useEffect(() => {
//         const data = filterPokemon(fetchPokemon.data, keyword, type, sort)

//         setPokemonList({
//             data: data,
//             loading: false,
//             error: null
//         })
//     }, [keyword, type, sort, fetchPokemon.data.length])



//     return {
//         fieldKeyword: register("keyword"),
//         fieldGeneration: register("generation"),
//         fieldType: register("type"),
//         fieldSort: register("sort"),

//     }
// }
// export { useSearchForm }



