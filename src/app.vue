<template>
  <div>
    <img src="./images/vip.png"/>
    <div class="test">{{message}}</div>
  </div>
</template>
<script>
  import './css/style.css'
  export default {
    data() {
      return {
        message: "Hello World!!!"
      }
    },
  }
</script>