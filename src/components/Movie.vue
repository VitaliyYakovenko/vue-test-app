<template>
    <li>
        <p>Title: {{ movie.name }}</p>
        <p>CreatedAt: {{ movie.createdAt }}</p>
        <button @click="$router.push(`/${movie.id}`)">Details</button>
    </li>

</template>
<script setup>
 const props = defineProps({
    movie: Object,
    required: true
 });


</script>
<style scoped></style>