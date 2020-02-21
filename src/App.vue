<template>
  <v-app>
    <!-- <v-system-bar fixed="true" color="orange" height=30>
      <v-icon>mdi-gmail</v-icon>
      <span>10 unread emails</span>
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </!--> -->

    <v-app-bar fixed color="deep-purple" dark dense style="top:30px">
      <div>
        <v-toolbar-title>Title</v-toolbar-title>
      </div>

      <v-tabs centered show-arrows>
        <v-tab href="#one">{{ $t("nav.about")}}</v-tab>
        <v-menu offset-y v-if="more.length" bottom left>
          <template v-slot:activator="{ on }">
            <v-btn text class="align-self-center mr-4" v-on="on">
              {{ $t("nav.services")}}
              <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>

          <v-list class="grey lighten-3">
            <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-menu>
        <v-tab href="#two">{{ $t("nav.price")}}</v-tab>
        <v-tab href="#three">{{ $t("nav.planning")}}</v-tab>
        <v-tab href="#four">{{ $t("nav.grieving")}}</v-tab>
        <v-tab href="#five">{{ $t("nav.contact")}}</v-tab>
        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs>

      <v-spacer></v-spacer>

      <LocaleChanger />

      <v-app-bar-nav-icon @click="drawer = true" class="d-lg-none"></v-app-bar-nav-icon>
    </v-app-bar>

    <SystemBar />

    <div style="margin-top: 60px">
      <HelloWorld />
    </div>

    <v-navigation-drawer v-model="drawer" right absolute temporary style="top:30px">
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <LocaleChanger />
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ $t("nav.about")}}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <Footer />

  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Footer from "./components/Footer";
import SystemBar from "./components/SystemBar";
import LocaleChanger from "./components/LocaleChanger";

export default {
  name: "App",

  components: {
    HelloWorld,
    Footer,
    SystemBar,
    LocaleChanger
  },

  data: () => ({
    drawer: false,
    more: ["Click Me", "Click Me", "Click Me", "Click Me 2"],
    tabs: null
  })
};
</script>


<style lang="scss">
</style>
