<script>
  import Drawer from "./drawer.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Whitestars from "./whitestars.svelte";


</script>

<!-- <Whitestars></Whitestars> -->
<div class="flex justify-center items-center md:mt-[2vh]">
  
  <div class="flex flex-col justify-center">
    <div class="flex justify-center mt-5">
        <img class="w-[47vw] mt-20 md:mt-6 md:w-[360px]" src="/sunny.svg" alt="">
      </div>
      <div class="flex justify-center">
        <img class="w-[57vw] md:w-[360px]" src="/artwork.svg" alt="">
      </div>
      <div class="flex justify-center mb-2">
        <p class="text-[#F47D51] text-s md:text-2xl">ALL THE LIGHTS ON</p>
      </div>
  
      <div class="flex justify-center relative">
        <div class="m-1 absolute text-white bg-borderpink rounded-md">
            <a href="/music">
              <p class="text-whitestar p-2 ml-6 mr-6 text-xs md:text-xl">LISTEN NOW</p>
            </a>
          </div>
      </div>
  </div>
</div>