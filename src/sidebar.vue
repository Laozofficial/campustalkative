<template lang="html">

<nav class="navbar">
  <div class="container">
     <div class="uk-offcanvas-content">
      <i class="fa fa-bars" uk-toggle="target: #offcanvas-overlay"><span class="uk-text-uppercase">menu</span></i>
      <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
          <div class="uk-offcanvas-bar">
              <button class="uk-offcanvas-close" type="button" uk-close></button>
              <img src="../src/assets/assets/img/CT_Icon.png" class="uk-align-left" width="40" height="40">
              <br>
              <br>
              <br>
              <router-link to="/profile">
            <img src="../src/assets/assets/img/user.png" width="80" height="80" class="uk-border-circle">
            </router-link>
            <p class="subtitle uk-text-center link">{{ person.username }}</p>
            <br>
            <ul class="uk-list uk-list-bullet">
              <li>
            <router-link to="/feed" class="subtitle uk-text-center link">News Feed</router-link>
              </li>
              <li>
            <router-link to="/forumlist" class="subtitle uk-text-center link">Forum</router-link>
              </li>
              <li>
            <router-link to="/event" class="subtitle uk-text-center link">Events</router-link>
              </li>
              <li>
            <router-link to="/followers" class="subtitle uk-text-center link">Watchers</router-link><span class="uk-badge">{{ person.followers }}</span>
              </li>
              </ul>
            <!-- Settings -->
            <h2 class="display-4 uk-text-left uk-text-uppercase">Settings</h2>
            <ul class="uk-list uk-list-bullet">
                <li class="lists">
                  <router-link to="/editprofile" class="subtitle link">Edit profile</router-link>
                </li>
                <li class="lists">
                  <router-link to="/notification" class="subtitle link">Notification</router-link><span class="uk-badge">{{ person.alerts }}</span>
                </li>
                <li class="lists">
                  <router-link to="/policy" class="subtitle link">Policies</router-link>
                </li>
                <li class="lists">
                  <router-link to="/accountsettings" class="subtitle link">Account Settings</router-link>
                </li>
                <li class="lists">
                  <router-link to="/faQ" class="subtitle link">faQ</router-link>
                </li>
                <li class="lists">
                  <router-link to="/" class="subtitle link">Logout</router-link>
                </li>
            </ul>
          </div>
      </div>
    </div>
      <router-link to="/"><img src="../src/assets/assets/img/CTLogo_All white.png" class="uk-align-left nav-image" width="180" height="180"></router-link>
    </div>
</nav>

</template>

<script lang="js">
  export default  {
    name: 'sidebar',
    props: [],
    mounted() {

    },
    data() {
      return {
           person: {
        id: 23445,
        firstname: "Laoz",
        lastname: "Ellison",
        email: 'ellison@yahoo.com',
        image: "../src/assets/assets/img/user.png",
        username: "@Laozofficial",
        followers: "759",
        alerts: "78"
        },
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
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: #343a40;
  background-blend-mode: soft-light;
  min-height: 100vh;
  height: fit-content;
  min-width: 100%;
  margin: 0;
  font-family: "Lato", sans-serif;
}

.uk-card {
  background-color: transparent;
  padding: 0;
  border-color: #ff9100 !important;
}

.title {
  letter-spacing: 3px !important;
  line-height: 17px !important;
  color: white !important;
  font-weight: lighter;
  color: #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.subtitle {
  letter-spacing: 3px !important;
  line-height: 15px !important;
  color: white !important;
  font-weight: lighter;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  // font-size: 20px;
  text-decoration-color: transparent;
}

.uk-badge {
  background-color: #ff9100;
  color: white;
}

.uk-offcanvas-bar {
  background-image: url("../src/assets/assets/img/qpbg.jpg");
  background-blend-mode: darken;
}

span {
  padding-left: 9px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.uk-offcanvas-close {
  color: #ff9100;
}

.uk-offcanvas-close:hover {
  color: black;
}

.nav-image {
  padding-top: 20px;
}

// .uk-overlay {
//   background-color: #db4437;
//   opacity: 3;
//   padding: 13px;
// }

.btn {
  background-color: #00c853 !important;
  border-color: #00c853;
  border-radius: 290486px;
  color: white;
  padding-left: 2em;
  padding-right: 2em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.danger {
  background-color: #db4437 !important;
  border-color: #db4437;
  border-radius: 290486px;
  padding-left: 2em;
  padding-right: 2em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
label {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.content {
  border-color: #ff9100;
}

h5 {
  color: #ff9100;
}

.fa-link {
  color: #00c853;
  border-radius: 50%;
  text-align: center;
  // background-color: #00c853;
}

.display-4 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #ff9100;
  font-size: 1.5em;
}

.fa-bars {
  font-size: 1em;
  color: white;
}

.modal-content {
  background-color: #343a40;
  background-image: url("../src/assets/assets/img/agreement-black-business-943630.jpg");
  background-blend-mode: darken;
}

nav {
  background-color: transparent;
  opacity: 100;
  margin-bottom: 12px;
}

input[type="text"]:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
}

textarea:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
}

label {
  color: #ff9100 !important;
}

.link {
  color: #ff9100 !important;
  font-weight: lighter;
  text-decoration: none;
  text-decoration-color: transparent;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration-color: transparent;
}

#presentation {
  width: 480px;
  height: 120px;
  padding: 20px;
  margin: auto;
  background: #fff;
  margin-top: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s;
  border-radius: 3px;
}

#presentation:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: all 0.3s;
  transform: translateZ(10px);
}

#floating-button {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: #ff9100;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 5px #666;
}

.plus {
  color: white;
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 55px;
  font-size: 38px;
  font-family: "Roboto";
  font-weight: 300;
  animation: plus-out 0.3s;
  transition: all 0.3s;
}

#container-floating {
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 30px;
  right: 30px;
  z-index: 50px;
}

#container-floating:hover {
  height: 400px;
  width: 90px;
  padding: 30px;
}

#container-floating:hover .plus {
  animation: plus-in 0.15s linear;
  animation-fill-mode: forwards;
}

.edit {
  position: absolute;
  top: 0;
  display: block;
  bottom: 0;
  left: 0;
  display: block;
  right: 0;
  padding: 0;
  opacity: 0;
  margin: auto;
  line-height: 65px;
  transform: rotateZ(-70deg);
  transition: all 0.3s;
  animation: edit-out 0.3s;
}

#container-floating:hover .edit {
  animation: edit-in 0.2s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
}

@keyframes edit-in {
  from {
    opacity: 0;
    transform: rotateZ(-70deg);
  }
  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}

@keyframes edit-out {
  from {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  to {
    opacity: 0;
    transform: rotateZ(-70deg);
  }
}

@keyframes plus-in {
  from {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  to {
    opacity: 0;
    transform: rotateZ(180deg);
  }
}

@keyframes plus-out {
  from {
    opacity: 0;
    transform: rotateZ(180deg);
  }
  to {
    opacity: 1;
    transform: rotateZ(0deg);
  }
}

.nds {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: fixed;
  z-index: 300;
  transform: scale(0);
  cursor: pointer;
}

.nd1 {
  background: #d3a411;
  right: 40px;
  bottom: 120px;
  animation-delay: 0.2s;
  animation: bounce-out-nds 0.3s linear;
  animation-fill-mode: forwards;
}

.nd3 {
  background: #3c80f6;
  right: 40px;
  bottom: 180px;
  animation-delay: 0.15s;
  animation: bounce-out-nds 0.15s linear;
  animation-fill-mode: forwards;
}

.nd4 {
  background: #ba68c8;
  right: 40px;
  bottom: 240px;
  animation-delay: 0.1s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
}

.nd5 {
  background-image: url("https://lh3.googleusercontent.com/-X-aQXHatDQY/Uy86XLOyEdI/AAAAAAAAAF0/TBEZvkCnLVE/w140-h140-p/fb3a11ae-1fb4-4c31-b2b9-bf0cfa835c27");
  background-size: 100%;
  right: 40px;
  bottom: 300px;
  animation-delay: 0.08s;
  animation: bounce-out-nds 0.1s linear;
  animation-fill-mode: forwards;
}

@keyframes bounce-nds {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce-out-nds {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
}

#container-floating:hover .nds {
  animation: bounce-nds 0.1s linear;
  animation-fill-mode: forwards;
}

#container-floating:hover .nd3 {
  animation-delay: 0.08s;
}
#container-floating:hover .nd4 {
  animation-delay: 0.15s;
}
#container-floating:hover .nd5 {
  animation-delay: 0.2s;
}

.letter {
  font-size: 23px;
  font-family: "Roboto";
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  line-height: 40px;
}

.reminder {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  line-height: 40px;
}

.profile {
  border-radius: 50%;
  width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20px;
}
</style>
