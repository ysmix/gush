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
          <a :href="google_calendar_add_event_url(event.title, event.place, event.start, event.end)" class="add_calendar">カレンダー登録</a>
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
import moment from 'moment'
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
    },
    google_calendar_add_event_url (title, place, start, end) {
      let dates = this.format_google_calendar(start) + '/' + this.format_google_calendar(end)
      return 'http://www.google.com/calendar/event' +
        '?action=TEMPLATE' +
        '&text=' + encodeURIComponent(title) +
        '&details=details' +
        '&location=' + encodeURIComponent(place) +
        '&dates=' + dates
    },
    format_google_calendar (date) {
      return moment(date, 'YYYY/MM/DD HH:mm').utc().format('YYYYMMDDTHHmmss') + 'Z'
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
