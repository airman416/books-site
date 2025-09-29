<script lang="ts">
  import { onMount } from 'svelte';
  
  let element: HTMLDivElement;
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
</script>

<div 
  bind:this={element}
  class="scroll-reveal"
  class:visible={isVisible}
>
  <slot />
</div>

<style>
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
