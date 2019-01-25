<template>
<div>
  <p> {{ greeting }} World!  </p>
</div>
</template>

<script>
export default {
  data () {
    return {
      greeting: 'Hello'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 2em;
  text-align: center;
}  
</style>
