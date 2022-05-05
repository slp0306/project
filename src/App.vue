<template>
  <div class="scape">
    <img
      class="shun img"
      src="./assets/resources/scape.png"
      width="300"
      alt="scape"
    />
  </div>
  <div class="box">
    <div class="img"></div>
  </div>
  <div>{{ title }}</div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import ajax from "./ajax";

let title = ref("");
let list = reactive([]);

onMounted(() => {
  ajax
    .request({ url: "./mock/data.json", method: "GET", param: {} })
    .then((response: any) => {
      title = response.title;
      list = response.list;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<style lang="less">
/* 超小屏幕（手机，小于 768px） */
@media (max-width: 768px) {
  .box {
    width: 100%;
    height: 1700px;
    .img {
      height: 100%;
      background-size: 100%;
      background-image: url("./assets/resources/moblie.png");
      background-repeat: no-repeat;
    }
  }
}

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {
  .box {
    width: 100%;
    height: 1800px;
    .img {
      height: 100%;
      background-size: 100%;
      background-image: url("./assets/resources/ipad.jpg");
      background-repeat: no-repeat;
    }
  }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
  .box {
    width: 100%;
    height: 1500px;
    .img {
      height: 100%;
      background-size: 100%;
      background-image: url("./assets/resources/PC.jpg");
      background-repeat: no-repeat;
    }
  }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {
  .box {
    width: 100%;
    height: 800px;
    .img {
      height: 100%;
      background-size: 100%;
      background-image: url("./assets/resources/bg.png");
      background-repeat: no-repeat;
    }
  }
}
.scape {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(90deg);
  }
}

.shun {
  -webkit-transform: rotate(0deg);

  animation: rotation 1s linear infinite;

  -moz-animation: rotation 1s linear infinite;

  -webkit-animation: rotation 1s linear infinite;

  -o-animation: rotation 1s linear infinite;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
