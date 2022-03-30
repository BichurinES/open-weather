<template>
  <div
    class="modal-overlay"
    @mousedown.self="onClose"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    onClose: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleEscPress (e) {
      if (e.key === 'Escape') {
        this.onClose()
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.handleEscPress)
  },
  unmounted () {
    document.removeEventListener('keydown', this.handleEscPress)
  }
}
</script>

<style>
  .modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(11, 11, 11, 0.5);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
