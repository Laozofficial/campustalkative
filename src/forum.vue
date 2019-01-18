<template lang="html">
<div class="home">
  <sidebar></sidebar>
  <div class="uk-tile uk-padding-small">
       <p class="uk-h4 uk-text-center uk-align-center text-light">Welcome to the <span class="uk-text-uppercase">"{{ forum.name }}"</span> Forum  </p>
  </div>
  <div class="container">
    <br>
    <div class="uk-align-left">
      <h4 class="link subtitle username"><i class="fa fa-user"></i> online: {{ forum.online }}</h4>
    </div>
    <br>
    <br><br>
  <div class="uk-align-center uk-card uk-card-body uk-card-default" v-for="chat in chats">
    <img class="uk-border-circle uk-align-left uk-margin-remove-adjacent  " src="../src/assets/assets/img/user.png" width="40 " height="90 " alt="forum image " caption="forum image ">
    <p class="uk-text-small link">{{ chat.username }} <span style="color:darkgray ">-</span><time class="uk-text-small text-light" style="color:darkgrey;font-size:0.8em ">{{ chat.time }}</time></p>
    <p class="uk-text-small text-light subtitle" style="margin-left: 50px;">{{ chat.comment }}</p>
    
  </div>
  




   <div class="container">
	<div class="row">
		<!-- Form -->
    <div class="nb-form">
    <p class="title">Send a message</p>
    <img src="../src/assets/assets/img/user.png" width="80" height="80" class="uk-border-circle user-icon">
    <p class="message">what is on your mind ?</p>

    <form>
      <input type="text" name="cpphone" placeholder="Subject:" required v-model="username">
      <textarea name="cpmessage" placeholder="Message:" required v-model="comment"></textarea>
      <input type="file">
      <input type="submit" value="Send message" v-on:click="submit()">
      <input type="email" name="cpemail" placeholder="Email:" style="visibility: hidden">
    </form>
  </div>
	</div>
</div>
  </div>
   <bottomnav></bottomnav>
</div>

</template>

<script lang="js">
  export default  {
    name: 'forum',
    props: [],
    mounted() {

    },
    data() {
      return {
          forum: {
            name: "ASUU",
            online: "23"
          },
           username: '',
           time: '5minutes',
           comment: '',
          chats: [
            {
              username: "Emmanuel",
              time: "15minutes ago",
              comment: "I think i love this websites"
            },
             {
              username: "Laoz Ellison",
              time: "12minutes ago",
              comment: "yeah the websites is great"
            },
             {
              username: "Ojay",
              time: "8minutes ago",
              comment: "wassup guys"
            },
          ],
      }
    },
    methods: {
        submit: function(){
            this.chats.push(this.username && this.comment && this.time);
        }

      
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.uk-form-icon {
  color: green;
  // background-color: green;
}

.fa-user {
  color: #69f0ae;
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

.uk-tile {
  background-color: #ff9100;
}

form {
  padding-left: 30%;
}

.uk-card {
  background-color: transparent;
  padding: 0;
  border-color: #ff9100 !important;
  padding-left: 5px;
}

textarea {
  border-radius: 20px;
  width: 50%;
  padding-right: 0%;
}

.fa-send {
  padding-left: 0;
  margin-left: 0;
}

.username {
  border: solid #ff9100 4px;
  // background-color: white;
  width: 214px;
  padding: 10px;
}

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

#sticky {
  width: 100%;
  height: 44px;
  padding-top: 20px;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  position: fixed; /*Here's what sticks it*/
  bottom: 0; /*to the bottom of the window*/
  left: 0; /*and to the left of the window.*/
}

//delete
/*------------- Form ---------------*/

.nb-form {
  position: fixed;
  z-index: 9999;
  width: 300px;
  background: #fff;
  right: 20px;
  bottom: -367px;
  transition: all 0.8s cubic-bezier(0.22, 0.67, 0.43, 1.22) 0.2s;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
}
.nb-form:hover {
  bottom: 0px;
}

/*-- User Icon --*/

.nb-form .user-icon {
  position: absolute;
  top: -49px;
  right: 12px;
  display: block;
  width: 58px;
  margin: 20px auto 15px;
  border-radius: 100%;
}

/*-- Title --*/

.nb-form .title {
  background: #ff9100;
  font-size: 16px !important;
  padding: 20px 18px !important;
  color: #fff !important;
  border-radius: 10px 10px 0 0;
}

/*-- Text --*/

.nb-form p {
  font-size: 13px;
  margin: 0;
  padding: 15px;
  color: #666;
}

.nb-form p.message {
  margin-left: 7px;
}

/*-- Form Elements --*/

.nb-form form {
  padding: 0 15px 15px 15px;
}

.nb-form input,
.nb-form textarea {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 12px;
  width: 254px;
  max-width: 254px;
  margin-bottom: 10px;
  margin-left: 7px;
  padding: 6px;
  border: none;
  border-radius: 4px;
  color: #999;
  border-bottom: 1px solid #f0f0f0;
}

.nb-form input:focus,
.nb-form textarea:focus {
  outline: none;
  box-shadow: none;
}

.nb-form input[type="submit"] {
  display: block;
  width: 120px;
  margin: 0 auto;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s ease;
  color: #fff !important;
  border: none;
}

.nb-form input[type="submit"]:hover {
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 7px 0 rgba(0, 0, 0, 0.02),
    0 3px 1px -1px rgba(0, 0, 0, 0.1);
}

.nb-form textarea {
  min-height: 110px;
}

.nb-form ::-webkit-input-placeholder {
  color: #ccb0b0;
}

.nb-form ::-moz-placeholder {
  color: #ccb0b0;
}

.nb-form :-ms-input-placeholder {
  color: #ccb0b0;
}

.nb-form :-moz-placeholder {
  color: #ccb0b0;
}

.nb-form input[type="submit"] {
  background: #ff9100;
}

@media screen and (max-width: 676px) {
  .nb-form:hover .user-icon {
    display: none;
  }

  .nb-form .message {
    display: none;
  }

  .nb-form form {
    padding-top: 15px;
  }
  .nb-form {
    right: 50%;
    bottom: -320px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
