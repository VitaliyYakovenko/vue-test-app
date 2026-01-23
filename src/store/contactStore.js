import { ref } from "vue";
import {defineStore} from "pinia"
const BASE_URL = "mockapi.io/v1";
const API_KEY = `67e2b45797fc65f535373bb9`;

export const useContactStore = defineStore("contactStore", () => {
   const contacts = ref([]);
   const detailContact = ref({});
   const selectedContacts = ref([]);
   const loading = ref(false);


   const getAllContact = async function() {
   
    if (contacts.value.length > 0) return;

    try {
    loading.value = true;
    const resp = await fetch(`https://${API_KEY}.${BASE_URL}/contacts/`);
  
      if(!resp.ok) {
             throw new Error("Failed response");
      } else {
        const data = await resp.json();
        contacts.value = data;
      }
   } catch(err) {
      console.error(err);
   } finally {
     loading.value = false;
   }
   };

    const getDetailInform = async function (id) {
        if(id === ":id") return

        const findContact = selectedContacts.value.find(contact => contact.id === id);

        if(findContact) {
          detailContact.value = findContact;
          return
        }
        
        loading.value = true;
        
        try{
          const resp = await fetch(`https://${API_KEY}.${BASE_URL}/contacts/${id}`)

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
    

  return {contacts ,detailContact, loading, getAllContact,getDetailInform};
});