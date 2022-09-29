<template>
  <compHeader/>
  <compFooter/>
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>
<script>
  import compHeader from "./components/header_footer/Header.vue";
  import compFooter from './components/header_footer/Footer.vue';
export default {
  data() {
    return {
      name: 'hassan',
      age: '22',
    }
  },
  components:{
    compHeader,
    compFooter,
  }
}
</script>
<style>

</style>