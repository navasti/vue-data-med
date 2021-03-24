import { createStore } from "vuex";
import axios from "axios";

const patientsUrl = "https://cerber.pixel.com.pl/api/patients";
const medicinesUrl = "https://cerber.pixel.com.pl/api/medicine";

export default createStore({
  state: {
    patients: [],
    medicines: [],
    fetching: true,
    showMedicines: false,
  },
  mutations: {
    getAllMedicines(state, medicines) {
      state.medicines = medicines;
      state.showMedicines = true;
    },
    getPatientsWithMedication(state, patients) {
      state.patients = patients;
      state.showMedicines = false;
    },
    getMedicinesForOverThirty(state, filteredMedicines) {
      state.medicines = filteredMedicines;
      state.showMedicines = true;
    },
    getMedicinesTakingByMen(state, filteredMedicines) {
      state.medicines = filteredMedicines;
      state.showMedicines = true;
    },
  },
  actions: {
    async getPatientsWithMedication({ commit }) {
      this.state.fetching = true;
      const medicines = await axios.get(medicinesUrl).then(res => res.data);
      const patients = await axios.get(patientsUrl).then(res => res.data);
      const combinedPatientsWithMedicines = [];

      patients.forEach(patient => {
        const newPatient = {
          ...patient,
          medicines: [],
        };
        medicines.forEach(medicine => {
          medicine.patientIds.forEach(id => {
            if (patient.id === id) {
              newPatient.medicines.push({
                name: medicine.medicationName,
                id: medicine.id,
              });
            }
          });
        });
        combinedPatientsWithMedicines.push(newPatient);
      });

      commit("getPatientsWithMedication", combinedPatientsWithMedicines);
      this.state.fetching = false;
    },
    async getAllMedicines({ commit }) {
      this.state.fetching = true;
      const medicines = await axios.get(medicinesUrl).then(res => res.data);
      commit("getAllMedicines", medicines);
      this.state.fetching = false;
    },
    async filterMedicines({ commit }, condition) {
      this.state.fetching = true;
      const medicines = await axios.get(medicinesUrl).then(res => res.data);
      const filteredMedicines = [];
      const medicineIds = [];

      this.state.patients.forEach(patient => {
        switch (condition) {
          case "age":
            if (patient.age >= 30) {
              patient.medicines.forEach(medicine => {
                medicineIds.includes(medicine.id)
                  ? null
                  : medicineIds.push(medicine.id);
              });
            }
            break;
          case "gender":
            if (patient.gender === "male") {
              patient.medicines.forEach(medicine => {
                medicineIds.includes(medicine.id)
                  ? null
                  : medicineIds.push(medicine.id);
              });
            }
            break;
        }
      });

      medicines.forEach(medicine => {
        medicineIds.includes(medicine.id)
          ? filteredMedicines.push(medicine)
          : null;
      });

      if (condition === "age")
        commit("getMedicinesForOverThirty", filteredMedicines);
      else if (condition === "gender")
        commit("getMedicinesTakingByMen", filteredMedicines);

      this.state.fetching = false;
    },
  },
  modules: {},
});
