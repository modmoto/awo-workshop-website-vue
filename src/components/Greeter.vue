<template>
  <div>
    <h2>Hallo Seminarteilnehmer/in!</h2>
    <input v-model="name">
    <input v-model="message">
    <button @click="sendGreeting">Gruß dalassen</button>
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

@Component
export default class Greeter extends Vue {
  private greetingsPoint = 'https://simon-guesbook-backend.herokuapp.com/greetings';
  // private greetingsPoint = 'http://localhost:5000/greetings';
  public greetings = [];
  public name = '';
  public message = '';

  public async sendGreeting() {
    if (this.name && this.message) {
      const body = JSON.stringify({
          user: this.name,
          greeting: this.message
      });
      
      const response = await fetch(this.greetingsPoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });

      if (response.status === 200) {
        const greetings = await response.json();
        this.greetings = greetings;
      }
    }
  }

  async created() {
    const response = await fetch(this.greetingsPoint, { 
      method: 'GET'
    });
      
    if (response.status === 200) {
      const greetings = await response.json();
      this.greetings = greetings;
    }
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
