import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import i18n from './i18n'
import Vuelidate from 'vuelidate'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuelidate)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR_API_TOKEN',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

    //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

Vue.config.productionTip = false


// Use beforeEach route to set the language
router.beforeEach((to, from, next) => {

  // Use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'ee'
  }

  // Set the current language  for i18n.
  i18n.locale = language
  next()
});


new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
