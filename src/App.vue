<template>
  <main class="main app__main">
    <h1 class="app__title">World Weather</h1>
    <CurrentPosition />
    <AddedCards />
  </main>
</template>

<script>
import CurrentPosition from '@/components/CurrentLocation.vue'
import AddedCards from '@/components/AddedCards.vue'

export default {
  name: 'App',
  components: {
    CurrentPosition,
    AddedCards
  }
}
</script>

<style>
#app {
  min-width: 360px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1B1B1B;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
}

.app__main {
  margin: 0 auto;
}

.title {
  margin: 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
}

.subtitle {
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #767676;
}

.app__title {
  margin: 24px 0 32px;
  text-align: center;
  font-weight: 300;
  font-size: 70px;
  line-height: 80px;
}

@media screen and (max-width: 768px) {
  .app__title {
    font-size: 54px;
    line-height: 60px;
  }

  .title {
    font-size: 24px;
    line-height: 28px;
  }

    .subtitle {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
