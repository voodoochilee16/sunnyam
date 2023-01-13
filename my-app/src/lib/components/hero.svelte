<script>
  import Drawer from "./drawer.svelte";
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
        <div class="m-1 absolute text-white bg-no-repeat bg-cover bg-[url('/button.svg')]">
            <a href="">
              <p class="text-whitestar p-1 md:text-2xl">LISTEN NOW</p>
            </a>
          </div>
      </div>
  </div>
</div>