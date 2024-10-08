<script  lang="ts">
  import {defineComponent, ref , onMounted} from 'vue';

  export default defineComponent({
    name: 'VPokemonForm',
    emits: ['search'],
    setup( props, {emit}){
      const pokemonName = ref('');
      const pokemonInput = ref<HTMLInputElement | null>(null);

      onMounted(() => {
        if (pokemonInput.value) {
          pokemonInput.value.focus();
        }
      });

      const submitForm = () => {
        if (pokemonName.value.trim()) {
          emit('search', pokemonName.value.trim().toLowerCase());
        }
      };
      return { pokemonName, submitForm, pokemonInput };
    },


  });
</script>

<template>
  <form @submit.prevent="submitForm">
    <input ref="pokemonInput" v-model="pokemonName" type="text" placeholder="Enter Pokemon name" />
    <button type="submit">Search</button>
  </form>
</template>

<style scoped>
input {
  margin-right: 1rem;
}
</style>
