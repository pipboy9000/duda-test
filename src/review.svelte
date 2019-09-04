<script>
  import Icon from "fa-svelte";
  import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
  import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
  import { reviews } from "./store.js";

  export let review;

  function deleteReview() {
    reviews.update(reviews => {
      let rmIdx = reviews.indexOf(review);
      if (rmIdx > -1) {
        reviews.splice(rmIdx, 1);
      }
      return reviews;
    });
  }

  function editReview() {}
</script>

<style>
  .bg {
    font-family: "Poppins", sans-serif;
    background: white;
    width: 100%;
    max-width: 600px;
    display: flex;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .icons {
    top: 0;
    right: 0;
    width: 95px;
    height: 40px;
    position: absolute;
    background: transparent;
  }

  .icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .texts {
    display: inline-block;
  }

  h3 {
    margin: 0;
    margin-left: 15px;
  }

  .name {
  }

  .text {
    font-size: 15px;
    color: gray;
  }
</style>

<div class="bg">
  <img src={review.imgSrc} alt="pic" />
  <div class="texts">
    <h3 class="name">{review.name}</h3>
    <h3 class="text">{review.text}</h3>
  </div>

  <div class="icons">
    <div class="icon">
      <Icon icon={faPen} />
    </div>
    <div class="icon" on:click={deleteReview}>
      <Icon icon={faTrash} />
    </div>
  </div>
</div>
