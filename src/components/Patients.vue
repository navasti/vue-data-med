<template>
  <div class="patient-cards">
    <div
      v-for="patient in $store.state.patients"
      class="patient-card"
      :key="patient.id"
    >
      <h3>{{ patient.name }} {{ patient.lastName }}</h3>
      <div class="separator"></div>
      <p><b>Age: </b>{{ patient.age }}</p>
      <p><b>Gender: </b>{{ patient.gender }}</p>
      <p><b>Phone: </b>{{ patient.phoneNumber }}</p>
      <p><b>Address: </b>{{ patient.adress }}</p>
      <p>
        <b>Medicine: </b>
        <span v-for="(medicine, index) in patient.medicines" :key="medicine.id">
          {{ medicine.name
          }}<span v-if="index != Object.keys(patient.medicines).length - 1"
            >,
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Patients",
};
</script>

<style scoped>
h3 {
  font-weight: 600;
  font-size: 2.2rem;
}
b {
  font-weight: 600;
}
p {
  font-size: 1.6rem;
  font-weight: 400;
}
p:not(:last-of-type) {
  margin-bottom: 0.5rem;
}
.separator {
  height: 0.1rem;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0.5rem 0 0.8rem 0;
}
.patient-cards {
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
}
.patient-card {
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
}
.patient-card:hover {
  border-color: #222;
}
/* Media Queries*/
@media (min-width: 720px) {
  .patient-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .patient-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
