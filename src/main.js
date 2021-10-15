import Vue from "vue";
import App from "./App.vue";
import { Card, Button, Layout, Menu } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "../src/vuex/store";

Vue.component(Card.name, Card);
Vue.component(Button.name, Button);
Vue.component(Layout);
Vue.component(Menu);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
