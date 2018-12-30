<template lang="html">
  <div class="home">
    <navbar></navbar>
    <div class="container">
       <h2 class="display-4 uk-text-uppercase uk-text-center uk-text-bold link"><img src="../src/assets/assets/img/CT_Icon.png" width="70" height="70"> Privacy and Copyrights policies</h2>
    <small class="subtitle uk-text-center uk-align-center">Effective date: December 22, 2018</small>
    <br>
    <p class="subtitle">Campus Talkative ("us", "we", or "our") operates the http://campustalkative.com website (the "Service").This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. 
    We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <br><b class="uk-text-bold bold">http://campustalkative.com</b>
    <br><br>
    <span class="sub-header">Information Collection And Use</span><br>
    We collect several different types of information for various purposes to provide and improve our Service to you.
    <br><br>
    <span class="sub-header">Personal Data</span><br>
    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:

    <ul class="">
      <li>Email address</li>
      <li>First name and last name</li>
      <li>Phone number</li>
      <li>Address, State, Province, ZIP/Postal code, City</li>
      <li>Cookies and Usage Data</li>
      <li>Usage Data</li>
    </ul>

    We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

    <br><br>
    <span class="sub-header">Tracking and Cookies Data</span><br>
    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
    Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
    <br><br>
    <span class="sub-header">Examples of Cookies we use:</span>
    <ul>
      <li>Session Cookies. We use Session Cookies to operate our Service.</li>
      <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
       <li>Security Cookies. We use Security Cookies for security purposes.</li>
        <br>
          Campus Talkative uses the collected data for various purposes:
         <br>
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
        <li>To provide customer care and support</li>
        <li>To provide analysis or valuable information so that we can improve the Service</li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
        <li>Transfer Of Data</li>
    </ul>

    <br>
    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
    If you are located outside Nigeria and choose to provide information to us, please note that we transfer the data, including Personal Data, to Nigeria and process it there.
    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
    Campus Talkative will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.

  </p>
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'policy',
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
