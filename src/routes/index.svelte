<script>
  import { onMount } from 'svelte'
  import AButton from '../components/AButton.svelte'

  const motionAllowed = true
  const aPosition = {
    x: 0,
    y: 0,
    z: 0
  }
  let unsetListener = null

  onMount(() => {
    if (!window.DeviceMotionEvent) {
      motionAllowed = false
      return
    }

    window.addEventListener('devicemotion', accelerometerUpdate, true)

    unsetListener = () => {
      motionAllowed = false
      window.removeEventListener('devicemotion', accelerometerUpdate, true)
    }
  })

  const accelerometerUpdate = (e) => {
    if (typeof e.accelerationIncludingGravity === typeof undefined) {
      unsetListener()
      return
    }

    aPosition.x = e.accelerationIncludingGravity.x
    aPosition.y = e.accelerationIncludingGravity.y
    aPosition.z = e.accelerationIncludingGravity.z
  }
</script>
<style>
  h1, figure, p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>
<AButton title={'Test button'} position={aPosition} dense={false} />
<p>&nbsp;</p>
<figure>
  <img alt='Success Kid' src='successkid.jpg'>
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
