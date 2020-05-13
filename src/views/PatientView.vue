<template>
  <div>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg
  font-medium leading-6 text-gray-900"
            >
              Profile
            </h3>
            <p
              class="mt-1 text-sm
  leading-5 text-gray-600"
            >
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div
          class="mt-5 md:mt-0
  md:col-span-2"
        >
          <form action="#" method="POST">
            <div
              class="shadow
  sm:rounded-md sm:overflow-hidden"
            >
              <div
                class="bg-white shadow overflow-hidden
  sm:rounded-lg"
              >
                <div
                  class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6"
                >
                  <div
                    class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap"
                  >
                    <div class="ml-4 mt-4">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Patient Detail
                      </h3>
                      <p class="mt-1 text-sm leading-5 text-gray-500">
                        The Personal details of the Patient is given below.
                      </p>
                    </div>
                    <div class="ml-4 mt-4 flex-shrink-0">
                      <span class="inline-flex rounded-md shadow-sm">
                        <button
                          type="button"
                          class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"
                        >
                          Call Patient
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="px-4 py-5 sm:p-0">
                  <dl>
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
                    >
                      <dt
                        class="text-sm
  leading-5 font-medium text-gray-500"
                      >
                        Name
                      </dt>
                      <dd
                        class="mt-1 text-sm
  leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.name }}
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t
  sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt
                        class="text-sm leading-5 font-medium
  text-gray-500"
                      >
                        Gender / Age
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5
  text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.gender }}, {{ patient.age }} years old
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3
  sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt
                        class="text-sm
  leading-5 font-medium text-gray-500"
                      >
                        Email
                      </dt>
                      <dd
                        class="mt-1 text-sm
  leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.email }}
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t
  sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt
                        class="text-sm leading-5 font-medium
  text-gray-500"
                      >
                        Phone
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900
  sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.phone }}
                      </dd>
                    </div>
                    <div
                      class="mt-8
  sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6
  sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Address
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.house_name }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div
          class="border-t
      border-gray-200"
        ></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg
      font-medium leading-6 text-gray-900"
            >
              Appointments
            </h3>
            <p
              class="mt-1
      text-sm leading-5 text-gray-600"
            >
              Pending and Completed Appointments
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <div
            class="shadow
      overflow-hidden sm:rounded-md"
          >
            <div
              class="bg-white shadow
      overflow-hidden sm:rounded-md"
            >
              <ul>
                <li
                  v-for="appointment in appointments"
                  :key="appointment.id"
                  class="border-t border-gray-200"
                >
                  <span
                    href="#"
                    class="block hover:bg-gray-50 focus:outline-none
      focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    <router-link
                      :to="{
                        name: 'AppointmentView',
                        params: { id: appointment.id }
                      }"
                    >
                      <div class="flex items-center px-4 py-4 sm:px-6">
                        <div
                          class="min-w-0 flex-1
      flex items-center"
                        >
                          <div class="flex-shrink-0">
                            <img
                              class="h-12 w-12
      rounded-full"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div
                            class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2
      md:gap-4"
                          >
                            <div>
                              <div
                                class="text-sm leading-5 font-medium
      text-indigo-600 truncate"
                              >
                                {{ appointment.doctor.name }}
                              </div>
                              <div
                                class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                              >
                                <svg
                                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M2.003 5.884L10
      9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8
      4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <span class="truncate">{{
                                  appointment.doctor.id
                                }}</span>
                              </div>
                            </div>
                            <div class="hidden md:block">
                              <div>
                                <div
                                  class="text-sm leading-5
      text-gray-900"
                                >
                                  Booked for
                                  <time datetime="2020-01-07">Booked For</time>
                                </div>
                                <div
                                  class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                                >
                                  <svg
                                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10
      18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586
      7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                  Completed phone screening
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <svg
                            class="h-5 w-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0
      011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </router-link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div
          class="border-t
      border-gray-200"
        ></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg
      font-medium leading-6 text-gray-900"
            >
              Book Appointment
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Search Doctors either by Hospitals or Specialisation
            </p>
          </div>
        </div>
        <div
          class="mt-5 md:mt-0
      md:col-span-2"
        >
          <form action="#" method="POST">
            <div
              class="shadow
      overflow-hidden sm:rounded-md"
            >
              <BookAppointment :patient="patient" />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="hidden sm:block">
      <div class="py-5">
        <div
          class="border-t
      border-gray-200"
        ></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3
              class="text-lg
      font-medium leading-6 text-gray-900"
            >
              Medical Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Medical Information of the Patient entered by Doctors
            </p>
          </div>
        </div>
        <div
          class="mt-5 md:mt-0
      md:col-span-2"
        >
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PatientsRef, AppointmentsRef } from "@/db.js";
import BookAppointment from "@/components/BookAppointment.vue";

export default {
  name: "PatientView",
  data: function() {
    return {
      patient: {},
      appointments: []
    };
  },
  computed: {
    patient_id() {
      return this.$route.params.id;
    }
  },
  firestore() {
    return {
      patient: PatientsRef.doc(this.patient_id),
      appointments: AppointmentsRef.where("patient.id", "==", this.patient_id)
    };
  },
  components: {
    BookAppointment
  }
};
</script>
