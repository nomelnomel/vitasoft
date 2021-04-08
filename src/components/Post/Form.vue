<template>
  <div>
    <form class="post-form">
      <label>
        <span class="inp new-title">Заголовок</span>
        <input type="text" v-model.trim="title"/>
      </label>
      <label>
        <span class="inp new-preview">Превью</span>
        <input type="text" v-model.trim="preview"/>
      </label>
      <label>
        <span class="inp new-description">Описание</span>
        <textarea v-model.trim="description" />
      </label>
      <div v-if="isEdit">
        <button type="submit" :disabled="isDisabled" @click="postAction">Редактировать пост</button>
      </div>
      <div v-else>
        <button type="submit" :disabled="isDisabled" @click="postAction">Добавить новый пост</button>
      </div>
    </form>
  </div>
</template>

<script>
import {Post} from '../../model/post'

export default {
  name: 'PostForm',
  props: ['post'],
  data() {
    return {
      title: '',
      preview: '',
      description: '',
      isEdit: false
    }
  },
  created() {
    if (this.post){
      this.isEdit = true
      this.title = this.post.title
      this.preview = this.post.preview
      this.description = this.post.description
    }
        },
  computed: {
    isDisabled() {
      return !(this.title && this.preview && this.description)
    }
  },
  methods: {
    postAction() {
      if(this.isEdit){
        this.$store.dispatch('editPost',{
          id: this.post.id,
          title: this.title,
          preview: this.preview,
          description: this.description
        })
      }
      else {
        const newPost = new Post({
          title: this.title,
          preview: this.preview,
          description: this.description
        })
        this.$store.dispatch('createPost', newPost)

        this.title = ''
        this.preview = ''
        this.description = ''
      }
    }
  },
}
</script>

<style>

.post-form{
  display: flex;
  flex-direction: column;
  max-width: 355px;
}

.post-form label{
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.post-form textarea{
  max-width: 353px;
}

</style>