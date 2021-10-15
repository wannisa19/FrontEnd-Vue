<template>
  <div class="body">
    <div class="display-first">
      <a-col>
        <a-card :bordered="false" class="card-left">
          <template slot="title">
            <h1>
              {{ getHeaderAndDetail[0].title }}
            </h1>
          </template>
          <a-card hoverable style="height: 450px">
            <img
              slot="cover"
              alt="product"
              src="@/assets/products.png"
              style="width: 100%; height: 300px; margin: 0 auto;"
            />
            <a-card-meta>
              <b> {{ getHeaderAndDetail[0].name }}</b>
              <p>{{ getHeaderAndDetail[0].description }}</p>
            </a-card-meta>
          </a-card>
        </a-card>
      </a-col>
      <a-col>
        <a-card :bordered="false" class="card-right">
          <template slot="title">
            <h1>
              {{ getHeaderAndDetail[1].title }}
            </h1>
          </template>
          <a-card hoverable style="height: 450px">
            <img
              slot="cover"
              alt="service"
              src="@/assets/products.png"
              style="width: 100%; height: 300px; margin: 0 auto;"
            />
            <a-card-meta>
              <b> {{ getHeaderAndDetail[1].name }}</b>
              <p>{{ getHeaderAndDetail[1].description }}</p>
            </a-card-meta>
          </a-card>
        </a-card>
      </a-col>
    </div>
    <div class="display">
      <div class="card-left" v-for="data in getDetail" :key="data.id">
        <div
          v-for="info in data.displyBox"
          :key="info.id"
          :class="[data.class, info.class]"
        >
          <h2 class="title-detail">{{ info.title }}</h2>
          <p class="description-detail">
            {{ info.show }}
          </p>
        </div>
      </div>
    </div>
    <div class="display">
      <a-card :bordered="false" class="card-left">
        <template slot="title">
          <h1 class="title">Our Customer</h1>
        </template>
        <div
          class="card-customer-partner"
          v-for="data in allMockCustomer"
          :key="data.id"
        >
          <p>{{ data.title }}</p>
        </div>
      </a-card>
      <a-card :bordered="false" class="card-right">
        <template slot="title">
          <h1 class="title">Our Partner</h1>
        </template>
        <div
          class="card-customer-partner"
          v-for="data in allMockPartner"
          :key="data.id"
        >
          <p>{{ data.title }}</p>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Solution",
  props: {
    msg: String,
  },
  computed: mapGetters([
    "allMockCustomer",
    "getDetail",
    "allMockPartner",
    "getHeaderAndDetail",
  ]),
};
</script>

<style scoped>
.body {
  margin: 10px 10px 10px 10px;
}
h1 {
  margin: 5px 5px 0 0;
  color: rgb(65, 65, 235);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title-detail {
  margin: 50px 50px 10px 50px;
  color: #447ab8;
}
.description-detail {
  margin-left: 50px;
}
.display-first {
  /* flex-direction: row; */
  /* position: relative; */
  display: block;
  width: 100%;
  height: auto;
}
.display {
  display: block;
  position: relative;
  width: 100%;
}
.card-right {
  width: 50%;
  position: relative;
  float: right;
}
.card-left {
  width: 50%;
  position: relative;
  float: left;
}
.container {
  position: relative;
  margin: 0 auto;
}
.sub-card-left {
  width: 100%;
  height: 300px;
  border: 1px solid #f7f7f7;
  /* background-color: #e9e9e9; */
}
.sub-card-right {
  width: 100%;
  height: 300px;
  border: 1px solid #f7f7f7;
  /* background-color: #e9e9e9; */
}
.background-white {
  background-color: #ffffff;
}
.background-gray {
  background-color: #e9e9e9;
}
.title {
  color: #2c2e2d;
  text-align: center;
}
.card-customer-partner {
  text-align: center;
  padding: 2px;
  margin: 5px;
  width: 30%;
  height: 50px;
  display: inline-block;
  background-color: #2980c79c;
  border: 1px solid #52abf5c9;
  box-shadow: 2px 2px 2px 0px #f0f0f0, -2px -2px 2px 0px #f0f0f0,
    -2px 2px 2px 0px #f0f0f0, 2px -2px 2px 0px #f0f0f0;
}
</style>
