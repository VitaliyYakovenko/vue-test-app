import {defineStore} from "pinia";
const BASE_URL = "mockapi.io/v1";
const API_KEY = `67e2b45797fc65f535373bb9`;

export const useContactStore = defineStore("contactStore", {
    
   state: () => ({
    contacts: [],
    detailContact: {},
    selectedContacts: [],
    isLoading: false
   }),

    actions: {
      async getAllContact() {
        if(this.contacts.length > 0) return;
        
        try{
          this.isLoading = true
          const resp = await fetch(`https://${API_KEY}.${BASE_URL}/contacts/`);
          if(!resp.ok) {
            throw new Error("Failed response")
          }
          const data = await resp.json();
          this.contacts = data;

        } catch(error) {
          console.error(error)
        } finally{
           this.isLoading = false;
        }
      },

      async getDetailInform(id)  {
          if (!id || id === ':id') return;
          const findContact = this.selectedContacts.find(contact => contact.id === id);

          if(findContact) {
            this.detailContact = findContact
            return
          }

          try{
            this.isLoading = true;
            const resp = await fetch(`https://${API_KEY}.${BASE_URL}/contacts/${id}`);
            
            if(!resp.ok) {
              throw new Error("Failed response")
            }

            const data = await resp.json();

            this.detailContact = data;
            this.selectedContacts.push(data);

          } catch(error) {
             console.error(error)
          } 
          finally{
            this.isLoading = false
          }
       }
    }
   
})




