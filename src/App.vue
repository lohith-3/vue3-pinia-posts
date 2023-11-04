<template>
  <nav>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/authors">Authors</router-link>
  </nav>

  <router-view />
</template>

<script setup></script>
<style scoped>
nav {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: royalblue;
}
nav a {
  text-decoration: none;
  color: white;
  margin: 0 1rem;
  font-size: 1.3rem;
  text-transform: uppercase;
}
nav a:hover,
a:active,
a.active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>
