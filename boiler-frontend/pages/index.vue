<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4"
  >
    <div class="w-full max-w-2xl">
      <!-- Stepper component -->
      <div class="flex justify-between mb-8">
        <template v-for="step in 4" :key="step">
          <div class="flex items-center">
            <div
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center',
                step <= currentStep
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-600',
              ]"
            >
              {{ step }}
            </div>
            <div
              v-if="step < 4"
              class="flex-1 h-1 mx-2"
              :class="step < currentStep ? 'bg-yellow-400' : 'bg-gray-600'"
            ></div>
          </div>
        </template>
      </div>

      <!-- Content -->
      <div v-if="currentStep === 1">
        <h1 class="text-2xl font-bold mb-6">
          I'm building a REST API backend for
        </h1>
        <div class="form-control">
          <input
            v-model="userInput"
            type="text"
            placeholder="a discussion forum like Reddit."
            class="input input-bordered w-full bg-gray-800 text-white"
          />
        </div>
      </div>

      <div v-else-if="currentStep === 2">
        <h2 class="text-2xl font-bold mb-6">
          Let's identify the core features
        </h2>
        <div
          v-for="(feature, featureIndex) in features"
          :key="featureIndex"
          class="mb-6"
        >
          <h3 class="text-xl font-semibold mb-2">{{ feature.category }}</h3>
          <ul class="list-none pl-4">
            <li
              v-for="(req, reqIndex) in feature.requirements"
              :key="reqIndex"
              class="mb-2 flex items-start"
            >
              <input
                type="checkbox"
                :id="'req-' + featureIndex + '-' + reqIndex"
                v-model="feature.requirements[reqIndex].checked"
                class="w-4 h-4 mr-2 mt-1 bg-gray-600"
              />
              <label
                :for="'req-' + featureIndex + '-' + reqIndex"
                class="cursor-pointer"
                >{{ req }}</label
              >
            </li>
          </ul>
        </div>

        <!-- Custom section -->
        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-2">Custom</h3>
          <ul class="list-none pl-4">
            <li
              v-for="(req, index) in customRequirements"
              :key="index"
              class="mb-2 flex items-center"
            >
              <input
                v-model="customRequirements[index]"
                type="text"
                class="bg-gray-800 text-white flex-grow p-2 rounded mr-2"
                placeholder="Enter custom requirement"
              />
              <button
                @click="deleteCustomRequirement(index)"
                class="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          </ul>
          <button
            @click="addNewCustomRequirement"
            class="mt-4 px-4 py-2 border border-white rounded hover:bg-gray-700"
            :disabled="!canAddNewRequirement"
          >
            Add New
          </button>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="flex justify-between mt-8">
        <button
          @click="prevStep"
          :disabled="currentStep === 1"
          class="btn bg-gray-600 text-white"
        >
          Previous
        </button>
        <button
          @click="handleNext"
          :disabled="currentStep === 4"
          class="btn bg-yellow-400 text-black"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useNuxtApp, useFetch } from "#app";

const currentStep = ref(1);
const userInput = ref("");
const features = ref([]);

const customRequirements = ref([""]);

const canAddNewRequirement = computed(() => {
  return customRequirements.value.every((req) => req.trim() !== "");
});

const addNewCustomRequirement = () => {
  if (canAddNewRequirement.value) {
    customRequirements.value.push("");
  }
};

const deleteCustomRequirement = (index) => {
  customRequirements.value.splice(index, 1);
  if (customRequirements.value.length === 0) {
    customRequirements.value.push("");
  }
};

const handleNext = async () => {
  const body = {
    otherParams: {
      model: "gpt-4-turbo",
    },
  };

  if (currentStep.value === 1) {
    const instruction =
      "Does this look like a project description for a backend project? Return true false in JSON: { topic: true }";
    const instruction2 = `Your response format: <think></think> <answer></answer>.

Goal: Generate an array of core or minimal functional requirements to build the backend API that the user is requesting. You should only provide the core functional requirements (do not include non-functional) required to build the MVP.

Instructions:
1. Exclude these functionalities:
- DevOps
- User (any user that could potentially become a user in the system, including a Customer)
- User Authentication (login, registration, permissions, roles), User Profile Management, Authorization, Permissions
- Real time
- Notification/Alerts 
- External tool/libraries Integration, third party tools
- Reporting, Visualization, Analytics, 
- File storage
- Payment system
- Basic report/analysis
- Machine Learning, Machine Learning Algorithm, Artificial intelligence
- Require specific algorithm to develop
- As a general rule, Focus on "sql entity based" requirements where we can immediately build the CRUD for it and exclude any feature that is an extended feature of another feature or a "phase 2" item.
For file upload features (image/video/pdf, etc.), assume we'll store their URLs. 

2. List a few existing apps in the market and list their common functional features/functionalities.

3. Identify from 2, suggest urself and list at least 10 (the more the better) absolutely basic functional requirements that are necessary to run the system minimally. 

4. Every requirement you list must be the root and not be the predecessor. For example "Rating and Review", but you should have "Watch movie" feature first.

5. Using a table, perform selection and elimination on all the listed features. Use ✔️ and ❌ for your answer.
|Passed Instruction 1 | Passed Instruction 4| Absolutely required for the MVP|

6. Sort the requirements based on how important they are to build first and group them based on the features that can be a standalone Microservice. Return the most accurate answer in the <answer> tag.

7. Describe the requirements in layman terms and do no need add the crud operations/actions in it. Users wants to know if they can manage (but not very specific like add, remove, edit, delete)

Example:
<think>
/* Perform thinking instructions here */
/* Keep your thinking staight to the point with shortened sentences.*/
/* Preferably point forms */
</think>
<answer>
  [
    {
      "category": "Parking Management",
      "requirements": [
        "Manage parking locations.",
        "Handle parking sessions to track when a vehicle enters and exits.",
        "Manage parking rates and policies",
      ]
    },
    {
      "category": "Parking Operations",
      "requirements": [
        "Manage parking availability.",
        "Handle parking reservations and their modifications."
      ]
    }
  ]
</answer>
    `;
    const prompt = userInput.value;

    try {
      // let data = await $fetch("/api/generate", {
      //   method: "POST",
      //   body: {
      //     ...body,
      //     instruction,
      //     otherParams: {
      //       model: "gpt-3.5-turbo"
      //       response_format: { type: "json_object" },
      //       messages: [{"role": "system", "content": `Return format: { "topic": false/true }`}]
      //     },
      //     prompt: `I'm building a REST API backend for ${prompt}.`,
      //   },
      // });
      // // responseText.value = data.result; // Assuming the server returns { result: '...' }
      // data = JSON.parse(data);

      // if (data?.topic == true) {
      const data2 = await $fetch("/api/generate", {
        method: "POST",
        body: {
          ...body,
          instruction: instruction2,
          prompt: `I'm building a REST API backend for ${prompt}.`,
        },
      });

      if (data2) {
        let contentInAnswerTag = data2
          .slice(
            data2.indexOf("<answer>") + "<answer>".length,
            data2.indexOf("</answer>")
          )
          .trim();
        features.value = JSON.parse(contentInAnswerTag);
        console.log(contentInAnswerTag);
      }
      // }
    } catch (error) {
      console.error("Failed to get response from OpenAI:", error);
    }
  }
  if (currentStep.value < 4) currentStep.value++;
};

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};
</script>