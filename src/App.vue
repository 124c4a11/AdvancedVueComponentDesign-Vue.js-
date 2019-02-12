<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">UserSettingsForm</router-link> |
      <router-link to="/datepicker">Datepicker</router-link> |
      <router-link to="/announcement-modal">AnnouncementModal</router-link> |
      <router-link to="/media-cards">MediaCards</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/css/app.css';

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
