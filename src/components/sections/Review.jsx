import ReviewCard from "../snippets/ReviewCard";

function Reviews() {
  return (
    <>
      <section id="reviews">
        <div>
        <h4 className="top reviewHead"> Customer Reviews </h4>
        </div>
        <div id="reviewWrapper">

          <ReviewCard
            src="/images/Avatar/woman1.jpg"
            text="The insights were detailed and actionable, helping us make informed decisions that have already started to pay off."
            name="Linda"
            role="Customer"
          />
          <ReviewCard
            src="/images/Avatar/man2.jpg"
            text=" I highly recommend Sir-B Connect Integrated Services for anyone in need of reliable and thorough research."
            name="Greg"
            role="Customer"
          />

          <ReviewCard
            src="/images/Avatar/man1.jpg"
            text="Sir-B Connect Integrated Services provided us with detailed and actionable market analysis. Their insights were crucial for our strategic planning, and the customer service was exceptional. Highly recommend!"
            name="Jason"
            role="Customer"
          />
        </div>
      </section>
    </>
  );
}

export default Reviews;
