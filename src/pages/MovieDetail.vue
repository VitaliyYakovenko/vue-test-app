<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';   
    import { useContactStore } from '@/store/contactStore';
    import ContactDetail from '../components/ContactDetail.vue';

    const contactStore = useContactStore();
    const route = useRoute();
    const id = route.params.id;
    
  
    onMounted( async () => {
         await contactStore.getDetailInform(id);
    })

</script>
      
<template>
    <div v-if="id === ':id'">
        Please choose in Home page
    </div>
    <ContactDetail 
      v-else 
    :contact="contactStore.detailContact"
    />
</template>

<style></style> 