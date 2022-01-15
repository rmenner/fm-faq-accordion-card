<script>
  import { slide } from 'svelte/transition';
  export let item = {};
  export let i = 0;
  let active = i === 0;
</script>
<div class="pt-6">
  <dt class="text-lg">
    <!-- Expand/collapse question button -->
    <button type="button" on:click="{() => active = !active}" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
      <span class="font-medium text-gray-900">
        {item.question}
      </span>
      <span class="ml-6 h-7 flex items-center">
        <svg class="h-6 w-6 transform... {active ? 'rotate-0' : '-rotate-180'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
  </dt>
  {#if active }
  <dd transition:slide class="mt-2 pr-12" id="faq-0">
    <p class="text-base text-gray-500">
      {item.answer}
    </p>
  </dd>
  {/if}
</div>