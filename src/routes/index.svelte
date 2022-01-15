<script>
  import faq from "../data/faq.json";
  import Qa from "../components/qa-item.svelte";
</script>


<div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Frequently asked questions
      </h2>
      <dl class="mt-6 space-y-6 divide-y divide-gray-200">
        {#each faq as item, i}
          <Qa { item } { i }/>
        {/each}
      </dl>
    </div>
  </div>
</div>

  


<div class="attribution">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.
</div>