<template>
  <div class="preloader" v-if="show">
    <div class="preloader-logo">Your form<br>has been<br>successfully submitted!</div>
  </div>
</template>

<style>
.preloader {
  font-family: 'PT Sans', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  color: white;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  animation: slide-fade 1s ease-in-out forwards;
  animation-delay: 1.3s;
}
.preloader-logo {
  text-align: center;
  animation: zoom .5s ease-in-out forwards;
  transform: scale(1);
  position: relative;
  overflow: hidden;
}

@keyframes zoom {
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.2);
  }
}

@keyframes slideRight {
  0%{
    transform: translateY(-110%);
  }
  100%{
    transform: translateY(0%);
  }
}

@keyframes slideRight {
  0%{
    transform: translateY(-110%);
  }
  100%{
    transform: translateY(0%);
  }
}

@keyframes slide-fade {
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(100%);
  }
}

.preloader-logo:before{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  transform: translateY(-110%);
  animation: slideRight 1s ease-in-out forwards;
  animation-delay: .5s;
}
</style>

<script>
export default {
  name: "alert-form",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
}
</script>
