<template lang="html">

<div class="home">
  <sidebar></sidebar>
  
  <div class="container">
    <img src="../src/assets/assets/img/user.png" width="150" height="150" class="uk-align-center uk-border-circle uk-box-shadow-xlarge">

    <div class="uk-card uk-card-default uk-card-body">
      <div class="uk-child-width-1-3@s" uk-grid>
      <div>
        <div uk-grid>
            <div class="uk-width-auto@m">
                <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                    <li class="tab"><a class="tab" href="#">Profile</a></li>
                    <li class="tab"><a class="tab" href="#">School</a></li>
                    <li class="tab"><a class="tab" href="#">Others</a></li>
                </ul>
            </div>
            <div class="uk-width-expand@m">
                <ul id="component-tab-left" class="uk-switcher">
                    <li>
                      <div>
                        <form>
                          <fieldset class="uk-fieldset">
                            <div class="uk-margin">
                              <label class="uk-form-label" for="username"><i class="fa fa-user"></i> Change username</label>
                                <input class="uk-input uk-form-small" id="username" type="text" placeholder="username" v-model="person.username">
                            </div>
                            <div class="uk-margin">
                              <label class="uk-form-label" for="email-change"><i class="fa fa-envelope"></i> Change email</label>
                                <input class="uk-input uk-form-small" id="email-change" type="email" placeholder="email" v-model="person.email">
                            </div>
                            <div class="uk-margin">
                              <label class="uk-form-label" for="pass-change"><i class="fa fa-lock"></i> Change password</label>
                                <input class="uk-input uk-form-small" id="pass-change" type="password" placeholder="password" v-model="person.password">
                            </div>
                            <div class="uk-margin">
                              <label class="uk-form-label" for="privacy"><i class="fa fa-users"></i> Account Privacy</label>
                          <select class="uk-select" id="privacy">
                              <option>Public</option>
                              <option>Private</option>
                          </select>
                      </div>
                            <input type="submit" class="btn uk-align-center btn-block">
                          </fieldset>
                        </form>
                      </div>
                    </li>
                    <li>
                      <div>
                        <form>
                          <fieldset class="uk-fieldset">
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-select"><i class="fa fa-home"></i> Select School</label>
                                <div class="uk-form-controls">
                                    <select class="uk-select uk-form-small" id="form-stacked-select">
                                        <option>Oduduwa University</option>
                                        <option>Federal university of technology</option>
                                        <option>Add more schools here</option>
                                    </select>
                                </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </li>
                    <li>
                      <div>
                        <form>
                          <fieldset class="uk-fieldset">
                            <p class="subtitle uk-align-center uk-text-center">connect your social media</p>
                            <div class="uk-align-center uk-text-center">
                            <a href="" class="uk-icon-button twitter uk-margin-small-right" uk-icon="twitter"></a>
                            <a href="" class="uk-icon-button facebook uk-margin-small-right" uk-icon="facebook"></a>
                            <a href="" class="uk-icon-button instagram uk-margin-small-right" uk-icon="instagram"></a>
                            <a href="" class="uk-icon-button google" uk-icon="google-plus"></a>
                            </div>
                            <br>
                        
                          </fieldset>
                        </form>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>


    </div>
  </div>
  <br>
<br>
<br>

  <bottomnav></bottomnav>
</div>
</template>

<script lang="js">
  export default  {
    name: 'accountsettings',
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
          posts: "33",
          followers: "759",
          following: "210",
          alerts: "78",
          password: "L!M123456"
        },
        schools: [
          {
            university: "Futminna",
            university: "Unilag",
            university: "Uniport",
            university: "Lasu",
            university: "Noun",
            university: "Oau"
          }
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

.subtitle {
  letter-spacing: 1px !important;
  line-height: 15px !important;
  color: #343a40 !important;
  font-weight: bolder;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  // font-size: 20px;
}

.facebook {
  background-color: dodgerblue;
  color: white;
}

.twitter {
  background-color: cornflowerblue;
  color: white;
}

.google {
  background-color: red;
  color: white;
}

.instagram {
  background-color: brown;
  color: white;
}

.fa {
  color: #ff9100;
}

label {
  font-weight: bold;
  color: #343a40;
}

.btn {
  background-color: #ff9100 !important;
  border-color: #ff9100;
  border-radius: 290486px;
  color: white;
  padding-left: 2em;
  padding-right: 2em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.tab {
  color: #ff9100;
  font-weight: bolder;
  font-size: 0.8em;
}

.tab:active {
  color: white;
  background-color: #ff9100;
}

.tab:hover {
  background-color: #ff9100;
  color: white;
}

.tab::selection {
  color: #ff9100;
}

.uk-border-circle {
  border: 3px solid #ff9100;
  padding: 5px;
}
</style>
