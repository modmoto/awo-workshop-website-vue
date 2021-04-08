<template>
  <div>
    <h2>Hallo Seminarteilnehmer/in!</h2>
    <div id="input-fields-wrapper">
      <input class="input-fields" v-model="name" placeholder="Dein Name">
      <input class="input-fields" v-model="message" placeholder="Trage deinen Gruß ein">
      <div  @click="sendGreeting" class="primary-button">Gruß dalassen</div>
      <img v-if="uploadedImage" :src="uploadedImage" class="uploaded-image"/>
      <input @change="(e) => onSelectImage(e)" class="image-select" type="file" accept="image/*">
      <div v-if="imageError">Bild zu groß!</div>
    </div>
    <h3>Grüße von:</h3>
    <div id="greeting-list">
      <div class="grettings-wrapper" v-for="g in greetings" :key="g.id" >
        <div class="greeter-header">
          <img @click="() => deleteGreeting(g)" src="https://img.icons8.com/metro/26/000000/trash.png" class="greeter-delete" />
        </div>
        <img v-if="g.image" :src="g.image" class="image-of-post" />
        <div class="message-panel"> 
          <div class="message-and-user"> 
            <div class="user-name">{{ g.user }}:</div>
            <div class="user-message">{{ g.greeting }}</div>
          </div>
          <div class="likes-wrapper">
            <img @click="() => likeGreeting(g)" class="greeting-like-button" src="https://img.icons8.com/material/24/000000/facebook-like--v1.png"/>
            <div class="greeting-like-amount">{{ g.likes }}</div>
          </div>
        </div>
      </div>
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
  public uploadedImage = '';
  public imageError = false;

  public async sendGreeting() {
    if (this.name && this.message) {
      const imageTemp = this.uploadedImage
      this.uploadedImage = ''

      const response = await axios.post(this.greetingsPoint, {
          user: this.name,
          greeting: this.message,
          image: imageTemp
      });

      if (response.data) {
        this.greetings = response.data;
        this.name = '';
        this.message = '';
      }
    }
  }

  public onSelectImage(event: any) {
    this.imageError = false
    this.uploadedImage = '';
    const firstFile = event.target.files[0];
    if (firstFile) {
      if (firstFile.size > 36537) {
        this.imageError = true
        return;
      }
      const FR = new FileReader();
      FR.addEventListener("load", e => this.setFile(e.target?.result)); 
      FR.readAsDataURL(firstFile);
    }
  }

  public setFile(f: any) {
    this.uploadedImage = f;
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

#greeting-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.image-of-post {
  padding: 8px;
  border-bottom: 1px solid lightgrey;
}

.message-panel {
  background-color: rgb(250, 250, 250);
  border-radius: 0 0 4px 4px;
}

.uploaded-image {
  width:100%;
  max-width:300px;
}

.image-select {
  margin: 20px;
  padding-left: 4%;
}

.user-name {
  font-size: 0.8em;
  margin-bottom: 12px;
}

.message-and-user {
  float: left;
  padding: 12px;
}

.likes-wrapper {
  float: right;
  display: flex;
  padding: 12px;
}

.greeting-like-amount {
  line-height: 26px;
}

.greeting-like-button{
  cursor: pointer;
  margin-right: 8px;
}

.greeter-delete {
  cursor: pointer;
}

.greeter-header {
  display: flex;
  border-radius: 4px 4px 0 0;
  background-color: rgb(250, 250, 250);
  justify-content: flex-end;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
}

.grettings-wrapper {
  width: 400px;
  margin: 15px;
  border: 1px solid gray;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

a {
  color: #42b983;
}
</style>
