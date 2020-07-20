<script>
  export let title
  export let dense
  export let position

  const classes = (dense === true) ? 'dense' : ''

  $: aShadow = {
    x: position.x + position.z,
    y: 5,
    size: 2
  }

  const roundPosition = (val) => Math.round(val * 100) / 100

  const stylesArr = [
    'box-shadow: ' + aShadow.x + 'px ' + aShadow.y + 'px ' + aShadow.size + 'px #ccc'
  ]

  const styles = stylesArr.join(';')
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
{roundPosition(aShadow.x)} y{roundPosition(aShadow.y)} z{roundPosition(aShadow.size)}