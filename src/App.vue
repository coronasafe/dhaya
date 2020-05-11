<template>
  <div>
    <NavBar />
    <div class="max-w-7xl mx-auto p-6">
      <div class="my-2">
        <AlertError />
        <AlertSuccess />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import AlertError from "@/components/AlertError.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    AlertError,
    AlertSuccess,
    NavBar
  }
};
</script>
t
