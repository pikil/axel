<script>
  import { onMount } from 'svelte'

  export let title
  export let dense

  // const acl = null

  onMount(() => {
    console.log(window.DeviceMotionEvent)

    if (window.DeviceMotionEvent)
      window.addEventListener('devicemotion', accelerometerUpdate, true)
  })

  // if (this.Accelerometer) {
  //   let acl = new window.Accelerometer({frequency: 60})

  //   acl.addEventListener('reading', () => {
  //     console.log("Acceleration along the X-axis " + acl.x);
  //     console.log("Acceleration along the Y-axis " + acl.y);
  //     console.log("Acceleration along the Z-axis " + acl.z);
  //   })

  //   console.log(acl)
  // }

  const classes = (dense === true) ? 'dense' : ''
  
  const stylesArr = [
    'box-shadow: 5px 5px 2px #ccc'
  ]

  const styles = stylesArr.join(';')

  const accelerometerUpdate = (e) => {
    console.log(e)
  }
</script>
<style>
button {
  background-color: red;
}
button:not(.dense) {
  padding: 1rem;
}
button.dense {
  padding: 0.5rem;
}
</style>
<button
  class={classes}
  style={styles}
>{title}</button>