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
    <main class="main">
        <Form @create="createContact"/>
        <ContactList 
        @delete="deleteContact" 
        :contacts="contacts"
        /> 
    </main>
</template>

<style scoped>
.main {
    width: 1200px;
    margin: 0 auto;
}
</style>