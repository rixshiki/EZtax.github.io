<template>

  <div id="app">
    <router-view/>
    <div id="nav">
      
      <v-toolbar app class="indigo darken-4 white--text">
      <v-toolbar-side-icon @click="drawer=!drawer">
          
      </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span><router-link to="/"><a href="" class="white--text">E Z - T a x</a></router-link></span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/register">
      <v-btn
        flat
        href=""
        target="_blank"
        v-on:click="register()"
      >
        <span class="mr-2 white--text">สร้างบัญชี</span>
      </v-btn>
      </router-link>

      <v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2 white--text">เข้าสู่ระบบ</span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
        <v-list>
            <v-list-tile v-for="list in lists" :key="list.text" router-link :to="list.route">
                <v-list-tile-action>
                    <v-icon>{{list.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-content>
                    {{list.text}}
                </v-list-content>
            </v-list-tile>
        </v-list>
        
    </v-navigation-drawer>

    <!--  <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer:true,
      lists:[
        {icon:"attach_money",text:"ความรู้เรื่องภาษี",route:"/knownledge"},
        {icon:"turned_in",text:"คำแนะนำเกี่ยวกับภาษี",route:"/advice"},
        {icon:"exposure",text:"คำนวณส่วนลดหย่อนภาษี",route:"/calDiscount"},
        {icon:"money",text:"วิธีลดหย่อนภาษี",route:"/advDiscountTax"},
        {icon:"local_post_office",text:"ติดต่อเรา",route:"/contact"}
      ]
    }
  },
  methods: {
    index(){
      return this.$router.push({name: 'index'})
    },
    register(){
      return this.$router.push({name: 'register'})
    }
  },
}
</script>
