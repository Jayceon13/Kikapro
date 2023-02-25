<template>
  <q-layout view="lHh Lpr lFf">
    <header-kika></header-kika>
    <q-page-container>
      <transition :key="$route.meta.key" name="router-anim">
        <router-view />
      </transition>
    </q-page-container>
    <footer-kika style="margin-top: -85px; position: absolute; z-index: 10"></footer-kika>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderKika from "components/HeaderKika.vue";
import FooterKika from "components/FooterKika.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderKika,
    FooterKika,
  },

})
</script>
