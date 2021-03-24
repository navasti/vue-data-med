<template>
  <header>
    <div class="logo">DataMed</div>
    <div class="results">
      <h1>Results:</h1>
      <span v-show="$store.state.showMedicines">
        {{ $store.state.medicines.length }}
      </span>
      <span v-show="!$store.state.showMedicines">
        {{ $store.state.patients.length }}
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  font-size: 2rem;
  margin-left: 0.5rem;
}
.results {
  display: flex;
}
.logo {
  font-size: 4.8rem;
  font-family: "Dancing Script", cursive;
}
</style>
