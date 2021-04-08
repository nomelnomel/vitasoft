<template>
  <div>
    <div class="post">
      <h3 class="post-title">{{post.title}}</h3>
      <div class="post-description">{{post.description}}</div>
      <div
          class="btn edit-btn"
          @click="startEdit"
      >
        Редактировать
      </div>
      <div
          class="btn del-btn"
          @click="deletePost"
      >
        Удалить
      </div>
    </div>
    <div class="overlay" v-if="isEdit" @click.self="endEdit">
      <div class="popup">
        <PostForm :post="post" />
      </div>
    </div>

    <div class="comments">
      <h3>Всего комментариев: {{comments.length}}</h3>
      <hr>
      <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
      <CommentForm :postId = "post.id"/>
    </div>

  </div>
</template>

<script>
import PostForm from '../components/Post/Form'
import CommentItem from '../components/Comment/Item'
import CommentForm from '../components/Comment/Form'
export default {
  name: 'Post',
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    startEdit() {
      this.isEdit = true
    },
    endEdit(){
      this.isEdit = false
    },
    deletePost(){
      this.$store.dispatch('deletePost', this.post.id)
      this.$router.push('/')
    }
  },
  computed: {
    post() {
      const {id} = this.$route.params
      return this.$store.getters.post(id)
    },

    comments(){
      return this.$store.getters.comments(this.post.id)
    }
  },
  components:{
    PostForm,
    CommentForm,
    CommentItem
  }
}
</script>

<style scoped>
.post {
  display: flex;
  width: 500px;
  border-bottom: 1px solid black;
  flex-direction: column;
  padding: 20px;
  position: relative;
}

.post-title{
  margin-top: 50px;
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

.edit-btn{
  background-color: #db8237;
  right: 10px;
  top: 10px;
}

.del-btn{
  top: 10px;
  left: 10px;
  background-color: red;
}


.overlay{
  position: fixed;
  top: 0;
  bottom: -100px;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
}

.popup{
  min-width: 400px;
  background-color: #fff;
  position: absolute;
  padding: 20px;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
}


</style>