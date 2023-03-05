<template>
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md"
    method="post"
  >
    <q-input
      filled
      v-model="namesur"
      label="Ваше имя *"
      lazy-rules
      class="text-white"
      :rules="[ val => val && val.length > 2 || 'Please type something']"
    />

    <q-input
      filled
      v-model="phone"
      label="Номер телефона *"
      lazy-rules
      :rules="[
        val => val && val.length > 6 || 'Please type your phone number',
      ]"
    />
    <q-input
      filled
      v-model="email"
      label="E-mail *"
      :rules="[
       (val, rules) => rules.email(val) || 'Please enter a valid email address'
       ]"
    />

    <q-input
      filled
      v-model="request"
      label="Ваш вопрос *"
      type="textarea"
      lazy-rules
      :rules="[
        val => val && val.length > 2 || 'Please type your request',
      ]"
    />

    <div>
      <q-btn label="Отправить" type="submit" color="black" id="feedback-form" formaction="/.netlify/functions/send-email"/>
      <q-btn label="Очистить" type="reset" color="white" flat class="q-ml-sm" />
    </div>
  </q-form>
  <alert-form-rus :show="showAlert"></alert-form-rus>
</template>

<style>
.q-field__label{
  color: white;
}
.q-field__inner{
  background: #949494;
}
</style>

<script>
import AlertFormRus from "components/AlertForm";
import axios from 'axios';
import { ref } from "vue"

export default {
  name: 'FeedbackForm',
  components: {AlertFormRus},

  setup() {
    const namesur = ref(null)
    const phone = ref(null)
    const email = ref(null)
    const request = ref(null)
    const showAlert = ref(false)

    // Метод, который меняет значение переменной showAlert
    const showAlertSuccess = () => {
      showAlert.value = !showAlert.value;
    };
    return {
      showAlert,
      showAlertSuccess,
      namesur,
      phone,
      email,
      request,
      async onSubmit() {
        try {
          const response = await axios.post('/.netlify/functions/send-email', {
            namesur: namesur.value,
            phone: phone.value,
            email: email.value,
            request: request.value
          });
          console.log(response.data);
          namesur.value = null
          phone.value = null
          email.value = null
          request.value = null
          showAlertSuccess()
          // Отображаем сообщение об успешной отправке формы
        } catch (error) {
          console.error(error);
        }
      },
      onReset() {
        namesur.value = null
        phone.value = null
        email.value = null
        request.value = null
      }
    };
  }
}
</script>
<style scoped>
.q-gutter-md{
  width: 100%;
  padding: 100px;
  align-self: center;
}
@media screen and (max-width: 600px){
  .q-gutter-md{
    padding: 30px;
  }
}
</style>

