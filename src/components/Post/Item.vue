<template>
 <div v-if="post">
   {{ post }}
 </div>
</template>

<script>
export default {
  props:['post'],
  name: 'PostItem',
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>