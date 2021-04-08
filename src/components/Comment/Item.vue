<template>
  <div class="comment">
    <h4 class="comm-author">
      {{comment.author}}
    </h4>
    <p class="comm-text">
      {{comment.text}}
    </p>
    <div
        class="btn del-btn"
        @click="deleteComment"
    >
      Удалить
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: ['comment'],
  methods: {
    deleteComment() {
      this.$store.dispatch('deleteComment', this.comment.id)
    }
  },
}
</script>

<style scoped>
.comment{
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  position: relative;
}

.btn{
  padding: 10px;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: absolute;
}

.del-btn{
  top: 10px;
  right: 10px;
  background-color: red;
}
</style>