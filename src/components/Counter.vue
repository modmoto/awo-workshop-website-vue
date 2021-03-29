<template>
  <div>
    <h2>Hallo Seminarteilnehmer/in!</h2>
    <br />
    <h3>Grüße von:</h3>
    <div v-for="g in greetings" :key="g.greeting" >
      <div>{{ g.user }}:</div>
      <div>{{ g.greeting }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  public greetings = [];

  async created() {
    const response = await fetch('');
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
