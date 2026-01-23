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
    <main class="main">
    <h1 class="title">Home page</h1>
    <Loader v-if="contactStore.isLoading"/>
    <ul class="contats" v-else>
      <Contact v-for="contact in contactStore.contacts" 
      :key="contact.id"
      :contact="contact"
      />
    </ul>
    </main>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 36px;
  color: teal;

  margin-bottom: 20px;
  margin-top: 20px;
}

.main {
  width: 1200px;
  margin: 0 auto;
}

.contats {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>



