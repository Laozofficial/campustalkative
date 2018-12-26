<template lang="html">
<div class="home">
  <div class="container">
    <h2 class="display-4 uk-text-uppercase uk-text-center uk-text-bold link"><img src="../src/assets/assets/img/CT_Icon.png" width="70" height="70"> Terms And Condition</h2>
    <small class="subtitle uk-text-center uk-align-center">Last updated: 22 December 2018</small>
    <br>
    <p class="subtitle">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Campus Talkative website and the mobile application (the "Service") operated by Cmpus Talkative ("us", "we", or "our").
      Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
  <br><b class="uk-text-bold bold">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</b>

  <br><br>
  <span class="sub-header">Purchases</span>
  <br>
  If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation
  <br><br>
  <span class="sub-header">Subscriptions</span>
  <br>
  Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring payment system
  <br><br>
  <span class="sub-header">content</span>
  <br>
  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the contents that are posted on your account and we will bear no third party consequence for your actions
  <br><br>
  <span class="sub-header">External Links</span>
  <br>
  Our Service may contain links to third-party web sites or services that are not owned or controlled by Campus Talkative. 
  Campus Talkative has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Campus Talkative shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
  <br><br>
  <span class="sub-header">Charges</span>
  <br>
  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
  <br><br>
  <span class="sub-header">Contacting Us</span>
  <br>
  if you have any terms about these terms please contact us
  <router-link to="/contact" class="btn subtitle link"><i class="fa fa-envelope"></i> Contact us</router-link>
</p>
</div>
</div>
</template>

<script lang="js">
  export default  {
    name: 'termspage',
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

.sub-header {
  font-weight: bolder;
  color: #ff9100;
  text-transform: uppercase;
  font-size: 1.2em;
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

.subtitle {
  letter-spacing: 3px !important;
  line-height: 25px !important;
  color: white !important;
  font-weight: lighter;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  // font-size: 20px;
}

.bold {
  font-weight: bolder;
  color: #ff9100;
}
</style>
