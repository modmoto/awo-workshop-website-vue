<template>
  <div>
    <h2>Hallo Workshop</h2>
    <div>Es wurde {{ counter }} mal gecklickt</div>
    <br />
    <button @click="count">click</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  public counter = 0;

  public count(): void {
    this.counter = this.counter + 1;
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
