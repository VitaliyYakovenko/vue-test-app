<script setup>
  defineProps({
        movies:Array,
        required: true
       }
    )



</script>
  
<template>
    <p>Movies List</p>
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <h1>{{movie.Title }}</h1>
            <p>{{ movie.Actors }}</p>
            <p>{{ movie.Released }}</p>
            <button  @click="$router.push(`/${movie.id}`)">Read details</button>
        </li>
    </ul>
</template>

<style></style>