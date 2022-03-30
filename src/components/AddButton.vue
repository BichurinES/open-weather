<template>
  <button class="add-button" @click="onClick"></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style>
.add-button {
  width: 56px;
  height: 56px;
  background: center no-repeat url("@/assets/images/add-button.svg"), #9B51E0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14),
    0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  outline: 0;
  border: none;
  cursor: pointer;
}
</style>
