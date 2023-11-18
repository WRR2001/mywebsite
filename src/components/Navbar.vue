<template>
  <div class="navigation">

    <router-link id="logo" to="/home" custom v-slot="{ navigate, isActive }">
        <a class="logo" @click="navigate" :class="isActive ? 'router-link-active' : ''">
        </a>
      </router-link>

    <ul class="menu">
      <router-link to="/home" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'router-link-active' : ''">
          <a>首页</a>
        </li>
      </router-link>

      <router-link to="/warehouse" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'router-link-active' : ''">
          <a>仓库</a>
        </li>
      </router-link>

      <router-link to="/skills" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'router-link-active' : ''">
          <a>技能点</a>
        </li>
      </router-link>

      <router-link to="/mylife" custom v-slot="{ navigate, isActive }">
        <li @click="navigate" :class="isActive ? 'router-link-active' : ''">
          <a>My Life</a>
        </li>
      </router-link>
    </ul>

    <div class="resume">
      <a href="#">
        <svg
          width="22"
          height="29"
          viewBox="0 0 22 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4029 0.100098H2.39043C1.44355 0.100098 0.674805 0.881348 0.674805 1.84697V26.3063C0.674805 27.272 1.44355 28.0532 2.39043 28.0532H19.5467C20.4936 28.0532 21.2623 27.272 21.2623 26.3063V7.0876L14.4029 0.100098Z"
            fill="white"
          />
          <path
            d="M20.0623 26.9345H1.87793V1.42822H13.7404V8.26885H20.0623V26.9345Z"
            fill="#353A84"
          />
          <path
            d="M20.0623 26.8314H1.87793V1.3252H13.7404V8.1627H20.0623V26.8314Z"
            fill="#FF7373"
          />
          <path
            d="M5.90322 18.3252C7.0001 18.3252 7.54697 18.7908 7.54697 19.7252C7.54697 20.6658 6.99072 21.1377 5.8876 21.1377H4.69385V22.9314H3.99072V18.3252H5.90322ZM4.69697 20.5377H5.84385C6.19072 20.5377 6.44385 20.4721 6.60635 20.3439C6.7626 20.2158 6.84385 20.0096 6.84385 19.7252C6.84385 19.4408 6.75947 19.2346 6.6001 19.1189C6.4376 18.9908 6.1876 18.9252 5.84385 18.9252H4.69697V20.5377ZM9.87823 18.3252C10.6189 18.3252 11.1814 18.5314 11.5689 18.9502C11.9314 19.3377 12.1095 19.8971 12.1095 20.6283C12.1095 21.3502 11.922 21.9127 11.5532 22.3127C11.1657 22.7252 10.6064 22.9314 9.8626 22.9314H8.19697V18.3252H9.87823ZM8.90322 22.3314H9.73448C10.3157 22.3314 10.747 22.1908 11.0188 21.9127C11.2845 21.6346 11.4189 21.2096 11.4189 20.6283C11.4189 20.0346 11.2845 19.6096 11.0251 19.3377C10.7532 19.0596 10.3282 18.9252 9.74697 18.9252H8.90322V22.3314ZM15.9532 18.3252V18.9252H13.5282V20.2658H15.8189V20.8658H13.5282V22.9314H12.8251V18.3252H15.9532Z"
            fill="white"
          />
        </svg>
        <span>查看/下载 简历</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
#logo {
    cursor: pointer;
}

.logo {
  background: url('../assets/mywebsitelogo.png');
  background-size: 100% 100%;
  display: inline-block;
  width: 100px;
  height: 41px;
  margin-left: 50px;
  margin-right: 50px;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.menu {
  display: flex;
  list-style-type: none;
  flex-grow: 1;
  justify-content: center;
}

.menu ul {
  height: 30px;
}

.menu li {
  margin: 0px 30px;
  padding-bottom: 3px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
  cursor: pointer;
}

.menu li:hover {
  border-bottom: 2px solid black;
}

.menu li a {
  font-size: 20px;
  color: black;
  display: inline-block;
  transition: transform 0.2s ease-in-out;
}

.menu li:hover a {
  transform: translateY(-1px);
}
</style>