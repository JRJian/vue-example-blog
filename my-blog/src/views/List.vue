<template>
  <div>
    <h1>博客列表</h1>
    <input v-model="searchText" type="text" placeholder="搜索">
    <div v-rainbow:column="'wide'">
      <div class="blog-list" v-for="blog in filiterBlogs" v-bind:key="blog.id">
        <router-link v-bind:to="'/blog/' + blog.id"><a>{{blog.title | capitalize}}</a></router-link>
        <article>{{blog.body}}</article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      blogs: {},
      searchText: ""
    };
  },
  created() {
    this.axios.get('/api/posts.json').then(res => {
      this.blogs = res['data'];
    });
  },
  computed: {
    filiterBlogs: function() {
      if (this.blogs[0]) {
        return this.blogs.filter(blog => {
          return blog.title.match(this.searchText);
        });
      } else {
        return [];
      }
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  directives: {
    rainbow: {
      bind(el, binding) {
        if (binding.value == "wide") {
          el.style.width = "1380px";
        }
        if (binding.arg == "column") {
          el.style.background = "cornflowerblue";
          el.style.padding = "10px";
        }
      }
    }
  }
};
</script>

<style>
div {
  margin: 20px auto;
  max-width: 600px;
}
.blog-list {
  border: 1px solid #ccc;
  padding: 10px;
  background: #fff;
}
.blog-list a {
  text-decoration: none;
  color: rgb(59, 105, 255);
  font-size: 18px;
}
</style>
