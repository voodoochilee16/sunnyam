<script>
    import Drawer from "./drawer.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";
  
  
  </script>
  
  <div class="flex justify-center">
      <div class="flex justify-center items-center md:mt-[15vh] bg-mainorange w-[15vw]">
      
        <div class="flex flex-col justify-center">
            <div class="flex justify-center">
              <a href="/"><img class=" object-contain w-[50vw] md:w-[360px]" src="/artwork.svg" alt=""></a>
            </div>
            <div class="flex justify-center mb-2">
              <p class="text-[#F47D51] text-s md:text-2xl">ALL THE LIGHTS ON</p>
            </div>
      
            <div class="flex justify-center relative">
              <div class="m-1 absolute text-white bg-borderpink rounded-md">
                  <a href="">
                    <p class="text-whitestar p-2 ml-6 mr-6 text-xs md:text-xl">LISTEN NOW</p>
                  </a>
                </div>
            </div>
        </div>
      </div>
  </div>