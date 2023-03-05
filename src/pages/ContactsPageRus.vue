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
          <span style="font-size: 30px">КОНТАКТЫ</span>
        </h3>
        <q-btn class="btn-form" outline rounded color="white" label="ЗАПИСЬ" @click="scrollToFeedback" />
      </div>
    </div>
    <div class="second-block">
      <div class="second-block-text" id="feedback">
        <p>
          Вы можете заполнить форму обратной заявки и я свяжусь с вами
        </p>
      </div>
      <feedback-form-rus></feedback-form-rus>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FeedbackFormRus from "components/FeedbackFormRus";

export default defineComponent({
  name: 'ContactsPage',
  components: {FeedbackFormRus},
  methods: {
    scrollToFeedback() {
      document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
    },
  }
})
</script>

<style scoped>
.main-block{
  height: 110vh;
  color: white;
  display: flex;
  flex-flow: column;
  background-image: url("/img/bgcontacts.jpg");
  background-size: cover;
  background-position: center;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  justify-content: space-between;
  padding-bottom: 60px;
}
.second-block{
  height: 100vh;
  width: 100vw;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  background: #2f2f2f;
  margin-top: -85px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.second-block-text{
  width: 50%;
  height: 100%;
}
.second-block-text{
  width: 90%;
  height: 90%;
  padding: 40px;
  color: white;
  text-align: center;
  align-self: center;
  display: flex;
  align-items: center;
}
.second-block-text p{
  font-family: "Oooh baby";
  font-size: 35px;
  display: flex;
  justify-content: space-between;
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
  .second-block{
    flex-flow: column;
  }
  .second-block-text p{
    font-size: 20px;
  }
  .second-block-text{
    height: 40px;
  }
}
.logo-block{
  margin: 0 0 0 40px;
}
.logo{
  height: 200px;
}
</style>
