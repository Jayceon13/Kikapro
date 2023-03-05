<template>
  <q-page>
    <div class="main-block">
      <div class="logo-block">
        <img class="logo" src="/icons/kika.svg">
      </div>
      <div class="main-information">
        <p>Привет, меня зовут Кристина, и я создаю уникальный макияж, который преображает ваш образ. Как визажист, специализирующийся на работе со знаменитостями, я могу помочь вам создать эффектный новый образ, который привлечет всеобщее внимание.</p>
      </div>
      <div class="main-information-2">
        <h3><span style="font-family: Oooh Baby, sans-serif;">MAKEUP </span>
          <span style="font-family: Oleo Script, serif;">ARTIST</span>
        </h3>
        <q-btn class="btn-form" outline rounded color="white" label="ЗАЯВКА"
               @click="$router.push ('/ru/contacts')"/>
      </div>
    </div>
    <div class="second-block">
      <div class="block-works">
        <q-carousel
          class="corousel"
          animated
          v-model="slide"
          infinite
          :autoplay="autoplay"
          arrows
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide :name="1" img-src="/img/makeup1.jpg" />
          <q-carousel-slide :name="2" img-src="/img/makeup26.jpg" />
          <q-carousel-slide :name="3" img-src="/img/makeup18.jpg" />
          <q-carousel-slide :name="4" img-src="/img/makeup25.jpg" />
          <q-carousel-slide :name="5" img-src="/img/makeup5.jpg" />
          <q-carousel-slide :name="6" img-src="/img/makeup6.jpg" />
          <q-carousel-slide :name="7" img-src="/img/makeup7.jpg" />
          <q-carousel-slide :name="8" img-src="/img/makeup8.jpg" />
          <q-carousel-slide :name="9" img-src="/img/makeup9.jpg" />
          <q-carousel-slide :name="10" img-src="/img/makeup10.JPG" />
          <q-carousel-slide :name="11" img-src="/img/makeup11.JPG" />
          <q-carousel-slide :name="12" img-src="/img/makeup12.jpg" />
          <q-carousel-slide :name="13" img-src="/img/makeup13.JPG" />
          <q-carousel-slide :name="14" img-src="/img/makeup14.JPG" />
          <q-carousel-slide :name="15" img-src="/img/makeup15.jpg" />
          <q-carousel-slide :name="16" img-src="/img/makeup27.JPG" />
          <q-carousel-slide :name="17" img-src="/img/makeup17.JPG" />
          <q-carousel-slide :name="18" img-src="/img/makeup3.jpg" />
          <q-carousel-slide :name="19" img-src="/img/makeup2.jpg" />
          <q-carousel-slide :name="20" img-src="/img/makeup20.JPG" />
          <q-carousel-slide :name="21" img-src="/img/makeup21.JPG" />
          <q-carousel-slide :name="22" img-src="/img/makeup22.JPG" />
          <q-carousel-slide :name="23" img-src="/img/makeup23.JPG" />
          <q-carousel-slide :name="24" img-src="/img/makeup24.jpg" />
        </q-carousel>
      </div>
      <div class="second-block-text">
        <p data-aos="fade-up-right" data-aos-duration="3000" >Меня зовут Кристина.
          Уже 6 лет я создаю красоту для других людей.
          КОММЕРЧЕСКИЙ И НЕКОММЕРЧЕСКИЙ макияж - мое все.
          Я создаю уникальные образы для съемок музыкальных клипов и рекламных роликов.
          С моим макияжем вы будете неотразимы.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

<style scoped>
  .main-block{
    height: 110vh;
    color: white;
    display: flex;
    flex-flow: column;
    background-image: url("/img/bgmain.jpg");
    background-size: cover;
    background-position: top;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  .main-information{
    margin-left: 40px;
    width: 30%;
  }
  .main-information-2{
    margin-left: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
  }
  .main-information-2 h3{
    font-style: italic;
  }
  .btn-form{
    height: 15px;
    margin-right: 40px;
  }
  @media screen and (max-width: 600px) {
    .btn-form{
      height: 60px;
    }
  }
  .logo-block{
    margin: 0 0 0 40px;
  }
  .logo{
    height: 200px;
  }
  .second-block{
    height: 110vh;
    width: 100vw;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    background: #2f2f2f;
    margin-top: -85px;
    display: flex;
    align-items: center;
  }
  .block-works{
    width: 50%;
    margin: 40px 0 40px 40px;
    background: linear-gradient(272.29deg, #000000 0.02%, #2A2A2B 98.08%);
    height: 80%;
    background-size: cover;
    border-top-left-radius: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .corousel{
    width: 50%;
  }
  .second-block-text{
    width: 50%;
    background: linear-gradient(272.29deg, #2A2A2B 0.02%, #000000 98.08%);
    height: 80%;
    margin: 40px 40px 40px 0;
    background-size: cover;
    border-top-right-radius: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  .second-block-text p{
    padding: 40px;
    font-size: 20px;
  }
  @media screen and (max-width: 700px) {
    .second-block{
      flex-flow: column;
    }
    .second-block-text p{
      margin-top: 15px;
      font-size: 15px;
    }
    .block-works{
      height: 50%;
      width: 80%;
      margin: 30px 30px 0 30px;
      border-radius: 0;
    }
    .second-block-text{
      height: 50%;
      width: 80%;
      margin: 0 30px 30px 30px;
      border-radius: 0;
    }
    .corousel{
      height: 70%;
      width: 70%;
    }
  }
</style>
