<template>
  <div>
    分享
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {}
  },
  created () {
    this.$store.commit('UPDATE_LOADING', true)
    this.$nextTick(() => {
      this.$store.commit('UPDATE_LOADING', false)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
