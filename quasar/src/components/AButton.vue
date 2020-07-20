<template>
  <button :style="styles">{{title}}</button>
</template>
<style lang="sass" scoped>
button
  background-color: darkblue
  padding: 1rem
  border: none
  border-radius: 6px
  font-weight: bold
  color: white
  font-size: 1.2rem
</style>
<script>
export default {
  props: {
    title: String,
  },
  computed: {
    styles() {
      return {
        boxShadow: '6px 6px 3px #ccc',
      };
    },
  },
};
</script>
