<script setup>

  import {onMounted } from "vue";
  import Contact from "@/components/Contact.vue";
  import Loader from "@/components/Loader.vue";
  import { useContactStore } from '@/store/contactStore';
  
  const contactStore = useContactStore();
 

  onMounted(async () => {
       try{
        await contactStore.getAllContact();
    
       } catch(err) {
        console.log(err)
       }
  });
   

 
</script>

<template>
    <main class="container mx-auto px-[10px]">
    <h1 class="text-5xl text-teal-700 text-center mb-12">Home page</h1>
    <Loader v-if="contactStore.isLoading"/>
    <ul class="flex flex-col items-center" v-else>
      <Contact v-for="contact in contactStore.contacts" 
      :key="contact.id"
      :contact="contact"
      />
    </ul>
    </main>
</template>

<style>

</style>



