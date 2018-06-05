<template>
  <div class="event-list">
    <h1>EventList</h1>
    <el-input placeholder="Please input" v-model="keyword"></el-input>
    {{keyword}}
    <ul>
      <li v-for="event in event_list" :key="event.id">
        <a :href="'https://connpass.com/event/' + event.id + '/'">{{event.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'event_list',
  data () {
    return {
      event_list: [],
      keyword: ""
    }
  },
  async created () {
    try {
      let response = await axios.get('http://localhost:8080/event?keyword=Lambda')
      this.event_list = response.data
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.event-list {
  float: left;
  background-color:cornflowerblue;
  width: 80%;
}
</style>
