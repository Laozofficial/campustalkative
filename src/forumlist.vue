<template lang="html">

<div class="home">
  <div class="container">
    <sidebar></sidebar>
    <div class="uk-card uk-card-body uk-card-default  uk-width-1-2@m uk-align-center">
      <ul class="list-group" v-for="forum in forums">
        <router-link to="/forum">
           <li class="list-group-item d-flex justify-content-between align-items-center">
              {{ forum.name }}
              <span class="badge badge-primary badge-pill">{{ forum.online }} online</span>
            </li>
        </router-link>
      </ul>
      <br>
      <button class="btn btn-block" data-toggle="modal" data-target="#exampleModal" type="button"><i class="fa fa-plus"></i> Create Forum</button>
    </div>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Forum</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="">
          <div class="form-group">
              <label for="message-text" class="col-form-label">forum name</label>
              <textarea class="form-control" row="30" id="message-text"></textarea>
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn " data-dismiss="modal">Close</button>
        <button type="button" class="btn ">Create</button>
      </div>
    </div>
  </div>
</div>
  </div>
   <bottomnav></bottomnav>
</div>
</template>

<script lang="js">
  export default  {
    name: 'forumlist',
    props: [],
    mounted() {

    },
    data() {
      return {
        forums: [
          {
            name: "ASUU",
            online: "23",
          },
          {
            name: "schoolsfee",
            online: "25",
          },
          {
            name: "meet-ups",
            online: "65",
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
}

li {
  color: #ff9100;
}

.btn {
  background-color: #ff9100;
  color: white;
  border: 1px soild #ff9100;
}

.btn::selection {
  border: 1px solid #ff9100;
}

.badge {
  background-color: #ff9100;
  color: white;
}
</style>
