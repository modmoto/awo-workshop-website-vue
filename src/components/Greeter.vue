<template>
  <div>
    <h2>Hallo Seminarteilnehmer/in!</h2>
    <div id="input-fields-wrapper">
      <input class="input-fields" v-model="name" placeholder="Dein Name">
      <input class="input-fields" v-model="message" placeholder="Trage deinen Gruß ein">
      <div class="primary-button" @click="sendGreeting">Gruß dalassen</div>
    </div>
    <h3>Grüße von:</h3>
    <div v-for="g in greetings" :key="g.id" >
      <div>{{ g.user }}:</div>
      <div>{{ g.greeting }}</div>
      <div>{{ g.likes }}</div>
      <img v-if="g.image" :src="g.image" />
      <button @click="() => deleteGreeting(g)">delete</button>
      <button @click="() => likeGreeting(g)">like</button>
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { Greeting } from './types';

@Component
export default class Greeter extends Vue {
  private greetingsPoint = 'https://simon-guesbook-backend.herokuapp.com/greetings';
  // private greetingsPoint = 'http://localhost:5000/greetings';
  public greetings = [];
  public name = '';
  public message = '';
  public image = `data:image/jpg;base64,R0lGODdhEAAQAMwAAPj7+FmhUYjNfGuxYYDJdYTIeanOpT+DOTuANXi/bGOrWj6CONzv2sPjv2CmV1unU4zPgI/Sg6DJnJ3ImTh8Mtbs00aNP1CZSGy0YqLEn47RgXW8amasW7XWsmmvX2iuXiwAAAAAEAAQAAAFVyAgjmRpnihqGCkpDQPbGkNUOFk6DZqgHCNGg2T4QAQBoIiRSAwBE4VA4FACKgkB5NGReASFZEmxsQ0whPDi9BiACYQAInXhwOUtgCUQoORFCGt/g4QAIQA7`

  public async sendGreeting() {
    if (this.name && this.message) {
      const response = await axios.post(this.greetingsPoint, {
          user: this.name,
          greeting: this.message,
          image: this.image
      });

      if (response.data) {
        this.greetings = response.data;
        this.name = '';
        this.message = '';
      }
    }
  }

  public async deleteGreeting(g: Greeting) {
    const response = await axios.delete(`${this.greetingsPoint}/${g.id}`);
    
    if (response.data) {
      this.greetings = response.data;
    }
  }

   public async likeGreeting(g: Greeting) {
    const response = await axios.put(`${this.greetingsPoint}/${g.id}`);
    
    if (response.data) {
      this.greetings = response.data;
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
