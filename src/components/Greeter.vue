<template>
  <div>
    <h2>Hallo Seminarteilnehmer/in!</h2>
    <div id="input-fields-wrapper">
      <input class="input-fields" v-model="name" placeholder="Dein Name">
      <input class="input-fields" v-model="message" placeholder="Trage deinen Gruß ein">
      <div class="primary-button" @click="sendGreeting">Gruß dalassen</div>
    </div>
    <h3>Grüße von:</h3>
    <div v-for="g in greetings" :key="g.greeting" >
      <div>{{ g.user }}:</div>
      <div>{{ g.greeting }}</div>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Greeter extends Vue {
  private greetingsPoint = 'https://simon-guesbook-backend.herokuapp.com/greetings';
  // private greetingsPoint = 'http://localhost:5000/greetings';
  public greetings = [];
  public name = '';
  public message = '';

  public async sendGreeting() {
    if (this.name && this.message) {
      const data = JSON.stringify({
          user: this.name,
          greeting: this.message
      });

      const response = await axios.post(this.greetingsPoint, {
          user: this.name,
          greeting: this.message
      });

      if (response.data) {
        this.greetings = response.data;
        this.name = '';
        this.message = '';
      }
    }
  }

  async created() {
    const response = await axios.get(this.greetingsPoint);
      
    if (response.data) {
      this.greetings = response.data;
    }
  }
}
</script>

<style scoped>
#input-fields-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.primary-button {
  cursor: pointer;
  padding: 5px;
  margin: 15px;
  background: #42b983;
  color: white;
  border: 2px solid #2c3e50;
  border-radius: 4px;
  width: 200px;
}

.input-fields {
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  border: 2px solid #2c3e50;
  width: 200px;
}

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
