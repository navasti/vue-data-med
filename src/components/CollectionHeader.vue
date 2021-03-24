<template>
  <div class="collection-header">
    <h1>Resources</h1>
    <div class="filters">
      <select
        name="options"
        v-model="selected"
        @change="handleSelectChange($event)"
      >
        <option value="filters" selected disabled>Filter medicines</option>
        <option value="medicines">All medicines</option>
        <option value="male">Medicines taking by men</option>
        <option value="thirty">Medicines for 30+ people</option>
      </select>
      <button @click="handleResetButtonClick()">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionHeader",
  data() {
    return {
      selected: "filters",
    };
  },
  methods: {
    handleSelectChange(event) {
      const { value } = event.target;
      if (value === "thirty") {
        this.$store.dispatch("filterMedicines", "age");
      } else if (value === "male") {
        this.$store.dispatch("filterMedicines", "gender");
      } else if (value === "medicines") {
        this.$store.dispatch("getAllMedicines");
      }
    },
    handleResetButtonClick() {
      this.selected = "filters";
      this.$store.dispatch("getPatientsWithMedication");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.6rem;
  font-weight: 600;
}
label {
  font-size: 1.6rem;
  margin-right: 0.5rem;
}
select,
button {
  padding: 0.5rem 0.8rem;
  font-size: 1.6rem;
}
button {
  margin-left: 1rem;
}
.collection-header {
  display: flex;
  flex-direction: column;
  margin: 5rem 0 1.5rem 0;
}
.filters {
  display: flex;
  margin-top: 1rem;
  align-items: center;
}
/* Media Queries */
@media (min-width: 540px) {
  .collection-header {
    justify-content: space-between;
    flex-direction: row;
  }
  .filters {
    margin-top: 0;
  }
}
</style>
