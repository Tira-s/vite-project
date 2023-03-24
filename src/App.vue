<script setup>
  import Nav from './components/Nav.vue';
  import Bicycle from './components/Bycicle.vue';
  import Human from './components/Human.vue';
  import Card from './components/Card.vue';
  import Footer from './components/Footer.vue';
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      date: null,
      mode: "datetime",
    };
  },
};
</script>

<template>
  <Nav />
  <Bicycle />
  <Human />
  <Card />
  <Footer />
  <Calendar />
  <DatePicker v-model="date" :mode="mode" is-inline />
</template>

<style scoped>
</style>
