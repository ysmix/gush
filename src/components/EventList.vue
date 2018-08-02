<template>
  <div class="event-list" id="event-list">
    <h1>EventList</h1>
    <el-input placeholder="Please input" v-model="keyword" @keyup.enter.native="search"></el-input>
    <el-button @click="search">検索</el-button>
    {{keyword}}
    <div>
      <div v-for="event in event_list" :key="event.id" class="event">
        <p>
          <a :href="event.series.url" class="series">{{event.series.title}}</a>
          <img src="static/connpass_logo_3.png" class="provider-img"><img>
        </p>
        <p><a :href="'https://connpass.com/event/' + event.id + '/'" class="event-title">{{event.title}}</a></p>
        <p class="datetime">
          {{event.start}}~{{event.end}}
          </p>
        <p class="address">
          {{event.address}} {{event.place}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'event_list',
  data () {
    return {
      event_list: [],
      keyword: ''
    }
  },

  methods: {
    search () {
      axios.get('http://localhost:8080/event?keyword=' + this.keyword)
        .then((response) => {
          this.event_list = response.data
        })
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
  padding: 3%;
  background-color:white;
  line-height: 70%
}
.event {
  background-color:white;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightpink
}
.event-title {
  color: black;
}
.series {
   color: #fff;
   padding: 1px;
   font-size: small;
   background: #FEA993;
   border-radius: 7px;
   box-shadow: 0 0 0 7px #FEA993;
   line-height: 110%;
}
.provider-img {
  width: 20px;
  padding-left: 20px;
}
.address {
  font-size: small;
  color: darkgray;
}
.datetime {
  font-size: small;
  color: darkgray;
}
</style>
