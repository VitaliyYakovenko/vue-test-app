<template>
  <header class="header">
 <nav  class="site__nav">
    <router-link class="site__link" to="/">Home</router-link> 
    <router-link to="/contact/:id">MovieDetail</router-link>
    <router-link to="/contact/form">From</router-link>
  </nav>
  </header>
 <router-view></router-view>
</template>

<script setup>

</script>

<style scoped>

.header {
  border: 4px solid teal;
}

.site__nav {
   padding: 30px;
  
   font-size: 28px;
}

.site__link {
  margin-right: 30px;
}
</style>
