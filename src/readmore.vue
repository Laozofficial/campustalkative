<template lang="html">

<div class="home">
  <div class="container">
    <sidebar></sidebar>
    <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m hover">
    <div class="uk-card-badge uk-label uk-text-lowercase">{{ school }}</div><br>
    <h3 class="uk-card-title uk-text-uppercase uk-text-center uk-text-bold">{{ Title }}</h3>
       <img src="../src/assets/assets/img/agreement-black-business-943630.jpg" alt="" class="uk-align-center hover">
      <div class="uk-text-center uk-align-center">
        <p class="uk-text-center link">share this post</p>
        <a href="" class="uk-icon-button facebook uk-margin-small-right" uk-icon="twitter"></a>
        <a href="" class="uk-icon-button facebook uk-margin-small-right" uk-icon="facebook"></a>
        <a href="" class="uk-icon-button gplus" uk-icon="google-plus"></a>
      </div>
    <p class="uk-text-left">
      {{ content }} 
      <span class="">
        <br>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m hover uk-align-center">
          <div class="uk-card-badge uk-label uk-text-lowercase">{{ relatedContent.school }}</div>
            <h6 class="uk-card-title">{{ relatedContent.title }}</h6>
            <p>{{ relatedContent.content }}</p>
        </div>
        <br>    
      </span>
      <p class="uk-text-left">{{ content }}</p>
    </p>
    
</div>
  </div>
  <br>
<navfooter></navfooter>
</div>
</template>

<script lang="js">
  export default  {
    name: 'readmore',
    props: [],
    mounted() {

    },
    data() {
      return {
          school: "futminna",
          Title: "The official launch of the campusTalkative websites",
          content: "Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a.",
          Time: "22/10/2018",
          relatedContent: {
            school: "Unilag",
            title: "This is a related content that is showing up based on a recommender algorithm",
            content: "Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
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

.uk-card-badge {
  background-color: #ff9100;
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

.facebook {
  background-color: dodgerblue;
  color: white !important;
}

.twitter {
  background-color: cornflowerblue;
  color: white !important;
}

.gplus {
  background-color: red;
  color: white !important;
}

.hover {
  background-color: #fff;
  box-shadow: 0 14px 25px rgba(0, 0, 0, 0.16);
}

img {
  width: 730px;
  height: 300px;
  border: solid #ff9100;
  padding: 7px;
}
</style>
