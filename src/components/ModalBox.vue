<template>
  <ModalOverlay :onClose="onClose">
    <div class="modal">
      <h2 class="title">Choose a city</h2>
      <p class="subtitle modal__subtitle">
        To find city start typing and pick one from the suggestions
      </p>
      <form class="form modal__form" @submit.prevent="onSubmit(city)">
        <input class="form__input" :class="{ form__input_type_error: v$.$error }" v-model="v$.city.$model" type="text" placeholder="Search city" novalidate>
        <span v-if="v$.$error || error" class="form__error">{{ (v$.$errors.length && v$.$errors[0].$message) || error.message }}</span>
        <div class="form__controllers">
          <AppButton class="form__button" type="sumbit" :isDisabled="v$.$error" text="Add" />
          <AppButton class="form__button" text="Cancel" :onClick="onClose" />
          <AppButton class="form__button" text="Clear" :isDisabled="city === ''" :onClick="() => city = ''" />
        </div>
      </form>
    </div>
  </ModalOverlay>
</template>

<script>
import { minLength, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import ModalOverlay from '@/components/ModalOverlay.vue'
import AppButton from '@/components/AppButton.vue'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      city: ''
    }
  },
  props: {
    onClose: {
      type: Function,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    },
    error: Object
  },
  components: {
    ModalOverlay,
    AppButton
  },
  validations () {
    return {
      city: {
        minLength: minLength(2),
        required
      }
    }
  }
}
</script>

<style>
.modal {
  max-width: 751px;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.25);
  border-radius: 6px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1B1B1B;
}

.modal__subtitle {
  margin: 16px 0 67px;
}

.modal__form {
  display: flex;
  flex-direction: column;
  min-height: 204px;
}

.form__input {
  display: block;
  width: 100%;
  padding-bottom: 16px;
  outline: 0;
  border: 0;
  border-bottom: 1px solid #1B1B1B;
  font-family: inherit;
  font-size: 24px;
  line-height: 24px;
}

.form__input_type_error {
  border-bottom: 1px solid #ff0101;
  opacity: 1;
}

.form__error {
  margin-top: 12px;
  font-size: 16px;
  line-height: 24px;
  color: #ff0101;
}

.form__controllers {
  display: flex;
  flex-direction: row-reverse;
  margin-top: auto;
  width: 100%;
}

.form__button:first-child {
  margin-left: 31px;
}

.form__button:last-child {
  margin-right: auto;
}
</style>
