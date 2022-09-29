<template>
  <compHedaer/>
  <compFooter/>
  <div>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>
<script>
  import compFooter from './components/header_footer/Footer.vue';
export default {
  data() {
    return {
      name: 'hassan',
      age: '22',
    }
  },
  components:{

    compFooter,
  }
}
</script>
<style>

</style>