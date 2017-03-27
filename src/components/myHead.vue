<template>
  <header class="header">
    <div>
      {{ headTitle }}
    </div>
  </header>
</template>

<script>

export default {
  name: 'myhead',
  data () {
    return {}
  },
  computed: {
    headTitle () {
      return this.$store.state.headTitle
    }
  }
}
</script>

<style lang="scss" scoped>
  $lightGray: #f0f0f0;

  .header {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid $lightGray;
    z-index: 50;
    background: rgba(255, 255, 255, 0.9);
  }
</style>
