<script setup>
   import { ref } from 'vue';
   import Form from '@/components/Form.vue';
   import ContactList from '@/components/ContactList.vue';
    
   const contacts = ref([]);
   
   const createContact = (data) => {
       contacts.value.push(data);
   } 

   const deleteContact = (id) => {
       contacts.value = contacts.value.filter(el => el.id !== id);
   }

</script>

<template>
    <main class="bg-red-500">
        <Form  @create="createContact"/>
        <ContactList 
        @delete="deleteContact" 
        :contacts="contacts"
        /> 
    </main>
</template>

<style>

</style>


<!-- class="bg-red-500 max-w-[1200px] mx-auto p-6" -->