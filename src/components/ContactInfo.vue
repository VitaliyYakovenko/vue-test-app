<template>
      <div class="contact">
         <h1 class="contact__name">{{ contact.name }}</h1>
         <p class="contact__date">{{ contact.createdAt }}</p>
         <img class="contact__img" width="400" :src="contact.avatar" :alt="contact.name"/>
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

<style scoped>
 .contact {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
 }

 .contact__name {
   font-size: 36px;
   color: teal;

   margin-bottom: 20px;
 }


 .contact__date {
   font-size: 30px;
   color: teal;

   margin-bottom: 20px;
 }

</style>