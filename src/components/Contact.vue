<template>
    <li class="d-flex">
        <p class="contact__name">Name: {{ contact.name }}</p>
        <p class="contact__date">Creation date: {{ contact.createdAt }}</p>
        <button class="contact__btn" @click="$router.push(`/contact/${contact.id}`)">Details</button>
    </li>
</template>

<script setup>
   const props = defineProps({
       contact: {
         type: Object,
         required: true
  }
 });

</script>
<style scoped>

/* .contact__item {
    font-size: 20px;

    padding: 20px;
    border: 2px solid teal;
    margin-bottom: 20px;
}

.contact__name {
    margin-bottom: 10px;
}

.contact__date {
    margin-bottom: 10px;
}

.contact__btn {
   border-radius: 8px;
   border-color: teal;
   background-color: transparent;
   cursor: pointer;

   display: block; 
   padding: 10px 8px;
   margin-left: auto;
} */

</style>