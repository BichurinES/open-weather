<template>
  <section class="current-location">
    <p class="subtitle current-location__subtitle">Watch weather in your current location</p>
    <InfoCard
      v-if="currentPosition"
      :isCurrentPosition="true"
      :isLoading="isLoading"
      :card="currentPosition"
      :onReload="updateCurrentPositionWeather"
    />
    <DefaultCard v-else-if="isLoading" :isCurrentPosition="true" />
    <p class="current-location__error" v-else-if="error">{{ error.message }}</p>
  </section>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import DefaultCard from '@/components/DefaultCard.vue'
import api from '@/utils/openWeatherApi'

export default {
  data () {
    return {
      currentPosition: null,
      isLoading: false,
      error: null
    }
  },
  name: 'App',
  components: {
    InfoCard,
    DefaultCard
  },
  methods: {
    updateCurrentPositionWeather () {
      this.isLoading = true
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          api.getWeather({ lat: coords.latitude, lon: coords.longitude })
            .then(res => (this.currentPosition = res))
            .catch(err => (this.error = err))
            .finally(() => (this.isLoading = false))
        },
        (err) => {
          this.error = err
          this.isLoading = false
        }
      )
    }
  },
  mounted () {
    this.updateCurrentPositionWeather()
  }
}
</script>

<style>
.current-location {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.current-location__subtitle {
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
}

.current-location__error {
  font-size: 18px;
  line-height: 24px;
  color: #DC143C;
}
</style>
