<template>
  <div>
    <div class="post-blog" v-if="!submitted">
      <h1>发表博文</h1>
      <div>
        <label>标题:</label>
        <input type="text" v-model="post.title">
      </div>
      <div>
        <label>博文:</label>
        <textarea v-model="post.content"/>
      </div>
      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="post.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="post.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="post.categories">
        <label>Angular.js</label>
        <input type="checkbox" value="Angular.js" v-model="post.categories">
      </div>
      <div>
        <label>作者:</label>
        <select v-model="post.author">
          <option>Oscar</option>
          <option>Ga</option>
          <option>Bitch</option>
        </select>
      </div>
      <div>
        <button id="submitButton" @click="postAction()">提交</button>
      </div>
    </div>
    <div id="preview" v-if="submitted">
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
  text-align: left;
  box-sizing: border-box;
  margin: 20px 0;
}
ul {
  width: 100px;
  margin: 0 auto;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea, select {
  display: block;
  width: 100%;
  padding: 8px;
}
textarea {
  height: 200px;
}
#submitButton {
  display: block;
  padding: 10px 20px;
  background-color: crimson;
  color: white;
  border: 0;
  font-weight: bold;
  font-size: 1.5em;
  border-radius: 3px;
}
#checkboxes label, 
#checkboxes input {
  display: inline-block;
  padding: 0 10px;
}

#preview {
  padding: 10px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
</style>

