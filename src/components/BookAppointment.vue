<template>
  <div class="shadow overflow-hidden sm:rounded-md">
    <div class="px-4 py-5 bg-white sm:p-6">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-6">
          <h3>Select Doctor</h3>
          <p class="text-sm text-gray-700">
            To book Appointment either by Hospital Wise or Specialisation Wise
          </p>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="hospital"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Hostpital</label
          >
          <div class="mt-1 rounded-md shadow-sm">
            <select
              v-model="selectedHospitalId"
              id="hospital"
              class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            >
              <option
                v-for="hospital in hospitals"
                :key="hospital.id"
                :value="hospital.id"
                >{{ hospital.name }}</option
              >
            </select>
          </div>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="doctor"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Doctor</label
          >
          <div class="mt-1 rounded-md shadow-sm">
            <select
              v-model="selectedDoctorId"
              id="doctor"
              class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            >
              <option
                v-for="doctor in doctors"
                :key="doctor.id"
                :value="doctor.id"
                >{{ doctor.name }}</option
              >
            </select>
          </div>
        </div>

        <div class="col-span-6 sm:col-span-6 text-center">
          <p class="text-gray-500">
            OR
          </p>
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="specialisation"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Specialisation</label
          >
          <input
            id="specialisation"
            v-model="specialisation"
            class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="doctor"
            class="block text-sm font-medium leading-5 text-gray-700"
            >Doctor</label
          >
          <input
            id="doctor"
            class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        <div class="col-span-6 sm:col-span-6">
          <h3>Available Slots</h3>
          <ul class="mt-2 border border-gray-200 rounded-md">
            <li
              v-for="slot in slots"
              :key="slot.start"
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
            >
              <div>
                {{ slot.start.toDate().toLocaleTimeString() }} to
                {{ slot.end.toDate().toLocaleTimeString() }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button
        @click.prevent="bookAppointment"
        class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
      >
        Book Appointment
      </button>
    </div>
  </div>
</template>

<script>
import { HospitalsRef, DoctorsRef, SlotsRef, AppointmentsRef } from "@/db.js";

export default {
  name: "BookAppointment",
  props: ["patient"],
  data() {
    return {
      hospitals: [],
      selectedHospitalId: "",
      doctors: [],
      selectedDoctorId: "",
      slots: []
    };
  },
  methods: {
    bookAppointment() {
      let doctor = this.doctors.find(doc => doc.id === this.selectedDoctorId);
      AppointmentsRef.add({
        patient: {
          id: this.patient.id,
          name: this.patient.name
        },
        doctor: {
          id: doctor.id,
          name: doctor.name
        }
      });
    }
  },
  watch: {
    selectedHospitalId: {
      handler(id) {
        this.$bind("doctors", DoctorsRef.where("hospital_id", "==", id));
      }
    },
    selectedDoctorId: {
      handler(id) {
        this.$bind("slots", SlotsRef.where("doctor_id", "==", id));
      }
    }
  },
  firestore() {
    return {
      hospitals: HospitalsRef
    };
  }
};
</script>
