<template>
  <div class="home">
    <span v-if="loading">Loading…</span>
    <div
      v-else
      class="posts"
    >
      <div
        v-for="post in posts"
        :key="post.title"
        class="posts-item"
      >
        <div class="posts-item-img">
          <router-link :to="{ name: 'details', params: { id: post.uuid, post: post }}">
            <!-- v-if="myObject" -->
            <img :src="'http://localhost:3001/' + post.images.medium" v-bind:alt="post.title" />
          </router-link>
        </div>
        <div class="posts-item-content">
          <h2>{{ post.title }}</h2>
          <p> {{post.description}}</p>
          <router-link :to="{ name: 'details', params: { id: post.uuid, post: post }}"> See the Recipe for the {{ post.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      loading: false
      // myObject: null
    }
  },

  computed: {
    posts () {
      return this.$store.state.posts
    },
    imageMedium () {
      return this.post.images ? this.post.images.medium : ''
    }
  },

  created () {
    this.loading = true
    this.$store.dispatch('fetchPosts')
      .then(posts => {
        this.loading = false
      })
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f6f9f9;
    border: 1px solid #c8dada;
    &-img {
      img {
        display: flex;
        width: 100%;
        max-width: 600px;
      }
    }
    &-content {
      margin: 0 auto;
      padding: 10px 1em;
    }
  }
  @media screen and (min-width: 1200px) {
    .posts {
      &-item {
        flex-direction: row;
      }
    }
  }
}

.post-item + .post-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
