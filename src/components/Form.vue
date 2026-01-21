<script setup>
    import {ref} from "vue";
    import id from "shortid";
    const emit = defineEmits(["submitForm"]);
    const name = ref("");
    const tel = ref("");


    function onSubmit() {
      
      if(name.value === "" || name.tel  ==="") {
        alert("Please, enter name or tel");
        return;
      } 
     

      emit("submitForm", {
        id: id.generate(),
        name: name.value,
        tel: tel.value
      })
      

      name.value = "";
      tel.value = "";
    }
   
      

</script>
 

<template>
    <form @submit.prevent="onSubmit">
    <input v-model="name" placeholder="name" type="text"/>
     <br/>
     <input v-model="tel" placeholder="phone number" type="tel"/>
     <br/>
     <button  type="submit">Enter</button>
    </form>
</template>

<style scoped></style>