<template>
  <button
    :type="type"
    class="button"
    :class="{ button_disabled: isDisabled }"
    :disabled="isDisabled"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    onClick: Function
  }
}
</script>

<style>
.button {
  padding: 0;
  cursor: pointer;
  border: none;
  outline: 0;
  background: inherit;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #9B51E0;
}

.button_disabled {
  color: #C1C1C1;
}
</style>
