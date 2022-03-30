<template>
  <section class="added-cards">
    <ul v-if="!isLoading" class="card-list">
      <li v-for="card in cards" :key="card.id" class="card-list__item">
        <InfoCard :card="card" :onReload="onReload" :onDelete="deleteCard" :isLoading="card.isLoading" />
      </li>
    </ul>
    <AddButton v-if="!isLoading" class="added-cards__button" :onClick="() => isModalOpen = true" />
    <AppLoader class="added-cards__modal" v-if="isLoading" />
    <teleport to="#vue-modals">
      <transition transition name="fade">
        <ModalBox v-if="isModalOpen" :onClose="() => isModalOpen = false" :onSubmit="addCard" :error="error" />
      </transition>
    </teleport>
  </section>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'
import AddButton from '@/components/AddButton.vue'
import ModalBox from '@/components/ModalBox.vue'
import AppLoader from '@/components/AppLoader.vue'
import api from '@/utils/openWeatherApi'

export default {
  data () {
    return {
      cards: [],
      isLoading: false,
      isModalOpen: false,
      error: null
    }
  },
  components: {
    InfoCard,
    AddButton,
    ModalBox,
    AppLoader
  },
  methods: {
    saveCities (cards) {
      localStorage.setItem('cities', JSON.stringify([...cards].map(({ name }) => name)))
    },
    addCard (city) {
      return api.getWeather({ q: city })
        .then(res => {
          this.cards = [...this.cards, res]
          this.saveCities(this.cards)
          this.isModalOpen = false
        })
        .catch(err => (this.error = err))
    },
    deleteCard (id) {
      this.cards = this.cards.filter(({ id: cardId }) => cardId !== id)
      this.saveCities(this.cards)
    },
    onReload (city) {
      const reloadingCardIndx = this.cards.findIndex(({ name }) => city === name)
      this.cards[reloadingCardIndx].isLoading = true
      return api.getWeather({ q: city })
        .then((res) => {
          this.cards[reloadingCardIndx] = { ...res, isLoading: false }
        })
    }
  },
  mounted () {
    let cities = localStorage.getItem('cities')
    cities = cities && JSON.parse(cities)
    if (cities && cities.length) {
      const promises = cities.map(city => api.getWeather({ q: city }))
      this.isLoading = true
      Promise.all(promises)
        .then(cards => {
          this.cards = cards
          this.isLoading = false
        })
        .catch((err) => console.log(err))
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>

<style>
.added-cards {
  position: relative;
  width: 100%;
  margin: 80px 0 34px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  justify-content: center;
  gap: 40px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1540px;
  list-style: none;
  margin: 0;
  padding: 10px;
}

.card-list__item {
  padding: 0;
  margin: 0 auto;
}

.added-cards__button {
  position: absolute;
  bottom: 0;
  right: -50px;
  transform: translate(100%);
}

.added-cards__modal {
  display: block;
  margin: 0 auto;
}

@media screen and (max-width: 1200px) {
  .added-cards__button {
    position: static;
    display: block;
    transform: translate(0);
    margin: 20px auto 0;
  }
}
</style>
