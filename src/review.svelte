<script>
  export let review;
</script>

<style>
  .bg {
    font-family: "Poppins", sans-serif;
    background: white;
    width: 100%;
    max-width: 600px;
  }
</style>

<div class="bg">
  <img src={review.imgSrc} alt="pic" />
  <h3>{review.name}</h3>
  <h3>{review.text}</h3>
</div>
