<template>
  <div @click="countUp()" class="hallo-welt">
    Hallo zusammen, es wurde {{ counter }} mal geklickt.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {

  counter = 0;

  countUp() {
    console.log('clicked')
    this.counter++;
  }
}

</script>

<style scoped>
  .hallo-welt {
    background-color: aqua;
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
</style>