<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'VPokemonInfo',
  props: {
    pokemon: {
      type: Object as PropType<any | null>,
      default: null,
    },
  },
});
</script>

<template>
  <div v-if="pokemon">
    <h2>{{ pokemon.name }}</h2>
    <img :src="pokemon.sprites.front_default" alt="Pokemon Image" />
    <ul>
      <li><strong>Height:</strong> {{ pokemon.height }}</li>
      <li><strong>Weight:</strong> {{ pokemon.weight }}</li>
    </ul>
  </div>
  <div v-else>
    <p>Pokemon not found</p>
  </div>
</template>

<style scoped>
h2 {
  text-transform: capitalize;
}

img{
  width: 100px;
  height: 100px;

}
</style>
