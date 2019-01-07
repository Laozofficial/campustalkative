<template lang="html">
<div class="home">
  <div class="container">
    <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-align-center">
       <img src="../src/assets/assets/img/CT_Icon.png" class="uk-align-center logo" width="70" height="70">
    <form action="#">
  <div class="form-group">
    <label for="email"><i class="fa fa-envelope"></i> Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email">
    <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password"><i class="fa fa-lock"></i> Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </div>
  <router-link to="/feed" id="submit"><button  type="submit" class="btn btn-primary btn-block">Submit <div id="spinner" uk-spinner style="display:none"></div></button></router-link>
    <small class="form-text uk-align-right">no account? <router-link class="link" to="/Register">Register</router-link></small>
</form>
<small>
  <router-link class="uk-text-left uk-align-left link" to="/forgetpassword">Forget password</router-link>
  </small>
</div>
  </div>
</div>
</template>

<script lang="js">
  export default  {
    name: 'login',
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
.link {
  color: #ff9100 !important;
  font-weight: bolder;
  text-decoration: none;
  text-decoration-color: transparent;
}

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

.OR {
  color: gray;
  font-weight: bolder;
}

.container {
  padding-top: 5%;
}

.uk-card {
  background-color: transparent;
}

label {
  color: #ff9100;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

small {
  color: white;
  font-weight: lighter !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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

.btns {
  background-color: #ff9100 !important;
  border-color: #ff9100;
  // border-radius: 290486px;
  // padding-left: 2em;
  // padding-right: 2em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

input[type="email"]:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

input[type="password"]:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

input[type="text"]:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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

.fa-facebook {
  color: white;
  font-size: 3em;
}

.fa-twitter {
  color: cornflowerblue;
}

.fa-google-plus {
  color: crimson;
}

.button {
  background-color: dodgerblue;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
}

.subtitle {
  letter-spacing: 8px !important;
  line-height: 40px !important;
  color: white !important;
  font-weight: lighter;
  // font-size: 20px;
}
</style>
