import React from "react";
import "../styles/styles.css"; // Using the same CSS style

const testimonials = [
  { name: "Yash Y.", rating: 5, feedback: "Amazing Plants Highly recommended." },
  { name: "Ajay J.", rating: 4, feedback: "Great experience! Loved the Plant." },
  { name: "Raj M.", rating: 5, feedback: "Order placed at a time" },
  { name: "Om P.", rating: 4, feedback: "Fresh and good plant." },
  { name: "Vaibhavi J.", rating: 3, feedback: "I don't recive plant in good condition :( " },
  { name: "Pooja Y.", rating: 4, feedback: "Perfect shots! but delivery took a bit longer.." }
];

// Calculate average rating
const averageRating = (
  testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
).toFixed(1);

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h1>What Our Customers Say</h1>
      <p className="average-rating">⭐ {averageRating}/5 Average Rating</p>
      <div className="testimonials-list">
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial">
            <p className="customer-name">{review.name}</p>
            <p className="star-rating">{"⭐".repeat(review.rating)}</p>
            <p className="customer-feedback">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;