<template>
  <div class="counter-area" @click="countUp()" >
    Hallo zusammen, es wurde {{ counter }} mal geklickt.
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {

  counter = 0;

  countUp() {
    this.counter = this.counter + 1;
  }
}

</script>

<style scoped>
  .counter-area {
    background-color: aqua;
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
</style>