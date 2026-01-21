const BASE_URL = `mockapi.io/v1`;
const API_KEY = `67e2b45797fc65f535373bb9`;

export default async function getAllMovies() {
     const response = await fetch(`https://${API_KEY}.${BASE_URL}/movies`);

     if(!response.ok) {
        throw new Error("Failed response");
     }
    const data = await response.json();
    return data;
};