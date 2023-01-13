<script>
  import Drawer from "./drawer.svelte";
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
    const rect = event.target.getBoundingClientRect();
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(m.x, m.y, anchorX, anchorY);
    console.log(angleDeg)
    const eye = event.currentTarget;
    // eye.style.transform = `rotate(${90+angleDeg}deg)`;
    eye.style.filter = `hue-rotate(${angleDeg}deg)`;
}
</script>

<div class="flex justify-center items-center">
  
  <div class="flex flex-col justify-center">
    <div class="flex justify-center mt-5">
        <img class="w-[47vw] mt-20 md:mt-6 md:w-[360px]" src="/sunny.svg" alt="">
      </div>
      <div class="flex justify-center">
        <img class="w-[50vw] md:w-[360px]" src="/artwork.svg" alt="">
      </div>
      <div class="flex justify-center mb-2">
        <p class="text-[#F47D51] md:text-2xl">ALL THE LIGHTS ON</p>
      </div>
  
      <div class="flex justify-center relative">
        <div class="m-1 absolute text-white bg-borderpink rounded-md">
            <a href="">
              <p class="text-whitestar p-2 ml-6 mr-6 md:text-xl">LISTEN NOW</p>
            </a>
          </div>
      </div>
  </div>
</div>