<script>
  import { reviews, editing } from "./store";
  import { setReviews } from "./localStorage";
  import imgGen from "@dudadev/random-img";

  let name, text;

  editing.subscribe(idx => {
    if (idx != null) {
      name = $reviews[idx].name;
      text = $reviews[idx].text;
    }
  });

  function save() {
    reviews.update(r => {
      r[$editing].text = text;
      r[$editing].name = name;

      setReviews(JSON.stringify(r));

      return r;
    });

    editing.set(null);
  }

  function cancle() {
    editing.update(e => null);
  }
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 640px;
    margin-top: 30px;
  }
</style>

<div class="form">
  <input type="text" class="name" bind:value={name} placeholder="Name:" />
  <textarea class="text" bind:value={text} placeholder="Add your review..." />
  <div class="buttons">
    <button on:click={save}>Save</button>
    <button on:click={cancle}>Cancle</button>
  </div>
</div>
