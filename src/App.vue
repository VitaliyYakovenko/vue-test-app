<template>
  <div class="w-300 m-auto">
  <header class="border-3 
  border-teal-500 
  py-[20px] px-[10px] 
  rounded-[22px] 
  mb-6 bg-orange-500">
 <nav>
    <router-link class="text-teal-900 
    hover:text-green-600 
    transition-colors easy-in-out duration-250   
    mr-4 text-2xl" 
    to="/">Home
    </router-link> 

    <router-link class="text-teal-900 
    hover:text-green-600 
    transition-colors easy-in-out duration-250 
    mr-4 text-2xl" 
    to="/contact/:id">MovieDetail
    </router-link>

    <router-link class="text-teal-900 
    hover:text-green-600 
    transition-colors easy-in-out duration-250 
    text-2xl" 
    to="/contact/form">From</router-link>
  </nav>
  </header>
  </div>
 <router-view></router-view>
</template>

<script setup></script>

<style></style>
