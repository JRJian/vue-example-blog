<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | -->
      <router-link to="/">博客列表</router-link>
      <router-link to="/post">发表博文</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  background-color: cornflowerblue;
  text-align: center;
  vertical-align: middle;
  height: 88px;
  display: table-cell;
  width: 1000px;
}
#nav a {
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
}
#nav a:focus {
  background: rgba(255, 255, 255, 0.75);
  color: #333;
  border-radius: 3px;
}
</style>
