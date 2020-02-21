<template>
  <v-footer absolute dark padless class="font-weight-medium">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({})
};
</script>
