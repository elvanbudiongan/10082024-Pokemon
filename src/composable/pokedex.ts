import {ref} from 'vue';

export function usePokedex(){
    const pokemons = ref<{[key: string]: any}>({})

    async function fetchPokemon(name: string){
      if(pokemons.value[name]){
        return pokemons.value[name];
      }

      try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if(!response.ok){
          throw new Error(`Pokemon Not Found`);
        }

        const data = await response.json();
        pokemons.value[name] = data;
        return data;
      }catch(error){
        return null;
      }
    }

    return{
      fetchPokemon,
      pokemons
    };
}
