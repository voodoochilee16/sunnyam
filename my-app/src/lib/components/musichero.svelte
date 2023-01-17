<script>
    import Drawer from "./drawer.svelte";
    import Hero from "$lib/components/hero.svelte";
    import Nav from "$lib/components/nav.svelte";
  
  
  </script>
  
  <div class="flex justify-center mt-[20vh]">
    
      <div class="flex flex-col justify-end items-center md:mt-[15vh] bg-mainorange w-[350px] h-[300px] md:w-[75vw]">

        <div class="grid grid-cols-3 gap-2 items-end mt-4">
          <div class="justify-self-start">
            <p class="text-[#F47D51] text-[0.4rem] md:text-2xs">ALL THE LIGHTS ON</p>
          </div>
          
          <div class="self-center place-self-center mb-[75px]"> 
            <a href="/"><img class="w-[200px]" src="/artwork.svg" alt=""></a>
          </div>

          <div class="justify-self-end">
            <p class="text-[#F47D51] text-[0.4rem] md:text-2xs">SUNNY AM</p>
          </div>


        </div>
        
      </div>
  </div>