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

</style>

<div class="form">
  <input type="text" class="name" bind:value={name} />
  <textarea class="text" bind:value={text} />
  <button on:click={submit}>Submit</button>
</div>
