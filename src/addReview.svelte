<script>
  import { reviews } from "./store";
  import { setReviews } from "./localStorage";
  import imgGen from "@dudadev/random-img";
  let name, text;

  async function submit() {
    let id = Math.floor(Math.random() * 96) + 1;
    let gender = Math.random() > 0.5 ? "women" : "men";
    let imgSrc = await imgGen({ gender, id });

    reviews.update(r => {
      r.push({
        id,
        gender,
        imgSrc,
        name,
        text
      });

      setReviews(JSON.stringify(r));

      return r;
    });

    name = "";
    text = "";
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
  <button on:click={submit}>Submit</button>
</div>
