<script setup>
   import { ref } from 'vue';
   import Form from '@/components/Form.vue';
   import ContactList from '@/components/ContactList.vue';
    
   const contacts = ref([]);
   
   const createContact = (data) => {
       const {name, phone} = data;
       
       if(name === "" || phone === "") {
        alert("Please enter your name or phone")
        return
       }

       contacts.value.push(data);
   } 

   const deleteContact = (id) => {
       contacts.value = contacts.value.filter(el => el.id !== id);
   }

</script>

<template>
    <main class="container mx-auto px-[10px]">
        <Form  @create="createContact"/>
        <ContactList 
        @delete="deleteContact" 
        :contacts="contacts"
        /> 
    </main>
</template>

<style>

</style>

