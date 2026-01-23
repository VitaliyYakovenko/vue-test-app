<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';   
    import { useMovieStore } from '../store/movieStore';
    import ContactDetail from '../components/ContactDetail.vue';

    const movieStore = useMovieStore();
    const route = useRoute();
    const id = route.params.id;
    
  
    onMounted( async () => {
         await movieStore.getDetailInform(id);
    })

</script>
      
<template>
      <ContactDetail 
      :contact="movieStore.detailContact"
      />
</template>

<style></style> 