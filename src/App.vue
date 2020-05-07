<template>
  <div>
    <AlertError />
    <router-view />
  </div>
</template>

<script>
import AlertError from "@/components/AlertError.vue";
export default {
  name: "App",
  components: {
    AlertError
  }
};
</script>
t
