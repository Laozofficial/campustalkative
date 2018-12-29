<template lang="html">

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
  <router-link to="/" class="navbar-brand animated slideInLeft dely-2s">
    <img src="../src/assets/assets/img/campusLogoWhite.png" width="300" height="300">
  </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li> -->
      <li class="nav-item">
        <router-link to="/login"><span>Login</span></router-link>
      </li>
       <li class="nav-item">
        <router-link to="/about"><span>About</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/faq"><span>FaQ</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/termspage"><span>Terms</span></router-link>
      </li>
    </ul>
  </div>   
  </div>
</nav>

</template>

<script lang="js">
  export default  {
    name: 'navbar',
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
  font-weight: lighter;
  font-size: 20px;
}
</style>
