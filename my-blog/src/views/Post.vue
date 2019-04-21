<template>
  <div>
    <div class="post-blog" v-if="!submitted">
      <h1>发表博文</h1>
      <div>
        <span>标题:</span>
        <input type="text" v-model="post.title">
      </div>
      <div>
        <span>博文:</span>
        <textarea v-model="post.content"/>
      </div>
      <div>
        <span>Vue.js</span>
        <input type="checkbox" value="Vue.js" v-model="post.categories">
        <span>React.js</span>
        <input type="checkbox" value="React.js" v-model="post.categories">
        <span>Node.js</span>
        <input type="checkbox" value="Node.js" v-model="post.categories">
        <span>Angular.js</span>
        <input type="checkbox" value="Angular.js" v-model="post.categories">
      </div>
      <div>
        <span>作者:</span>
        <select v-model="post.author">
          <option>Oscar</option>
          <option>Ga</option>
          <option>Bitch</option>
        </select>
      </div>
      <div>
        <button @click="postAction()">提交</button>
      </div>
    </div>
    <div v-if="submitted">
      <h1>{{post.title}}</h1>
      <p>{{post.content}}</p>
      <ul>
        <li v-for="category in post.categories" v-bind:key="category">{{category}}</li>
      </ul>
      <p>{{post.author}}</p>
      <p>{{info}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "post",
  data() {
    return {
      post: {
        title: "",
        content: "",
        categories: [],
        author: "Oscar"
      },
      info: "",
      submitted: false
    };
  },
  methods: {
    postAction: function() {
      this.axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          userId: 1,
          id: 1,
          title: this.title,
          body: this.content
        })
        .then(res => {
          this.submitted = true
        })
    }
  },
  mounted() {
    this.axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json", {
        pageNum: 1,
        pageSize: 5,
        cityId: ""
      })
      .then(res => {
        this.info = res;
      });
  }
};
</script>

<style>
div {
  margin-top: 10px;
}
ul {
  width: 100px;
  margin: 0 auto;
}
</style>

