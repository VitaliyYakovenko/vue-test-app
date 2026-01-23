<template>
    <li>
        <p>Title: {{ contact.name }}</p>
        <p>CreatedAt: {{ contact.createdAt }}</p>
        <button @click="$router.push(`/${contact.id}`)">Details</button>
    </li>

</template>
<script setup>
 const props = defineProps({
    contact: Object,
    required: true
 });


</script>
<style scoped></style>