<template>
  <div :class="['footer', { 'footer-black': isBlack }]" >
    <div :class="['footer_block', { 'footer_block-black': isBlack }]">
      <div class="main-block">
        <div class="first-block">
          <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
            <div :class="['footer_block-item--mail', { 'footer_block-item--mail-black': isBlack }]">
              <p></p>
              <p style="font-family: 'Oooh baby'; color: white">Email:<a href="mailto: info@unex.com" :class="['footer_block-mail', { 'footer_block-mail-black': isBlack }]">info@unex.com></a></p>
            </div>
            <div class="block-dubai" @click="goToDubai">
              <img class="whatsapp-logo" src="/icons/Whatsapp.svg">
              <p style="font-family: 'Oooh baby'; color: white">WhatsApp</p>
            </div>
          </div>
        </div>
        <div class="second-block">
          <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
            <div class="block-turkey" @click="goToTurkey">
              <img class="telegram-logo" src="/icons/Telegram.svg">
              <p style="font-family: 'Oooh baby'; color: white">Telegram</p>
            </div>
            <div class="block-turkmenistan" @click="goToTurkmenistan">
              <img class="phone-logo" src="/icons/Youtube.svg">
              <p style="font-family: 'Oooh baby'; color: white">Phone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, watch} from 'vue'

export default {
  data() {
    return {
      isBlack: false
    }
  },
  methods: {
    goToDubai() {
      window.location.href = 'https://www.google.com/maps/place/Sultan+Business+Centre/@25.233556,55.3087118,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f42cc28ba49af:0x57bbd7cd1311987e!8m2!3d25.233556!4d55.3087118?hl=ru&authuser=0'
    },
    goToTurkey() {
      window.location.href = 'https://www.google.com/maps/place/Torun+Center/@41.0655397,28.9638999,14z/data=!4m10!1m2!2m1!1sIstanbul,+Turkey++Torn+Business+Center,+Office+74а%2F205,+Buyukdere+Cd.+Fulya+mah,+Sisli%2FIstanbul!3m6!1s0x14cab6ff113a5661:0x41e9a778a4dd953b!8m2!3d41.0655397!4d28.9989188!15sCmBJc3RhbmJ1bCwgVHVya2V5ICBUb3JuIEJ1c2luZXNzIENlbnRlciwgT2ZmaWNlIDc00LAvMjA1LCBCdXl1a2RlcmUgQ2QuIEZ1bHlhIG1haCwgU2lzbGkvSXN0YW5idWxaXCJaaXN0YW5idWwgdHVya2V5IHRvcm4gYnVzaW5lc3MgY2VudGVyIG9mZmljZSA3NNCwIDIwNSBidXl1a2RlcmUgY2QgZnVseWEgbWFoIHNpc2xpIGlzdGFuYnVskgEQY29ycG9yYXRlX29mZmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOb05Fb3lURVpSRUFF4AEA!16s%2Fg%2F11q4c621wc'
    },
    goToTurkmenistan() {
      window.location.href = 'https://www.google.com/maps/place/Бизнес+центр+%22Пайтагт%22/@37.9181577,58.3546466,13z/data=!4m10!1m2!2m1!1sAshgabat,+Turkmenistan++Paytagt+Business+Center,+1945+street!3m6!1s0x3f6ffd262d2b4961:0xfeeb495406a8d1c4!8m2!3d37.8941058!4d58.3897555!15sCjxBc2hnYWJhdCwgVHVya21lbmlzdGFuICBQYXl0YWd0IEJ1c2luZXNzIENlbnRlciwgMTk0NSBzdHJlZXSSAQ9idXNpbmVzc19jZW50ZXLgAQA!16s%2Fg%2F11k_ns9d94?hl=ru&authuser=0'
    }
  },
  props: {
    black: {
      type: Boolean,
      default: false
    }
  },
  onMounted() {
    this.isBlack = this.black;
  },
  watch: {
    $route(to, from) {
      if (to.path === '/services' || to.path === '/projects' || to.path === '/achievements') {
        this.isBlack = true;
      } else {
        this.isBlack = this.black;
      }
    }
  }
}
</script>

<style scoped>
.footer-logo{
  width: 200px;
  height: auto;
}
.telegram-logo{
  width: 40px;
}
.whatsapp-logo{
  width: 40px;
}
.phone-logo{
  width: 40px;
}
.footer {
  color: white;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #181818;
  flex-direction: column;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}
.footer_block {
  display: flex;
  justify-content: center;
  color: black;
  width: 100%;
}
.main-block {
  display: flex;
  justify-content: space-around;
}
.first-block{
  display: flex;
}
.footer_block-item{
  justify-content: end;
}
@media screen and (max-width: 920px) {
  .footer_block{
    width: 100%;
    display: flex;
    flex-flow: column;
  }
  .footer_block-black{
    width: 100%;
    display: flex;
    flex-flow: column;
  }
  .main-block{
    display: flex;
    width: 100%;
  }
  .footer_block-item{
    text-align: center;
  }
  .footer_block-item-black{
    text-align: center;
  }
  .footer_block-logo {
    text-align: center;
    padding: 30px;
    height: 100px;
  }
  .footer-logo{
    width: 150px;
  }
  .footer_block-item--mail{

  }
  .first-block{
    flex-flow: column;
    width: 50%;
  }
  .block-dubai{
  }
  .second-block{
    width: 50%;
  }
  .footer-logo-black{
    width: 100%;
  }
}
@media screen and (max-width: 427px) {
  .footer_block-logo {
    display: flex;
    align-items: center;
    height: 100px;
    align-self: center;
  }
  .footer-logo-black{
    width: 100%;
  }
  .block-dubai{
    padding: 19px;
  }
  .footer-logo{
    width: 150px;
  }
}
@media screen and (max-width: 429px) {
  .footer_block-logo {
    height: 100px;
  }
  .footer-logo{
    width: 150px;
  }
}

@media screen and (min-width: 920px) {
  .footer_block-item {
    display: flex;
  }
  .footer_block-item-black {
    display: flex;
  }
  .footer_block{
    display: flex;
  }
  .block-dubai{
    padding: 30px;
  }
  .footer_block-black{
    display: flex;
  }
  .main-block{
    text-align: center;
    align-self: center;
  }
  .footer_block-logo {
    height: 100px;
    padding: 20px;
    text-align: center;
    align-self: center;
  }
  .first-block{
    display: flex;
  }
  .second-block{
    display: flex;
  }
  .footer-logo-black {
    height: 130px;
  }
  .footer_block-item--mail{
    width: min-content;
  }
  .footer_block-item--mail-black{
    width: min-content;
  }
}

.block-dubai{
  cursor: pointer;
  text-align: center;
  height: 100px;
}
.block-turkey{
  cursor: pointer;
  padding: 30px;
  text-align: center;
  height: 100px;
}
.block-turkmenistan{
  padding: 30px;
  cursor: pointer;
  text-align: center;
  height: 100px;
}
.footer_block-item--mail{
  padding: 30px;
  text-align: center;
}
.footer_block-item--mail-black{
  text-align: center;
  padding: 30px;
}
.block-rights{
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.footer_block-mail{
  text-decoration: none;
  color: white;
}
.footer_block-mail-black{
  text-decoration: none;
  color: white;
}
.footer-black {
  background-color: black;
  color: white;
}
.footer_block-black{
  color: white;
  border-bottom: solid 1px white;
}
.footer_block-item-black{
  color: white;
}
.footer_block-item--mail-black{
  color: white;
}
</style>
