<style lang="scss" scoped>
:root { --stghgt: 3em; }
* {  box-sizing: border-box; }
body, p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}
#publayer {
  margin-top: 3em;
  padding: 1em 1ch;
}
#wallet, #beacon, #pois, #itts, #settings {
  border: 1px solid red;
  padding: 1em 1ch;
  /* margin: 1em 1ch; */
  position: fixed;
}
#wallet, #beacon, #pois, #itts {
  height: 100vh;
  display: inline-block;
  top: var(--stghgt);
}
#wallet, #beacon {
  left: 0;
}
#pois, #itts {
  right: 0;
}
#wallet {
  width: 20ch;
}
#beacon {
  width: 30ch;
}
#pois {
  width: 25ch;
}
#itts {
  width: 35ch;
}
#settings {
  height: 3em;
  width: 100%;
  top: 0;
  left: 0;
}
</style>

<template>
  <div>
    <Wallet id="wallet"/>
    <Beacon id="beacon"/>
    <POIs id="pois"/>
    <ITTs id="itts"/>
    <Settings id="settings"/>
    <div id="publayer">
      <p>Public Layer!</p>
    </div>
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
