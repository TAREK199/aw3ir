<template>
  <div class="main">
    <modal
      v-if="modalOpen"
      v-on:close-modal="toggleModal"
      v-bind:APIkey="APIkey"
    />
    <navigation-main v-on:add-city="toggleModal" v-on:edit-city="toggleEdit"
 />
    <router-view :cities="cities" :edit="edit" />
  </div>
</template>


<script>
import axios from "axios";
import db from "./firebase/firebaseInit";
import NavigationMain from "./components/NavigationMain.vue";
import Modal from "./components/Modal.vue";

export default {
  components: { NavigationMain, Modal },
  name: "app",

  data() {
    return {
      APIkey: "3764bb9fc5c326ac62ae38dfdafc5738",
      cities: [],
      modalOpen: null,
      edit: null,
    };
  },

  component: {
    NavigationMain,
  },

  created() {
    this.getCityWeather();
  },

  methods: {
    getCityWeather() {
      let firebaseDB = db.collection("cities");

      firebaseDB.onSnapshot((snap) => {
        snap.docChanges().forEach(async (doc) => {
          console.log(doc.type);
          console.log(doc);
          if (doc.type === "added" && !doc.doc.Nd) {
            try {
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${
                  doc.doc.data().city
                }&appid=${this.APIkey}`
              );
              const data = response.data;

              firebaseDB
                .doc(doc.doc.id)
                .update({
                  currentWeather: data, // store weather data to firestore
                })
                .then(() => {
                  this.cities.push(doc.doc.data()); // push data from firestore to cities []
                });
            } catch (err) {
              console.log(err);
            }
          } else if (doc.type === "added" && doc.doc.Nd) {
            this.cities.push(doc.doc.data());
          } else if(doc.type === "removed"){
            this.cities = this.cities.filter((city => city.city !== doc.doc.data().city));
          }
        });
      });
    },

    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    toggleEdit(){
      this.edit = !this.edit
    }

  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quickstand", sans-serif;
}

.main {
  max-width: 1024px;
  margin: 0 auto;
  height: 100vh;

  .container {
    padding: 0 20px;
  }
}
</style>
