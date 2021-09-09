<template>
  <div id="app">
    <simulador-aleman></simulador-aleman>
  </div>
</template>

<script>
import SimuladorAleman from "@/components/metodoAleman/SimuladorAleman"

export default {
  name: 'App',
  components: {
    SimuladorAleman
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
