<script setup>
   import { ref } from 'vue';
   import shortid from 'shortid';

  const emit = defineEmits(["create"]);
 
   const name = ref("");
   const phone = ref("");
 

   function submit(data) {
       emit("create", {
        id: shortid(),
        name: name.value,
        phone: phone.value
       }
       );
        name.value = "";
        phone.value = "";
   };
   
 
   

  </script>
<template>
    <form @submit.prevent="submit">
        <input  v-model="name" type="text"/>
        <br/>
        <input v-model="phone" type="number"/>
        <br/>
        <button type="submit">Create contact</button>
    </form>
</template>
<style scoped></style>