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
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
              <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Patient Information
                </h3>
                <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <div>
                <dl>
                  <div
                    class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
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
                    class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
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
                    class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
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
                    class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
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
                    class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
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

                  <div
                    class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt class="text-sm leading-5 font-medium text-gray-500">
                      Previous Medical Consultations
                    </dt>
                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                      <div
                        class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p class="mt-1 text-sm text-gray-600">
                            <button
                              type="button"
                              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                            >
                              Upload a file
                            </button>
                            or drag and drop
                          </p>
                          <p class="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt class="text-sm leading-5 font-medium text-gray-500">
                      Lab Reports
                    </dt>
                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                      <div
                        class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                      >
                        <div class="text-center">
                          <svg
                            class="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <p class="mt-1 text-sm text-gray-600">
                            <button
                              type="button"
                              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                            >
                              Upload a file
                            </button>
                            or drag and drop
                          </p>
                          <p class="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
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
              Assesment and Diagnosis
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Capture the Symptomatics and the Medical Conditions of the Patient
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-6">
                    <h3>Recorded Symptoms</h3>
                    <ul class="mt-2 border border-gray-200 rounded-md">
                      <li
                        v-for="symptom in patient.symptoms"
                        :key="symptom.type + symptom.duration"
                        class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                      >
                        {{ symptom.type }}, {{ symptom.duration }}
                      </li>
                    </ul>
                  </div>

                  <div
                    class="border-t border-gray-200 col-span-6 sm:col-span-6"
                  ></div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="symptom_type"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Symptoms</label
                    >
                    <select
                      id="symptom_type"
                      v-model="symptom.type"
                      class="mt-1 block form-select w-full py-2 px-3 py-0 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    >
                      <option>Fever</option>
                      <option>Cough</option>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label
                      for="symptom_duration"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Duration of Symptom</label
                    >
                    <input
                      id="symptom_duration"
                      v-model="symptom.duration"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-1">
                    <button
                      @click.prevent="addSymptom"
                      class="mt-6 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                    >
                      Add
                    </button>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="past_history"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Past History</label
                    >
                    <textarea
                      id="past_history"
                      v-model="patient.past_history"
                      rows="4"
                      class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="drug_history"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Drug History</label
                    >
                    <textarea
                      id="drug_history"
                      v-model="patient.drug_history"
                      rows="4"
                      class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="allergic_history"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Allergic History</label
                    >
                    <textarea
                      id="allergic_history"
                      v-model="patient.allergic_history"
                      rows="4"
                      class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click.prevent="saveAssesment"
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
              Prescription
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Record the Prescriptions here
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-6">
                    <h3>Prescribed Drugs</h3>

                    <ul class="mt-2 border border-gray-200 rounded-md">
                      <li
                        v-for="drug in appointment.drugs"
                        :key="drug.name + drug.dosage"
                        class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                      >
                        {{ drug.name }}, {{ drug.dosage }}
                      </li>
                    </ul>
                  </div>

                  <div
                    class="border-t border-gray-200 col-span-6 sm:col-span-6"
                  ></div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="drug_name"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Name / Type of Drug</label
                    >
                    <input
                      id="drug_name"
                      v-model="drug.name"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-2">
                    <label
                      for="drug_dosage"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Drug Dosage</label
                    >
                    <input
                      id="drug_dosage"
                      v-model="drug.dosage"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="drug_schedule"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Schedule</label
                    >
                    <input
                      id="drug_schedule"
                      v-model="drug.schedule"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="drug_duration"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Duration</label
                    >
                    <input
                      id="drug_duration"
                      v-model="drug.duration"
                      class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="drug_remarks"
                      class="block text-sm font-medium leading-5 text-gray-700"
                      >Remarks</label
                    >
                    <textarea
                      id="drug_remarks"
                      v-model="drug.remarks"
                      rows="4"
                      class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  @click.prevent="addDrug"
                  class="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  Add Drug
                </button>
              </div>
            </div>
          </form>
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
                Refer to Specialist
              </h3>
              <p class="mt-1 text-sm leading-5 text-gray-600">
                Refer the Patient to a new Doctor by creating a new Appointment
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <BookAppointment :patient="patient" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppointmentsRef, PatientsRef } from "@/db.js";
import BookAppointment from "@/components/BookAppointment.vue";

export default {
  name: "ViewAppointment",
  components: {
    BookAppointment
  },
  data() {
    return {
      patient: {},
      appointment: {},
      symptom: { type: "", duration: "" },
      drug: { name: "", dosage: "", schedule: "", duration: "", remarks: "" }
    };
  },
  created() {
    this.fetchAppointment(this.$route.params.id);
  },
  methods: {
    fetchAppointment(id) {
      AppointmentsRef.doc(id)
        .get()
        .then(snapshot => {
          let appointmentData = snapshot.data();
          this.appointment = { id: id, ...appointmentData };
          this.appointment.drugs = this.appointment.drugs
            ? this.appointment.drugs
            : [];
          this.fetchPatient(this.appointment.patient.id);
        });
    },
    updateAppointment() {
      AppointmentsRef.doc(this.$route.params.id).update(this.appointment);
    },
    updatePatient() {
      PatientsRef.doc(this.appointment.patient.id).update(this.patient);
    },
    addSymptom() {
      this.patient.symptoms.push({
        ...this.symptom
      });
      this.symptom.type = "";
      this.symptom.duration = "";
      this.updatePatient();
    },
    saveAssesment() {
      this.updatePatient();
    },
    addDrug() {
      this.appointment.drugs.push({
        ...this.drug
      });
      this.drug = {
        name: "",
        dosage: "",
        schedule: "",
        duration: "",
        remarks: ""
      };
      this.updateAppointment();
    },
    fetchPatient(id) {
      PatientsRef.doc(id)
        .get()
        .then(snapshot => {
          let patientData = snapshot.data();
          this.patient = { id: id, ...patientData };
          this.patient.symptoms = this.patient.symptoms
            ? this.patient.symptoms
            : [];
        });
    }
  }
};
</script>
