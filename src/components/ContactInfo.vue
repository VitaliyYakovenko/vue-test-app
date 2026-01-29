<template>
      <div class="flex flex-col items-center mt-[40px]">
         <h1 class="text-[36px] text-teal-800 mb-[20px]">{{ contact.name }}</h1>
         <p class="text-[36px] text-teal-800 mb-[20px]">{{ contact.createdAt }}</p>
         <img class="rounded-[33px]"  width="400" :src="contact.avatar" :alt="contact.name"/>
      </div>
</template>

<script setup>
   const props = defineProps({
    contact: {
      type: Object,
      required: true,
    }
   })
   
</script>

<style></style>
