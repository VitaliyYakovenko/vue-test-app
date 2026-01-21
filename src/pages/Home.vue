<script setup>

  import {ref,onMounted } from "vue";
  import getAllMovies from "@/utils/getAllMovies";
  import MoviesList from "@/components/MoviesList.vue";
 

 const moviesData = ref([]);

  onMounted(() => {
     getAllMovies().then(data => {
        moviesData.value = data || []
     })   
  });
 

 
</script>

<template>
    <h1>HOME Page</h1>
    <MoviesList :movies="moviesData"/>
</template>

<style scoped></style>