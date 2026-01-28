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
        <li class="mx-auto mb-[16px] w-[300px] border-3 p-4 rounded-2xl
        border-teal-500
        " v-for="contact in contacts" :key="contact.id">
            <p class="mb-[6px] font-bold">Name: <span class="font-normal">{{contact.name }}</span></p>
            <p class="mb-[6px] font-bold">Phone: <span class="font-normal">{{ contact.phone }}</span></p>
            <button
            class="block ml-auto
            border-2
            p-1
            rounded-2xl
            border-teal-500
            cursor-pointer
            text-red-500
            px-2
            hover:bg-gray-500
            transition-colors duration-300
            "
            @click="deleteContact(contact.id)" type="button">Delete</button>
        </li>
    </ul>
</template>

<style scoped></style>