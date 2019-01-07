<template lang="html">
<div class="home">
  <sidebar></sidebar>
  <div class="uk-tile uk-padding-small">
       <p class="uk-h4 uk-text-center uk-align-center text-light">Welcome to the <span class="uk-text-uppercase">"{{ forum.name }}"</span> Forum  </p>
  </div>
  <div class="container">
  


   <div class="container">
	<div class="row">
		<!-- Form -->
    <div class="nb-form">
    <p class="title">Send a message</p>
    <img src="../src/assets/assets/img/user.png" width="80" height="80" class="uk-border-circle user-icon">
    <p class="message">what is on your mind ?</p>

    <form>
      <input type="text" name="cpname" placeholder="Name:" required>
      <input type="email" name="cpemail" placeholder="Email:" required>
      <input type="tel" name="cpphone" placeholder="Phone:" required>
      <textarea name="cpmessage" placeholder="Message:" required></textarea>
      <input type="submit" value="Send message">
    </form>
  </div>
	</div>
</div>
  </div>
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
.uk-form-icon {
  color: green;
  // background-color: green;
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

textarea {
  border-radius: 20px;
  width: 50%;
  padding-right: 0%;
}

.fa-send {
  padding-left: 0;
  margin-left: 0;
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
