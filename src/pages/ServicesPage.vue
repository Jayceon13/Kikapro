<template>
  <q-page>
    <div class="main-block">
      <div class="logo-block" @click="$router.push ('/')" style="cursor: pointer">
        <img class="logo" src="/icons/kika.svg">
      </div>
      <div class="main-information">
      </div>
      <div class="main-information-2">
        <h3>
          <span style="font-size: 30px">SERVICES</span>
        </h3>
        <q-btn class="btn-form" outline rounded color="white" label="Let's contact" />
      </div>
    </div>
    <div class="second-block">
      <h3>MAKEUP</h3>
      <div class="second-block-text">
        <p><span>Express look</span><span style="text-align: right">100$ | 1850TL</span></p>
        <p><span>Look (make-up + styling)</span><span style="text-align: right">150$ | 2900TL</span></p>
        <p><span>Make-up (all kinds of make-up)</span><span style="text-align: right">100$ | 1900TL</span></p>
        <p><span>Hair styling</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>Departure within the city at no extra charge</span><span></span></p>
        <p><span>Beyond separate calculations</span><span></span></p>
        <p><span>Early check out | Late check out +</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>From 9-22 the price does not change</span><span style="text-align: right"></span></p>
        <p><span>Online | offline consultation</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>Online makeup lessons one lesson</span><span style="text-align: right">150$ | 2900TL</span></p>
        <p><span>All lessons (5 lessons)  without feedback</span><span style="text-align: right">350$ | 6800TL</span></p>
        <p><span>All lessons (5 lessons)  With feedback</span><span style="text-align: right">500$ | 9600TL</span></p>
        <p><span>Offline makeup lessons (one lesson )</span><span style="text-align: right">200$ | 3800TL</span></p>
        <p><span>All types of make-up  5 days</span><span style="text-align: right">700$ | 13500TL</span></p>
      </div>
    </div>
    <div class="third-block">
      <h3>BROWS AND LASHES</h3>
      <div class="second-block-text">
        <p><span>Eyebrow architecture/creation forms</span><span style="text-align: right">50AED | 14$ | 250TL</span></p>
        <p><span>Thinning</span><span style="text-align: right">50AED | 14$ | 250TL</span></p>
        <p><span>Long-term eyebrow styling</span><span style="text-align: right">170AED | 46$ | 600TL</span></p>
        <p><span>Lightening eyebrow</span><span style="text-align: right">100AED | 27$ | 400TL</span></p>
        <p><span>Eyelash lamination</span><span style="text-align: right">170AED | 46$ | 600TL</span></p>
        <p><span>Coloring / Eyebrow correction</span><span style="text-align: right">130AED | 35$ | 450TL</span></p>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesPage'
})
</script>

<style scoped>
.main-block{
  height: 110vh;
  color: white;
  display: flex;
  flex-flow: column;
  background-image: url("/img/bgservices.jpg");
  background-size: cover;
  background-position: top;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  justify-content: space-between;
  padding-bottom: 60px;
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
.second-block{
  height: 160vh;
  width: 100vw;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  background: #2f2f2f;
  margin-top: -85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.second-block h3{
  font-family: "Oooh baby";
  color: white;

}
.second-block-text{
  width: 90%;
  height: 90%;
  padding: 40px;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  color: white;
}
.second-block-text p{
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: white 0.5px solid;
}
.third-block{
  height: 100vh;
  width: 100vw;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  background: #1e1e1e;
  margin-top: -85px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}
.third-block h3{
  font-family: "Oooh baby";
  color: white;
  text-align: center;
}
@media screen and (max-width: 600px) {
  .btn-form{
    height: 60px;
  }
  .second-block-text p{
    font-size: 17px;
  }
  .second-block{
    height: 130vh;
  }
}
.logo-block{
  margin: 0 0 0 40px;
}
.logo{
  height: 200px;
}
</style>
