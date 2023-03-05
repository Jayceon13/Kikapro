<template>
  <q-layout view="lHh Lpr lFf">
    <header-kika-rus></header-kika-rus>
    <q-page-container>
      <transition :key="$route.meta.key" name="router-anim">
        <router-view />
      </transition>
    </q-page-container>
    <footer-kika-rus style="margin-top: -85px; position: absolute; z-index: 10"></footer-kika-rus>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HeaderKikaRus from "components/HeaderKikaRus.vue";
import FooterKikaRus from "components/FooterKikaRus.vue";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderKikaRus,
    FooterKikaRus,
  },

})
</script>
