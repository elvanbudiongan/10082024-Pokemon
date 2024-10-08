<script lang="ts">
import {defineComponent, ref} from 'vue';
import { usePokedex } from './composable/pokedex.ts';
import VTemplate from './components/VTemplate.vue';
import VPokemonForm from './components/VPokemonForm.vue';
import VPokemonInfo from './components/VPokemonInfo.vue';

export default defineComponent({
  name: 'App',
  components: { VTemplate, VPokemonForm, VPokemonInfo },
  setup() {
    const { fetchPokemon } = usePokedex();
    const pokemon = ref(null);


    const getPokemon = async (name: string) => {
      pokemon.value = await fetchPokemon(name);
    };

    return { pokemon, fetchPokemon: getPokemon };
  },
});

</script>

<template>
  <VTemplate>

    <template v-slot:header>
      <h1>Pokédex</h1>
    </template>


    <template v-slot>
      <VPokemonForm @search="fetchPokemon" />
      <VPokemonInfo :pokemon="pokemon" />
    </template>

    <template v-slot:footer>
      <p>&copy; 2024 Pokédex</p>
    </template>
  </VTemplate>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: greenyellow;
}
</style>

