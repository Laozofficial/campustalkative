<template lang="html">

<div class="container">
  <br class="uk-hidden@m">
  <br class="uk-hidden@m">
  <br class="uk-hidden@m">
<div class="uk-align-center uk-text-center fixed-bottom  bottom-nav uk-hidden@m">
   <div class="uk-flex uk-flex-center">
      <div class=""><router-link to="" class="uk-icon-button uk-margin-small-right" uk-icon="comments"></router-link></div>
      <div class=""><router-link to="" class="uk-icon-button uk-margin-small-right" uk-icon="social"></router-link></div>
      <div class=""><router-link to="" class="uk-icon-button uk-margin-small-right" uk-icon="hashtag"></router-link></div>
       <div class=""><router-link to="" class="uk-icon-button uk-margin-small-right" uk-icon="question"></router-link></div>
    </div>
  </div>
</div>

</template>

<script lang="js">
  export default  {
    name: 'bottom-nav',
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
.bottom-nav {
  background-color: #343a40;
  padding: 15px;
  margin-bottom: 0;
  margin-top: 40px;
}

.uk-icon-button {
  background-color: #ff9100;
  color: white;
}
</style>
