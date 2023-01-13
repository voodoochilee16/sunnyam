<script>
  import Hero from "$lib/components/hero.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Footerw from "$lib/components/footerw.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Drawer from "$lib/components/drawer.svelte";
  import Whitestar from "$lib/components/whitestar.svelte";

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


<body on:mousemove={rotate}>

  <header>
   
  </header>

<Drawer></Drawer>
  
  <Footer></Footer>


  
  <img class="h-[150px] fixed bottom-10  z-0 hover:fill-slate-50" src="palmtree_1.svg" alt="">
  <img  class="h-[150px] fixed bottom-10 left-7" src="bird.svg" on:mousemove={rotate}  id="eye" alt="">
</body>


