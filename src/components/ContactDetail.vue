<template>
      <div>
         <p>{{ contact.name }}</p>
         <p>{{ contact.createdAt }}</p>
      </div>
</template>

<script setup>
   const props = defineProps({
      contact: Object,
   });
   
</script>

<style scoped></style>