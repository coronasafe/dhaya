<template>
  <div>
    <div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Patient Information
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    Personal Details about the Patient
                  </p>
                </div>
                <div class="px-4 py-5 sm:p-0">
                  <dl>
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Name
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.name }}
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Gender / Age
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.gender }}, {{ patient.age }} years old
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Email
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.email }}
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        {{ patient.phone }}
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
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
        <div class="border-t border-gray-200"></div>
      </div>
    </div>

    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Medical Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Medical Information of the Patient entered by Doctors
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first_name"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >First name</label
                    >
                    <input
                      id="first_name"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last_name"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Last name</label
                    >
                    <input
                      id="last_name"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email_address"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Email address</label
                    >
                    <input
                      id="email_address"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Country / Region</label
                    >
                    <select
                      id="country"
                      class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div class="col-span-6">
                    <label
                      for="street_address"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Street address</label
                    >
                    <input
                      id="street_address"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      for="city"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >City</label
                    >
                    <input
                      id="city"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="state"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >State / Province</label
                    >
                    <input
                      id="state"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal_code"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >ZIP / Postal</label
                    >
                    <input
                      id="postal_code"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PatientsRef } from "@/db.js";

export default {
  name: "PatientView",
  data: function() {
    return {
      patient: {}
    };
  },
  computed: {
    patient_id() {
      return this.$route.params.id;
    }
  },
  firestore() {
    return {
      patient: PatientsRef.doc(this.patient_id)
    };
  }
};
</script>
