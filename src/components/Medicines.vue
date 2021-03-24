<template>
  <div class="medicine-cards">
    <div
      v-for="medicine in $store.state.medicines"
      class="medicine-card"
      :key="medicine.id"
    >
      <p><b>Name:</b> {{ medicine.medicationName }}</p>
      <p><b>Strength:</b> {{ medicine.strength }}</p>
      <p><b>Form:</b> {{ medicine.form }}</p>
      <p><b>Unit:</b> {{ medicine.unit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Medicines",
};
</script>

<style scoped>
p {
  font-size: 1.6rem;
}
b {
  font-weight: 600;
}
.medicine-cards {
  margin-top: 2rem;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-gap: 1rem;
}
.medicine-card {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
}
.medicine-card:hover {
  border-color: #222;
}
/* Media Queries*/
@media (min-width: 700px) {
  .medicine-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .medicine-cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
