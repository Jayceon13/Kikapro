<template>
  <div class="header-block">
    <div :class= "!showBurgerMenu? 'hamburger hamburger--arrow-r' : 'hamburger is-active hamburger--arrow-r'" @click="blockBurgerMenu">
      <div class="hamburger-box">
        <div class="hamburger-inner" >
        </div>
      </div>
    </div>
  </div>
  <transition name="menu">
    <div class="block-menu"
         v-if="showBurgerMenu"
         @click="blockBurgerMenu">
      <div @click="() => {$router.push ('/'); showBurgerMenu}"
           class="block-about"
           style="cursor: pointer"
      >
        HOME
      </div>
      <div class="second-block-menu">
        <div @click="() => {$router.push ('/services'); showBurgerMenu}"
             class="block-examples">
          SERVICES
        </div>
        <div @click="() => {$router.push ('/contacts'); showBurgerMenu}"
             class="block-contacts"
             style="cursor: pointer"
        >
          CONTACTS
        </div>
      </div>
    </div>
  </transition>
  <transition name="bg-block">
  <div class="block-background" v-if="showBurgerMenu">
  </div>
  </transition>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "HeaderKika",
  setup () {
    const showBurgerMenu = ref(false)
    return {
      showBurgerMenu,
      blockBurgerMenu() {
        showBurgerMenu.value = !showBurgerMenu.value;
      },
    }
  }
}
</script>

<style scoped>
.block-home{
  position: fixed;
  display: flex;
}
.block-home img:hover{
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 30px;
  transition: 1s;
}
.block-background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
.router-animation-leave-active,
.router-animation-enter-active{
  transition: opacity 0.5s ease-in-out;
}
.bg-block-leave-active,
.bg-block-enter-active {
  transition: opacity 0.5s ease-in-out;
}
.bg-block-enter-from,
.bg-block-leave-to {
  opacity: 0;
}
.menu-leave-active {
  z-index: 999;
  animation: slide-up 0.5s ease-in-out;
}
@keyframes slide-up {
  0%{
    transform: translate(0, 0);
  }
  100%{
    transform: translate(100%, -200%);
  }
}
.menu-enter-active{
  z-index: 999;
  animation: slide-down 0.5s ease-in-out;
}
@keyframes slide-down {
  0%{
    transform: translate(100%, -200%);
  }
  100%{
    transform: translate(0, 0);
  }
}
.block-menu{
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
}
.header-block{
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 50px;
  position: absolute;
}
.block-menu{
  display: flex;
  justify-content: flex-end;
}
.block-about{
  cursor: pointer;
  height: 100%;
  width: 50%;
  background: white;
  border: black 1px solid;
  position: absolute;
  font-weight: bold;
  display: flex;
  padding: 80px;
  font-size: 25px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  align-items: center;
}
.block-about:hover{
  background: #505050;
  transition: 0.3s ease;
  color: white;
}
.block-contacts{
  cursor: pointer;
  height: 50%;
  width: 100%;
  background: white;
  border: black 1px solid;
  position: absolute;
  font-weight: bold;
  display: flex;
  align-items: self-start;
  padding: 80px;
  font-size: 25px;
  border-top-left-radius: 100px;
}
.block-contacts:hover{
  background: #505050;
  transition: 0.3s ease;
  color: white;
}
.second-block-menu{
  width: 25%;
  height: 100%;
  display: table-column;
  position: absolute;
}
.block-examples{
  cursor: pointer;
  padding: 80px;
  font-size: 25px;
  height: 50%;
  width: 100%;
  background: white;
  border: black 1px solid;
  font-weight: bold;
  display: flex;
  align-items: self-end;
  border-bottom-left-radius: 100px;
}
.block-examples:hover{
  background: #505050;
  transition: 0.3s ease;
  color: white;
}
@media screen and (max-width: 900px) {
  .block-menu{
    display: flex;
    justify-content: flex-end;
  }
  .block-about{
    width: 80%;
    padding: 30px;
  }
  .block-contacts{
    padding: 40px;
    font-size: 20px;
  }
  .block-examples{
    padding: 40px;
    font-size: 20px;
  }
  .second-block-menu{
    width: 50%;
  }
  @media only screen and (max-height: 500px) {
    .block-about {
      padding: 60px;
    }
  }

  @media only screen and (max-height: 500px) {
    .block-examples {
      padding: 40px;
    }
  }
  .block-home{
    width: 60px;
    height: 80px;
    z-index: 999;
    margin: 30px;
    cursor: pointer;
  }
}
.hamburger {
  z-index: 9999;
  position: fixed;
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
.hamburger:hover {
  opacity: 0.7; }
.hamburger.is-active:hover {
  opacity: 0.7; }
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: white;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; }
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; }
.hamburger-inner::before {
  top: -10px; }
.hamburger-inner::after {
  bottom: -10px; }
.hamburger--arrow-r.is-active .hamburger-inner::before {
  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }

.hamburger--arrow-r.is-active .hamburger-inner::after {
  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }
</style>
