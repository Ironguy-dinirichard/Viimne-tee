<template>
  <v-app>

    <v-app-bar fixed color="deep-purple" dark dense style="top:30px">

      <v-app-bar-nav-icon @click="drawer = true" class="d-xl-none"></v-app-bar-nav-icon>

      <div>
        <v-toolbar-title>Title</v-toolbar-title>
      </div>

      <v-tabs centered show-arrows class="d-none d-lg-block">
        <v-tab href="#one" :to="`/${ $i18n.locale }/`">{{ $t("nav.about")}}</v-tab>
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
        <v-tab :to="`/${ $i18n.locale }/Kontact`">{{ $t("nav.contact")}}</v-tab>
        <v-tabs-slider color="pink"></v-tabs-slider>
      </v-tabs>

      <v-spacer></v-spacer>

      <LocaleChanger #LocaleChanger class="d-none d-lg-block" />

      <v-navigation-drawer v-model="drawer" absolute temporary light style="top:48px" height="auto">
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <LocaleChanger />
            </v-list-item>

            <v-list-item link :to="`/${ $i18n.locale }/`">
              {{ $t("nav.about") }}
            </v-list-item>

            <!-- <v-list-item>
              <a>{{ $t("nav.services")}}</a>
            </v-list-item> -->

            <v-list-group value="true">
              <template v-slot:activator>
                {{ $t("nav.services")}}
              </template>

              <v-list-item v-for="(item, i) in more" :key="i" link>
                <v-list-item-title>
                  {{ item }}
                </v-list-item-title>
              </v-list-item>

            </v-list-group>

            <v-list-item>
              <a>{{ $t("nav.price")}}</a>
            </v-list-item>

            <v-list-item>
              <a>{{ $t("nav.planning")}}</a>
            </v-list-item>

            <v-list-item>
              <a>{{ $t("nav.grieving")}}</a>
            </v-list-item>

            <v-list-item link :to="`/${ $i18n.locale }/Kontact`">
              {{ $t("nav.contact")}}
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>

    <SystemBar />

    <div style="margin-top: 80px">
      <router-view />
    </div>

    <Footer />

  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import SystemBar from "./components/SystemBar";
import LocaleChanger from "./components/LocaleChanger";

export default {
  name: "App",

  components: {
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
