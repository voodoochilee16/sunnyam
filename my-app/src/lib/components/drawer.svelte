<script>
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";

    let m = {x: 0, y: 0};

function handleMouse(event) {
    m.x = event.clientX;
    m.y = event.clientY;
    const rect = event.currentTarget.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(m.x, m.y, anchorX, anchorY);
    console.log(angleDeg)
}

function angle(cx, cy, ex, ey){
    const dy = ey-cy;
    const dx = ex-cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg

}
function rotate (event) {
      m.x = event.clientX;
    m.y = event.clientY;
    const rect = event.currentTarget.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(m.x, m.y, anchorX, anchorY);
    console.log(angleDeg)
    const eye = event.currentTarget;
    // eye.style.transform = `rotate(${90+angleDeg}deg)`;
    eye.style.filter = `hue-rotate(${angleDeg}deg)`;
}
</script>


<div on:mousemove={rotate} class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
        <Hero></Hero>
        <label for="my-drawer" class="cursor-pointer z-50 mix-blend-difference drawer-button fixed top-4 right-4 lg:top-4 lg:right-2">
            <img class="h-[60px]  lg:h-[50px] mr-1" src="hamburger.svg" alt="more">
          </label>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <Nav></Nav>
    </div>
  </div>