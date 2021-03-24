<template>
  <div id="container">
    <Header />
    <main>
      <CollectionHeader />
      <hr />
      <Loader v-show="$store.state.fetching" />
      <Patients
        v-show="!$store.state.fetching && !$store.state.showMedicines"
      />
      <Medicines
        v-show="!$store.state.fetching && $store.state.showMedicines"
      />
    </main>
  </div>
</template>

<script>
// Components
import Loader from "./components/Loader";
import Header from "./components/Header";
import Medicines from "./components/Medicines";
import Patients from "./components/Patients";
import CollectionHeader from "./components/CollectionHeader";

export default {
  name: "App",
  components: {
    Header,
    Loader,
    Medicines,
    Patients,
    CollectionHeader,
  },
  created() {
    this.$store.dispatch("getPatientsWithMedication");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@300;400;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 10px;
}

#container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
