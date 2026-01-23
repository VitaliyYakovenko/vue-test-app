<script setup>

  import {onMounted } from "vue";
  import Movie from "@/components/Movie.vue";
  import {useMovieStore} from "../store/movieStore";
  
  const movieStore = useMovieStore();
    

  onMounted(async () => {
       await movieStore.getAllMovies();
  });


 
</script>

<template>
    <h1>HOME Page</h1>
    <ul>
      <Movie v-for="movie in movieStore.movies" 
      :key="movie.id"
      :movie="movie"
      />
    </ul>
</template>

<style scoped></style>



