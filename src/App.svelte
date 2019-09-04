<script>
  import { reviews, editing } from "./store";
  import AddReview from "./addReview.svelte";
  import EditReview from "./editReview.svelte";
  import Review from "./review.svelte";
</script>

<style>
  :global(body, html) {
    padding: 0;
    margin: 0;
    background: #eeeeee;
  }

  .app {
    background: #eeeeee;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-family: "Roboto Slab", serif;
    color: #839cbc;
  }
</style>

<div class="app">
  <h1>Reviews</h1>
  {#each $reviews as review, i}
    <Review {review} />
  {/each}

  {#if $editing == null}
    <AddReview />
  {:else}
    <EditReview />
  {/if}

</div>
