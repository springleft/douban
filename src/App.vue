<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <Download></Download>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar'
import Download from './components/Download'
export default {
  name: 'app',
  components:{HeaderBar,Download}
}
</script>

<style>
body{font-size: 12px;color: #111;}
ul, li, a, h2{
  margin: 0;
  padding: 0;
 font-weight: normal;
}
html{
  font-size: 62.5%;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
}


</style>
