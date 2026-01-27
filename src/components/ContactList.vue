<script setup>

   const props = defineProps({
     contacts: {
        type: Array,
        required: true
     }
   });
    
   const emit = defineEmits(["delete"]);


   function deleteContact(id) {
      emit("delete",id);
   }



  
</script>

<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            <p>{{contact.name }}</p>
            <p>{{ contact.phone }}</p>
            <button @click="deleteContact(contact.id)" type="button">Delete</button>
        </li>
    </ul>
</template>

<style scoped></style>