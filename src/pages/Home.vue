<script setup>

  import {onMounted } from "vue";
  import Movie from "@/components/Movie.vue";
  import { useContactStore } from '@/store/contactStore';
  
  const contactStore = useContactStore();
    

  onMounted(async () => {
       await contactStore.getAllContact();
  });


 
</script>

<template>
    <h1>HOME Page</h1>
    <ul>
      <Movie v-for="contact in contactStore.contacts" 
      :key="contact.id"
      :contact="contact"
      />
    </ul>
</template>

<style scoped></style>



