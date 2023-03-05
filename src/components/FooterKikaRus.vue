<template>
  <div :class="['footer', { 'footer-black': isBlack }]" >
    <div :class="['footer_block', { 'footer_block-black': isBlack }]">
      <div class="main-block">
        <div class="first-block">
          <div :class="['footer_block-item', { 'footer_block-item-black': isBlack }]">
            <div :class="['footer_block-item--mail', { 'footer_block-item--mail-black': isBlack }]">
              <p></p>
              <p style="font-family: 'Oooh baby'; color: white">Email:<a href="mailto: alferukk@gmail.com" :class="['footer_block-mail', { 'footer_block-mail-black': isBlack }]">alferukk@gmail.com></a></p>
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
              <img class="phone-logo" src="/icons/insta.svg">
              <p style="font-family: 'Oooh baby'; color: white">Instagram</p>
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
      window.location.href = 'https://api.whatsapp.com/send?phone=79811853911&text='
    },
    goToTurkey() {
      window.location.href = 'https://t.me/k_alferuk'
    },
    goToTurkmenistan() {
      window.location.href = 'https://instagram.com/kikkkamakeup'
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
