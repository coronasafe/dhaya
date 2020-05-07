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
                    Applicant Information
                  </h3>
                  <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                    Personal details and application.
                  </p>
                </div>
                <div class="px-4 py-5 sm:p-0">
                  <dl>
                    <div
                      class="sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        Margot Foster
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Application for
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        Backend Developer
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        margotfoster@example.com
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Salary expectation
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        $120,000
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        About
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div
                      class="mt-8 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-t sm:border-gray-200 sm:px-6 sm:py-5"
                    >
                      <dt class="text-sm leading-5 font-medium text-gray-500">
                        Attachments
                      </dt>
                      <dd
                        class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >
                        <ul class="border border-gray-200 rounded-md">
                          <li
                            class="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                          >
                            <div class="w-0 flex-1 flex items-center">
                              <svg
                                class="flex-shrink-0 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span class="ml-2 flex-1 w-0 truncate">
                                resume_back_end_developer.pdf
                              </span>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                              <a
                                href="#"
                                class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                          <li
                            class="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5"
                          >
                            <div class="w-0 flex-1 flex items-center">
                              <svg
                                class="flex-shrink-0 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                              <span class="ml-2 flex-1 w-0 truncate">
                                coverletter_back_end_developer.pdf
                              </span>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                              <a
                                href="#"
                                class="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Save
                  </button>
                </span>
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
              Personal Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Use a permanent address where you can receive mail.
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
              Notifications
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-600">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6">
                <fieldset>
                  <legend class="text-base leading-6 font-medium text-gray-900">
                    By Email
                  </legend>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="comments"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="comments" class="font-medium text-gray-700"
                          >Comments</label
                        >
                        <p class="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="flex items-start">
                        <div class="absolute flex items-center h-5">
                          <input
                            id="candidates"
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div class="pl-7 text-sm leading-5">
                          <label
                            for="candidates"
                            class="font-medium text-gray-700"
                            >Candidates</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="flex items-start">
                        <div class="absolute flex items-center h-5">
                          <input
                            id="offers"
                            type="checkbox"
                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div class="pl-7 text-sm leading-5">
                          <label for="offers" class="font-medium text-gray-700"
                            >Offers</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="mt-6">
                  <legend class="text-base leading-6 font-medium text-gray-900">
                    Push Notifications
                  </legend>
                  <p class="text-sm leading-5 text-gray-500">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div class="mt-4">
                    <div class="flex items-center">
                      <input
                        id="push_everything"
                        name="form-input push_notifications"
                        type="radio"
                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label for="push_everything" class="ml-3">
                        <span
                          class="block text-sm leading-5 font-medium text-gray-700"
                          >Everything</span
                        >
                      </label>
                    </div>
                    <div class="mt-4 flex items-center">
                      <input
                        id="push_email"
                        name="form-input push_notifications"
                        type="radio"
                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label for="push_email" class="ml-3">
                        <span
                          class="block text-sm leading-5 font-medium text-gray-700"
                          >Same as email</span
                        >
                      </label>
                    </div>
                    <div class="mt-4 flex items-center">
                      <input
                        id="push_nothing"
                        name="form-input push_notifications"
                        type="radio"
                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                      <label for="push_nothing" class="ml-3">
                        <span
                          class="block text-sm leading-5 font-medium text-gray-700"
                          >No push notifications</span
                        >
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600 transition duration-150 ease-in-out"
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
export default {
  name: "PatientView"
};
</script>
