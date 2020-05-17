<template>
 <div class="container">
   <app-header></app-header>
   <div class="col-xs-12">
    <router-view></router-view>
   </div>
   
 </div>
</template>
<script>
  import Header from '../src/components/Header.vue';
  export default{
        components: {
          appHeader: Header
        },
        created() {
          this.$store.dispatch('initStocks');
        }
     }
</script>
<style>
      body{
        padding:30px;
      }
</style>
