<template lang="html">
<div class="home">
  <navbar></navbar>
<div class="container">
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
            <h1 class="uk-text-uppercase uk-text-center link subtitle"><i class="fa fa-envelope"></i> Contact Us</h1><br>
              <form>
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name">
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Last name">
                  </div>
                </div>
                  <div class="uk-margin">
                    <textarea class="uk-textarea" rows="5" placeholder="Type message"></textarea>
                </div>
                <router-link to="/feed"><button  type="submit" class="btn btn-primary btn-block">Submit</button></router-link>
              </form>
          </div>
      </div>
      <div>
          <div class="uk-card uk-card-default uk-card-body">
            <div class="uk-align-left contactcard">
              <h5 class="subtitle link uk-text-uppercase uk-text-left"><i class="fa fa-map"></i> Address: <span  class="subtitle link uk-text-capitalize">{{ location.address }}</span></h5>
                <h5 class="subtitle link uk-text-uppercase uk-text-left"><i class="fa fa-envelope-o"></i> Email: <span  class="subtitle link uk-text-capitalize">{{ location.email }}</span></h5>
                  <h5 class="subtitle link uk-text-uppercase uk-text-left"><i class="fa fa-phone"></i> Phone: <span  class="subtitle link uk-text-capitalize">{{ location.phone }} </span></h5>
                  <!-- <footer></footer> -->
            </div>
          </div>
      </div>
  </div>
</div>
<navfooter></navfooter>
</div>
</template>

<script lang="js">
  export default  {
    name: 'contact',
    props: [],
    mounted() {

    },
    data() {
      return {
        location: {
        email: "Campustaltative@admin.com",
        phone: "09098311785",
        address: "21 Asokoro Abuja Nigeria"
        }
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
  margin-top: 5%;
}

.link {
  color: #ff9100 !important;
  font-weight: bolder;
  text-decoration: none;
  text-decoration-color: transparent;
  padding-top: 7px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
small {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding-top: 0;
  padding-bottom: 0;
}

.subtitle {
  letter-spacing: 3px !important;
  line-height: 25px !important;
  color: #ff9100 !important;
  font-weight: lighter;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  // font-size: 20px;
}

.contactcard {
  margin-top: 24%;
}

input[type="email"]:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
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

textarea:focus {
  box-shadow: 0 0 5px #ff9100;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

input[type="text"]:focus {
  box-shadow: 0 0 5px #ff9100;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  padding: 3px 3px 3px 3px;
  border: 1px solid #ff9100;
}
</style>
