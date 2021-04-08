<template>
  <div>
    <div v-if="posts" class="posts-list">
      <div
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="post"
      >
        <h3 class="post-title">
          {{ post.title }}
        </h3>
        <div class="post-preview-text">
          {{ post.preview }}
        </div>
        <router-link
            :to='`post-${post.id}`'
            class="full-post-btn"
        >
          Подробнее
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
}
</script>

<style scoped>

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.post {
  display: flex;
  width: 500px;
  border: 1px solid black;
  flex-direction: column;
  padding: 20px;
}

.post-preview-text {
  margin-bottom: 30px;
}

.full-post-btn {
  text-decoration: none;
  background-color: #acacac;
  padding: 5px 10px;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-left: auto;
}

</style>