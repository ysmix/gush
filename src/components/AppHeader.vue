<template>
  <div class="header" id="header">
    <h1>{{ header_title }}</h1>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'header_title',
  data () {
    return {
      header_title: '羅針盤'
    }
  }
}
</script>

<style scoped>
.header {
  background-color: LavenderBlush
}
</style>
