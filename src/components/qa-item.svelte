<script>
  import { slide } from 'svelte/transition';
  export let item = {};
  export let i = 0;
  export let active = 0;

  import { createEventDispatcher } from 'svelte';
	const setActive = createEventDispatcher();

  function checkActive(state) {
    if(state === active) {
      return -1;
    }else{
      return i;
    }
  }

</script>
<div class="pt-6">
  <dt class="text-lg min-w-full">
    <!-- Expand/collapse question button -->
    <button type="button" on:click="{() => setActive('activeState', checkActive(i))}" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-{i}" aria-expanded="{active ? 'false' : 'true'}">
      <span class="hover-state ... {active == i ? 'text-gray-800 font-bold' : 'font-medium text-gray-500'}">
        {item.question}
      </span>
      <span class="ml-6 h-7 flex items-center">
        <svg viewBox="0 0 10 7" class="h-3.5 w-3.5 transform ... {active == i ? 'rotate-0' : '-rotate-180'}" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
      </span>
    </button>
  </dt>
  {#if active == i}
  <dd transition:slide class="mt-2 pr-12" id="faq-{i}">
    <p class="text-base text-gray-500">
      {item.answer}
    </p>
  </dd>
  {/if}
</div>