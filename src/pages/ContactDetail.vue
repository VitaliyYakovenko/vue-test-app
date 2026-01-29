<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';   
    import { useContactStore } from '@/store/contactStore';
    import ContactDetail from '../components/ContactInfo.vue';
    import Loader from '@/components/Loader.vue';

    const contactStore = useContactStore();
    const route = useRoute();
    const id = route.params.id;
    
  
    onMounted( async () => {
         await contactStore.getDetailInform(id);
    })

</script>
      
<template>
    <main class="container mx-auto">
    <p class="text-center text-[30px] text-red-500" v-if="id === ':id'">
        Please select a contact on the Home Page
    </p>
    <Loader v-else-if="contactStore.isLoading"/>
    <ContactDetail 
      v-else 
    :contact="contactStore.detailContact"
    />
    </main>
</template>

<style></style> 
