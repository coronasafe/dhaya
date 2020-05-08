<template>
  <div class="max-w-4xl">
    <form @submit.prevent="createPatient">
      <div>
        <div class="mt-8">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              <p v-if="patient.name == ''">
                Patient Registration
              </p>
              <p v-else>Hello {{ patient.name }}</p>
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="name"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="patient.name"
                  id="name"
                  required
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  v-model="patient.email"
                  type="email"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="phone"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Phone
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  required
                  id="phone"
                  v-model="patient.phone"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="gender"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Gender
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <select
                  id="gender"
                  v-model="patient.gender"
                  class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="">
              <label
                for="age"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Age
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="patient.age"
                  id="age"
                  type="number"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label
                for="house_name"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                House Name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="patient.house_name"
                  id="house_name"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="number_family_members"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Number of Family Members
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  v-model="patient.number_family_members"
                  id="number_family_members"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="district"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                District
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="district"
                  v-model="patient.district"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="panchayat"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Panchayat
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="panchayat"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="ward"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Ward
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="ward"
                  v-model="patient.ward"
                  type="number"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-5">
          <div class="flex justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
              >
                Cancel
              </button>
            </span>
            <span class="ml-3 inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Save
              </button>
            </span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { PatientsRef } from "@/db.js";

export default {
  name: "PatientNew",
  data: function() {
    return {
      patient: {
        name: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        house_name: "",
        number_family_members: "",
        ward: "",
        district: "",
        panchayat: ""
      }
    };
  },
  methods: {
    createPatient() {
      PatientsRef.add({
        createdBy: this.$store.state.current_user.uid,
        ...this.patient
      })
        .then(patientRef => {
          this.$store.dispatch("raiseSuccess", {
            success_message: "Patient has been successfully registered"
          });
          this.$router.push({
            name: "PatientView",
            params: { id: patientRef.id }
          });
        })
        .catch(err_msg => {
          this.$store.dispatch("raiseError", { error_message: err_msg });
        });
    }
  }
};
</script>
