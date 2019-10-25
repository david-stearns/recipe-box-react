function getStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    i < rating ? (stars += "\u2605") : (stars += "\u2606");
  }
  return stars;
}

export { getStars };
