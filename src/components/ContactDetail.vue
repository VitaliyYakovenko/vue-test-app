<template>
      <div>
         <p>{{ contact.name }}</p>
         <p>{{ contact.createdAt }}</p>
         <img width="400" :src="contact.avatar" :alt="contact.name"/>
      </div>
</template>

<script setup>
   const props = defineProps({
      contact: Object,
   });
   
</script>

<style scoped></style>