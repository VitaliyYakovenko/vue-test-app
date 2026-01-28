<script setup>
   import { ref } from 'vue';
   import shortid from 'shortid';

  const emit = defineEmits(["create"]);
 
   const name = ref("");
   const phone = ref("");
 

   function submit() {
          
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
    <form class="block 
        text-start
        mx-auto text-center 
        border
        rounded-[12px]
        w-[300px] px-[20px] py-[20px]" @submit.prevent="submit">
        <input
        class="inline-block w-[100%] rounded-[10px] 
        outline-none
        hover:border-teal-500
        focus:border-teal-500
        border-2 px-[8px] py-[4px] mb-[8px]"
        v-model="name" type="text" placeholder="Name"/>
        <input 
        class="inline-block  w-[100%] rounded-[10px]
        outline-none
        hover:border-teal-500
        focus:border-teal-500
        border-2 px-[8px] py-[4px] mb-[16px]"
        v-model="phone" type="phone" placeholder="380 000 00 00"/>
        <button
        class="block cursor-pointer border px-[10px] py-[6px] rounded-2xl 
        hover:bg-teal-500
        focus:bg-teal-500
        hover:border-orange-500
        focus:border-orange-500
        focus:outline-none
        transition-colors duration-300
        bg-orange-500"
        type="submit">Create contact</button>
    </form>
</template>
<style scoped></style>