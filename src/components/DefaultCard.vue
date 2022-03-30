<template>
  <InfoCard
    :card="card"
    :isCurrentPosition="isCurrentPosition"
    :isLoading="true"
    :onReload="() => undefined"
  />
</template>

<script>
import InfoCard from './InfoCard.vue'
import { DEFAULT_CARD } from '@/utils/constants'

export default {
  data () {
    return {
      card: DEFAULT_CARD
    }
  },
  props: {
    isCurrentPosition: Boolean
  },
  components: {
    InfoCard
  }
}
</script>
