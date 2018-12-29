<template lang="html">

<div class="footer">
  <div class="container">
  <div class="uk-align-center uk-text-center">
    <h4 class="subtitle link uk-text-capitalize ">&copy; campustalkative 2018 | Designed by <a href="https://www.laozofficial.com.ng" class="text-danger">Laoz Ellison</a></h4>
  </div>
</div>
</div>
</template>

<script lang="js">
  export default  {
    name: 'navfooter',
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
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.subtitle {
  letter-spacing: 6px !important;
  line-height: 40px !important;
  color: #ff9100 !important;
  font-weight: lighter;
  font-size: 12px;
}

.footer {
  background-color: #343a40;
  padding: 13px;
}

a:link,
a:active,
a:visited {
  text-decoration-color: none;
  text-decoration-line: none;
}
</style>
