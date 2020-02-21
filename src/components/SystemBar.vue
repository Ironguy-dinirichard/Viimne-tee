<template>
  <v-system-bar fixed="true" color="orange" height=30 style="z-index: 5">
    <v-icon>mdi-gmail</v-icon>
    <span>10 unread emails</span>
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>12:30</span>
  </v-system-bar>
</template>

<script>
export default {
  name: "SystemBar",
  data: () => ({})
};
</script>
