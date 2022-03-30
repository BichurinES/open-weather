<template>
  <div class="card" :class="{ card_loading: isLoading }">
    <div class="card__content" :class="{ card__content_loading: isLoading }">
      <h2 class="title">{{ `${card.name}${isCurrentPosition ? `, ${country}` : ''}` }}</h2>
      <p class="card__subtitle">{{ isCurrentPosition ? 'Your current location' : country}}</p>
      <table class="table card__table">
        <tr class="table__row">
          <th scope="row" class="table__header">Weather</th>
          <td class="table__data">{{ card.weather[0].main }}</td>
        </tr>
        <tr class="table__row">
          <th scope="row" class="table__header">Temperature</th>
          <td class="table__data">{{ temp }} °C</td>
        </tr>
        <tr class="table__row">
          <th scope="row" class="table__header">Humidity</th>
          <td class="table__data">{{ card.main.humidity }} %</td>
        </tr>
      </table>
      <p class="card__timestamp">{{ timeFromUpdated }}</p>
      <footer
        class="card__controllers"
        :class="{ 'card__controllers_type_current-location': isCurrentPosition }"
      >
        <AppButton v-if="!isCurrentPosition" text="Remove" :isDisabled="isLoading" :onClick="() => onDelete(card.id)" />
        <AppButton text="Reload" :isDisabled="isLoading" :onClick="onReloadHandler" />
      </footer>
    </div>
    <AppLoader class="card__loader" v-if="isLoading" />
  </div>
</template>

<script>
import moment from 'moment'
import AppButton from '@/components/AppButton.vue'
import AppLoader from '@/components/AppLoader.vue'

export default {
  data () {
    return {
      createdAt: moment().format(),
      timer: null,
      timeFromUpdated: moment(this.createdAt).fromNow()
    }
  },
  props: {
    isCurrentPosition: {
      type: Boolean,
      default: false
    },
    card: {
      type: Object || null,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    onReload: {
      type: Function,
      required: true
    },
    onDelete: Function
  },
  components: {
    AppButton,
    AppLoader
  },
  computed: {
    isRussia () {
      return this.card.sys.country === 'RU'
    },
    country () {
      return (this.isCurrentPosition || !this.isRussia)
        ? this.card.sys.country
        : 'Russia'
    },
    temp () {
      return Math.round(this.card.main.temp)
    }
  },
  methods: {
    onReloadHandler () {
      this.onReload(this.card.name)
      this.createdAt = moment().format()
      this.timeFromUpdated = moment(this.createdAt).fromNow()
    }
  },
  mounted () {
    this.timer = setInterval(() => (
      this.timeFromUpdated = moment(this.createdAt).fromNow()
    ), 60 * 1000)
  },
  unmounted () {
    clearTimeout(this.timer)
  }
}
</script>

<style>
.card {
  box-sizing: border-box;
  width: 100%;
  max-width: 824px;
  padding: 24px;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.25);
  border-radius: 6px;
}

.card_loading {
  position: relative;
}

.card_loading::before {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #C1C1C1;
  opacity: .4;
}

.card__content_loading {
  filter: blur(6px);
}

.card__subtitle {
  margin: 15px 0 40px;
  font-size: 18px;
  line-height: 24px;
  color: inherit;
}

.current-location__subtitle {
  margin-bottom: 20px;
}

.card__timestamp {
  margin: 8px 0 32px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #A8A8A8;
}

.table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}

.table__row {
  border-bottom: 1px solid #C4C4C4;
}

.table__header {
  text-align: left;
  font-weight: 400;
}

.table__data {
  text-align: right;
}

.table__header, .table__data {
  padding: 16px 0 11px;
}

.table__row:first-child .table__header, .table__row:first-child .table__data {
  padding-top: 0;
}

.card__controllers {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__controllers_type_current-location {
  justify-content: flex-end;
}

.card__loader {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
