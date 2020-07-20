<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    accelerometerUpdate(evt) {
      console.log(evt); // eslint-disable-line
    },
  },
  mounted() {
    console.log(this.$store.getters.AXEL); // eslint-disable-line

    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this.accelerometerUpdate, true);
    }
  },
};
</script>
