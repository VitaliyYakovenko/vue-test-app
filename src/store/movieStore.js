import { ref } from "vue";
import {defineStore} from "pinia"
const BASE_URL = "mockapi.io/v1";
const API_KEY = `67e2b45797fc65f535373bb9`;

export const useMovieStore = defineStore("movieStore", () => {
   const movies = ref([]);
   const detailContact = ref({});
   const selectedContacts = ref([]);
   const loading = ref(false);


   const getAllMovies = async function() {
   
    if (movies.value.length > 0) return;

    try {
    loading.value = true;
    const resp = await fetch(`https://${API_KEY}.${BASE_URL}/movies/`);
  
      if(!resp.ok) {
             throw new Error("Failed response");
      } else {
        const data = await resp.json();
        movies.value = data;
      }
   } catch(err) {
      console.error(err);
   } finally {
     loading.value = false;
   }
   };

    const getDetailInform = async function (id = "") {
        const findContact = selectedContacts.value.find(contact => contact.id === id)

        if(findContact) {
          detailContact.value = findContact;
          return;
        }
        
        loading.value = true;
        
        try{
          const resp = await fetch(`https://${API_KEY}.${BASE_URL}/movies/${id}`)

          if(!resp.ok) {
            throw new Error("Failed response")
          } else {
            const data = await resp.json();
            detailContact.value = data;
            selectedContacts.value.push(data);
          }
            
        } catch(err) {
            console.error(err);
        } finally {
          loading.value = false;
        }
    }
    

  return {movies ,detailContact, loading, getAllMovies,getDetailInform};
});