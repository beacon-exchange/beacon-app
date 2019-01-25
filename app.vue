<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

<template>
  <div>
    <p>Public Layer!</p>
    <Wallet/>
    <Beacon/>
    <POIs/>
    <ITTs/>
    <Settings/>
  </div>
</template>

<script>
import Wallet from './wallet.vue'
import Beacon from './beacon.vue'
import POIs from './pois.vue'
import ITTs from './itts.vue'
import Settings from './settings.vue'
export default {
  components: {
    Wallet, Beacon, POIs, ITTs, Settings
  }
}
</script>
