<script setup>
    defineProps({
      users: Array,
      delete: Function
    })

   const emit = defineEmits(["delete"]);

    function getId(id) {
      emit("delete", id);
    }
</script>

 
<template>
   <br/>
   <div v-for="el in users" :key="el.id">
      <p>name: {{ el.name }}</p>
      <p>tel:  {{ el.tel }}</p>
      <button @click="getId(el.id)">Delete</button>
      <button @click="$router.push(`/${el.id}`)">Details</button> 
    </div>  
</template>


<style scoped>
  button {
    cursor: pointer;
  }
</style>


<!-- 
 <MovieList 
    :users="dataArr"
    @delete="deleteUser"
    /> -->