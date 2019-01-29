<style lang="scss" scoped>
#FAKEROOT { --settingsoffset: 3em; }
* { box-sizing: border-box; }
body, p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}
#publayer, #wallet, #beacon, #pois, #itts, #settings {
  position: fixed;
  padding: 1em 2ch;
}
#publayer {
  bottom: var(--settingsoffset); /* ontoggle changes to bottom */
  left: 0;
  top: 0; /* ontoggle changes to top */
  right: 0;
  width: 100%;
  border: 1px solid blue;
}
#settings {
  bottom: 0; /* ontoggle changes to bottom */
  left: 0;
  right: 0;
  width: 100%;
  height: var(--settingsoffset);
  border: 1px solid green;
}
#wallet, #beacon, #pois, #itts {
  top: var(--settingsoffset); /* ontoggle changes to top: var(--settingsoffset) */
  bottom: calc(2 * var(--settingsoffset)); /* ontoggle changes to bottom: var(--settingsoffset); */
  display: inline-block;
  border: 1px solid red;
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
</style>

<template>
  <div id="FAKEROOT">
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
  },
  beforeMount() {
    var link_id = '__FONTAWESOME_LINK__';
    if (!document.getElementById(link_id)) {
      var head  = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = link_id;
      link.href = 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';
      link.integrity = 'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/';
      link.crossOrigin = 'anonymous';
      head.appendChild(link);
    }
  }
}
</script>
