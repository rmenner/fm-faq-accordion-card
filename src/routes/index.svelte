<script>
  import faq from "../data/faq.json";
  import Qa from "../components/qa-item.svelte";
  let active = 0;
  function changeActive(event) {
		active = event.detail;
	}
</script>

<div class="flex min-h-screen overflow-x-hidden justify-center items-center">

  <div class="w-full mx-8 sm:mx-20 max-w-2xl lg:max-w-7xl lg:flex justify-center relative">
    <img class="w-4/5 transform translate-y-28 mt-10 -mb-36 mx-auto animate-floating lg:hidden z-10 relative" src="/images/illustration-woman-online-mobile.svg" alt="Illustration">
    <div class="bg-gray-50 rounded-3xl inset-shadow my-10 md:mb-20 md:mt-0 svg-background lg:flex relative">
      <div class="push-box lg:hidden"></div>
      
      <div class="svg-illustration hidden lg:block">
        <img class="object-contain cube hidden lg:block animate-floating"  src="/images/illustration-box-desktop.svg" alt="Illustration">
      </div>
      <div class="mx-auto py-12 px-8 lg:py-24 sm:px-16 xl:px-24">
        <div class="mx-auto lg:w-96">
          <h2 class="text-center lg:text-left text-5xl font-extrabold text-gray-900">
            FAQ
          </h2>
          <dl class="mt-6 space-y-6 divide-y">
            {#each faq as item, i}
              <Qa { item } { i } {active} on:activeState="{changeActive}"/>
            {/each}
          </dl>
        </div>
      </div>
    </div>
  </div>


</div>

<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="https://ryanmenner.com">Ryan Menner</a>.
</div>

<style>
  @keyframes floating {
    from { transform: translateY(1em) }
    to { transform: translateY(0.6em) }
  }
  .svg-illustration {
    background-image: url("/images/illustration-woman-online-desktop.svg");
    background-repeat: no-repeat;
    background-position-x: -70px;
    background-position-y: center;
    background-size: 500px auto;
    width: 500px;
  }

  .svg-background {
    background-image: url("/images/bg-pattern-mobile.svg");
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 80% auto;
  }

  @media screen and (min-width: 1024px) {

    .svg-background{
      background-image: url("/images/bg-pattern-desktop.svg");
      background-position-x: -200%;
      background-position-y: 80%;
    }
  }


  .animate-floating {
    animation: floating 1.4s ease-in-out alternate infinite;
  }

  .push-box {
    height: 0;
    overflow: hidden;
    padding-top: 30vw;
  }
  
  .cube {
    position: absolute;
    top: 50%;
    left: -86px;
    margin-top: -50px;
    z-index: 10;
  }

</style>