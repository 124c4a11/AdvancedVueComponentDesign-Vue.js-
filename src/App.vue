<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">UserSettingsForm</router-link> |
      <router-link to="/datepicker">Datepicker</router-link> |
      <router-link to="/announcement-modal">AnnouncementModal</router-link> |
      <router-link to="/media-cards">MediaCards</router-link> |
      <router-link to="/contact-list">ContactList</router-link> |
      <router-link to="/render-function">RenderFunction</router-link> |
      <router-link to="/tag-input">TagInput</router-link> |
      <router-link to="/profile-card">ProfileCard</router-link> |
      <router-link to="/accordion">Accordion</router-link> |
      <router-link to="/sortable-list">SortableList</router-link> |
      <router-link to="/search-select">SearchSelect</router-link>
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
