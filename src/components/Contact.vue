<template>
    <li class="
    border-3
    border-teal-500
    rounded-[12px]
    bg-teal-500
    mb-8
    last:mb-0
    p-[12px]
    ">
    
        <p class="mb-3
        text-2xl
        ">Name: {{ contact.name }}</p>
        <p class="mb-3
        text-2xl
        ">Creation date: {{ contact.createdAt }}</p>
        <button class="border 
        block
        bg-orange-500
        border-[3px]
        border-black-400
        ml-auto
        p-[6px]
        cursor-pointer
        rounded-[6px]" 
        @click="$router.push(`/contact/${contact.id}`)">Details</button>
    </li>
</template>

<script setup>
   const props = defineProps({
       contact: {
         type: Object,
         required: true
  }
 });

</script>
<style scoped></style>