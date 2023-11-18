<template>
  <div>
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
export default {
  components: {
    navbar: navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
</style>