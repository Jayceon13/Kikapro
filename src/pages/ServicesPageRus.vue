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
          <span style="font-size: 30px">УСЛУГИ</span>
        </h3>
        <q-btn class="btn-form" outline rounded color="white" label="ЗАПИСЬ"
               @click="$router.push ('/ru/contacts')"/>
      </div>
    </div>
    <div class="second-block">
      <h3>МАКИЯЖ</h3>
      <div class="second-block-text">
        <p><span>Экспресс образ </span><span style="text-align: right">100$ | 1850TL</span></p>
        <p><span>Образ (макияж + укладка)</span><span style="text-align: right">150$ | 2900TL</span></p>
        <p><span>Макияж (все виды макияжа)</span><span style="text-align: right">100$ | 1900TL</span></p>
        <p><span>Укладка</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>Выезд по городу без дополнительной оплаты</span><span></span></p>
        <p><span>За пределы индивидуальный расчет </span><span></span></p>
        <p><span>Ранний выезд | Поздний выезд +</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>С 9-22 цена не меняется</span><span style="text-align: right"></span></p>
        <p><span>Онлайн | офлайн  консультация</span><span style="text-align: right">50$ | 950TL</span></p>
        <p><span>Онлайн уроки по макияжу один урок</span><span style="text-align: right">150$ | 2900TL</span></p>
        <p><span>Все уроки ( 5 уроков ) без обратной связи</span><span style="text-align: right">350$ | 6800TL</span></p>
        <p><span>Все уроки ( 5 уроков ) с обратной связью</span><span style="text-align: right">500$ | 9600TL</span></p>
        <p><span>Офлайн уроки по макияжу ( один урок )</span><span style="text-align: right">200$ | 3800TL</span></p>
        <p><span>Все виды макияжа 5 дней</span><span style="text-align: right">700$ | 13500TL</span></p>
      </div>
    </div>
    <div class="third-block">
      <h3>БРОВИ И РЕСНИЦЫ</h3>
      <div class="second-block-text">
        <p><span>Архитектура бровей / формы создания</span><span style="text-align: right">50AED | 14$ | 250TL</span></p>
        <p><span>Прореживание</span><span style="text-align: right">50AED | 14$ | 250TL</span></p>
        <p><span>Долговременная укладка бровей</span><span style="text-align: right">170AED | 46$ | 600TL</span></p>
        <p><span>Осветление бровей</span><span style="text-align: right">100AED | 27$ | 400TL</span></p>
        <p><span>Ламинирование ресниц</span><span style="text-align: right">170AED | 46$ | 600TL</span></p>
        <p><span>Окрашивание/Коррекция бровей</span><span style="text-align: right">130AED | 35$ | 450TL</span></p>
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
    height: auto;
    padding-bottom: 80px;
  }
  .third-block{
    height: auto;
    padding-bottom: 80px;
  }
}
.logo-block{
  margin: 0 0 0 40px;
}
.logo{
  height: 200px;
}
</style>
