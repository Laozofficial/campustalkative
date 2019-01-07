<template lang="html">
<div class="home">

<navbar></navbar>


<div class="container body">
  <h1 class="header animated fadeIn delay-2s">
    <br>
    <img src="../src/assets/assets/img/CT_Icon.png" class="uk-align-left logo" width="70" height="70">
    posts - watch - share .....
    <br>
 </h1>
  <p class="subtitle animated fadeIn delay-3s">We specialize in the open source technologies and as such campustalkative is aimed at making different people can post , update and delete information posted and it is available on all platforms </p>
  <br>
    <div class="containe">
      <div class="row animated fadeIn delay-4s">
        <div class="col-sm">
          <router-link  class="btn btn-primary uk-align-left" to="/register">Get Started </router-link>
        </div>
        <!-- <div class="col-sm">
          <router-link  class="btn btn-primary" to="/register">Subscribe to Newsletter </router-link>
        </div>
        <div class="col-sm">
         <router-link  class="btn btn-primary" to="/register"></router-link>
        </div> -->
    </div>
</div>
</div>
</div>


</template>

<script lang="js">
  export default  {
    name: 'index',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.home {
  background: url("../src/assets/assets/img/agreement-black-business-943630.jpg")
    no-repeat center fixed;
  background-size: cover;
  background-attachment: fixed;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #343a40;
  background-blend-mode: soft-light;
  min-height: 100vh;
  height: fit-content;
  min-width: 100%;
}

nav {
  background-color: transparent !important;
  padding-top: 3em;
  padding-bottom: 3em;
  padding-right: 2em;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.logo {
  margin-bottom: 0;
  padding-bottom: 0;
}

span,
li {
  color: #ff9100 !important;
  text-transform: uppercase !important;
  padding-right: 1.5em !important;
  font-size: 1.3rem;
  padding-top: 0.6em;
  text-decoration-color: transparent !important;
  text-decoration: none !important;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration-color: transparent;
  // letter-spacing: 7px !important;
  // line-height: 2em !important;
}

li.nav-item:hover {
  color: #ff9100 !important;
  text-transform: uppercase !important;
  padding-right: 1.5em !important;
  font-size: 1.3rem;
  padding-top: 0.6em;
  text-decoration-color: transparent !important;
  text-decoration: none !important;
  font-weight: bold;
  border-bottom: #ff9100 !important;
  // padding-bottom: 1em;
  border-bottom-color: #ff9100 !important;
  // letter-spacing: 15px !important;
  // line-height: 2em !important;
}

button {
  border-color: #ff9100 !important;
}

.navbar-brand {
  padding-right: 2em;
}

router-link:hover {
  // text-decoration-color: transparent !important;
  // text-decoration: none !important;
}

.btn {
  background-color: #ff9100 !important;
  border-color: #ff9100;
  border-radius: 290486px;
  padding-left: 2em;
  padding-right: 2em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.header {
  color: #ff9100 !important;
  font-weight: bold !important;
  text-transform: capitalize !important;
  letter-spacing: 15px !important;
  line-height: 2em !important;
}

.body {
  margin-top: 1.5em;
}

.subtitle {
  letter-spacing: 8px !important;
  line-height: 40px !important;
  color: white !important;
  font-weight: lighter !important;
  font-size: 20px;
}
</style>
