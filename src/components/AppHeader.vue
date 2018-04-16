<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
      title: '羅針盤'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: azure
}
</style>
