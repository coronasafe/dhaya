<template>
  <div>
    <AlertError />
    <AlertSuccess />
    <router-view />
  </div>
</template>

<script>
import AlertError from "@/components/AlertError.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";

export default {
  name: "App",
  components: {
    AlertError,
    AlertSuccess
  }
};
</script>
t
