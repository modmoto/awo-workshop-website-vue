<template>
  <div class="hallo-welt">
    Hallo zusammen
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class App extends Vue {

}
</script>

<style>
  .hallo-welt {
    background-color: aqua;
    text-align: center;
    padding: 10px;
  }
</style>