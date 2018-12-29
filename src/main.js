import Vue from 'vue'
import App from './App.vue'
import NavFooter from './navfooter.vue'
import Faq from './faq.vue'
import About from './about.vue'
import Login from './login.vue'
import Navbar from './navbar.vue'
import Register from './register.vue'
import NewsFeed from './newsfeed.vue'
import Index from './index.vue'
import Unknown from './unknown.vue'
import TermsPage from './termspage.vue'
import ForgetPassword from './forgetpassword.vue'
import Forum from './forum.vue'
import Followers from './followers.vue'
import AccountSettings from './accountsettings.vue'
import EditProfile from './editprofile.vue'
import Event from './event.vue'
import Sidebar from './sidebar.vue'
import Logout from './logout.vue'
import Notification from './notification.vue'
import Contact from './contact.vue'
import ReadMore from './readmore.vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import Axios from 'axios';

Vue.component('login', Login);
Vue.component('navbar', Navbar);
Vue.component('navfooter', NavFooter);
Vue.component('sidebar', Sidebar);
Vue.component('forum', Forum);
Vue.component('about', About);
Vue.component('contact', Contact);
Vue.component('followers', Followers);
Vue.component('faq', Faq);
Vue.component('accountsettings', AccountSettings);
Vue.component('event', Event);
Vue.component('notification', Notification);
Vue.component('logout', Logout);
Vue.component('register', Register);
Vue.component('newsfeed', NewsFeed);
Vue.component('readmore', ReadMore);
Vue.component('index', Index);
Vue.component('editprofile', EditProfile);
Vue.component('termspage', TermsPage);
Vue.component('forgetpassword', ForgetPassword)
Vue.component('unknown', Unknown);

Vue.use(VueRouter);
Vue.use(VueAxios);
Vue.use(Axios);

const router = new VueRouter({
  routes: [{
      path: '',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/faq',
      component: Faq
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/feed',
      component: NewsFeed
    },
    {
      path: '/readmore',
      component: ReadMore
    },
    {
      path: '/termspage',
      component: TermsPage
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/forgetpassword',
      component: ForgetPassword
    },
    {
      path: '/forum',
      component: Forum
    },
    {
      path: '/event',
      component: Event
    },
    {
      path: '/notification',
      component: Notification
    },
    {
      path: '/editprofile',
      component: EditProfile
    },
    {
      path: '/accountsettings',
      component: AccountSettings
    },
    {
      path: '/logout',
      component: Logout
    },
    {
      path: '/followers',
      component: Followers
    },
    {
      path: '*',
      component: Unknown
    }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
