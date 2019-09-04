function getReviews() {
  let reviews = localStorage.getItem("reviews");
  if (!reviews) {
    return [];
  }
  return JSON.parse(reviews);
}

function setReviews(r) {
  localStorage.setItem("reviews", r);
}

export { getReviews, setReviews };
