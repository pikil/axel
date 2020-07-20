<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-center q-mb-xl">
        <a-button title="Test button" />
      </div>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
      >
    </div>
  </q-page>
</template>
<script>
import AButton from 'src/components/AButton';

export default {
  name: 'PageIndex',
  components: {
    AButton,
  },
};
</script>
