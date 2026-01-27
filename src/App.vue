<template>
  <div class="w-300 m-auto">
  <header class="border-2 py-[20px] px-[10px] rounded-[22px] mb-6 bg-orange-500">
 <nav>
    <router-link class="text-teal-900 hover:text-green-600  mr-4 text-2xl" 
    to="/">Home
    </router-link> 

    <router-link class="text-teal-900 hover:text-green-600 mr-4 text-2xl" 
    to="/contact/:id">MovieDetail
    </router-link>

    <router-link class="text-teal-900 hover:text-green-600 text-2xl" 
    to="/contact/form">From</router-link>
  </nav>
  </header>
  </div>
 <router-view></router-view>
</template>

<script setup>

</script>

<style>

/* .header {
  border: 4px solid teal;
}

.site__nav {
   padding: 30px;
  
   font-size: 28px;
}

.site__link {
  margin-right: 30px;
} */
</style>
