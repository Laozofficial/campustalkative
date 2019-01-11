<template lang="html">
<div class="home">
  <sidebar></sidebar>
   <div class="container">
    <div class="uk-align-center uk-card uk-card-body uk-card default">
      <img src="../src/assets/assets/img/user.png" width="100" height="100" class="uk-border-circle uk-align-center">
       <div class="col-md-3 mb-3 uk-align-center">
         <div class="custom-file">
            <input type="file" class="custom-file-input" id="customFile">
            <label class="custom-file-label" for="customFile">Change profile picture</label>
          </div>
       </div>
       <div class="col-md-6 mb-3 uk-align-center">
         <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="person.username">
      </div>
       </div>
      
    </div>
<div class="uk-align-center">
  <div class="col-md-6 mb-3 uk-align-center">
  <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">About</span>
  </div>
  <textarea class="form-control" aria-label="With textarea" row=9>{{ person.about }}</textarea>
</div>
</div>

<button class="btn button uk-align-center">Submit</button>
</div>


  </div>
  
</div>
</template>

<script lang="js">
  export default  {
    name: 'editprofile',
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
          username: "Laozofficial",
          posts: "33",
          followers: "759",
          following: "210",
          alerts: "78",
          about: "lorem ipsum to remui dan jeggt "
        },
         newsfeeds: [
                {
                  school: "FutMinna",
                  title: "This is post one from the array",
                  content: "This is the full post content from the array but you'd have to click on the readmore button to vie the complete post",
                  image: "../src/assets/assets/img/coolemoji.png"  
          },
          {   
                  school: "Ahmedu Bello University",
                  title: "This is post two from the array",
                  content: "This is the full post content from the array but you'd have to click on the readmore button to vie the complete post",
                  image: "../src/assets/assets/img/bg.jpg"  
          },
          {
                  school: "University of lagos",
                  title: "This is post three from the array",
                  content: "This is the full post content from the array but you'd have to click on the readmore button to vie the complete post",
                  image: "../src/assets/assets/img/qpbg.jpg"  
          },
          {
                  school: "Oduduwa University",
                  title: "This is post four from the array",
                  content: "This is the full post content from the array but you'd have to click on the readmore button to vie the complete post",
                  image: "../src/assets/assets/img/dashboard.jpg"  
          },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.input-group-prepend {
  background-color: #ff9100;
}

.input-group-text {
  background-color: #ff9100;
}
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

.about {
  color: lightgrey !important;
  letter-spacing: 5px !important;
  line-height: 19px !important;
  // color: white !important;
  font-weight: lighter;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  // font-size: 20px;
  text-decoration-color: transparent;
}

.button {
  background-color: #ff9100 !important;
}

.t-grid {
  margin-left: 0;
  margin-right: 0;
  border: solid #ff9100 1px;
  // width: 214px;
  padding: 10px;
}

.uk-tile {
  background-color: #ff9100;
}

.t-grid:hover {
  margin-left: 0;
  margin-right: 0;
  border: solid #ff9100 1px;
  // width: 214px;
  padding: 10px;
  background-color: #ff9100;
  color: white !important;
}

.uk-card {
  background-color: transparent;
  padding: 0;
  border-color: #ff9100 !important;
}

.social-btn {
  margin-left: 19px;
  color: white;
}

.is-white {
  color: white;
  font-weight: bolder;
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
  letter-spacing: 5px !important;
  line-height: 19px !important;
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

.uk-badge:hover {
  background-color: white;
  color: #ff9100;
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

.username {
  border: solid #ff9100 1px;
  // background-color: white;
  width: 214px;
  padding: 10px;
}

.username:hover {
  border: solid #ff9100 1px;
  // background-color: white;
  width: 214px;
  padding: 10px;
  color: white !important;
  background-color: #ff9100;
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
  font-size: 1em;
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

// label {
//   color: #ff9100 !important;
// }

.link {
  color: #ff9100 !important;
  font-weight: lighter;
  text-decoration: none;
  text-decoration-color: transparent;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-decoration-color: transparent;
  text-transform: lowercase;
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
