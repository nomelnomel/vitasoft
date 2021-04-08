<template>
  <div class="comment-form">
    <label>
      <span>Ваше имя</span>
      <input type="text" v-model.trim="author">
    </label>
    <label>
      <span>Ваш комментарий</span>
      <textarea v-model.trim="text" />
    </label>
    <button :disabled="isDisabled" @click.prevent="addComment">Добавить комментарий</button>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  props:['postId'],
  data() {
    return {
      author: '',
      text: '',
    }
  },
  computed: {
    isDisabled() {
      return !(this.author && this.text)
    }
  },
  methods:{
    addComment() {
      this.$store.dispatch('addComment', {
        id: Date.now(),
        postId: this.postId,
        author: this.author,
        text: this.text
      })
    }
  }

}
</script>

<style scoped>
.comment-form{
  display: flex;
  flex-direction: column;
  max-width: 355px;
}

.comment-form label{
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.comment-form textarea{
  max-width: 353px;
}
</style>