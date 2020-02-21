<template>
  <v-col style="padding-top: 1px;  height: 50px;">
    <v-select v-model="$i18n.locale" :items="langs" item-text="langs" chips dense></v-select>
  </v-col>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return { langs: ["ee", "ru"] };
  }
};
</script>