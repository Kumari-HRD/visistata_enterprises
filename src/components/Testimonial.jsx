function Testimonial({ name, feedback }) {
  return (
    <div className="testimonial">
      <p>"{feedback}"</p>
      <h4>- {name}</h4>
    </div>
  );
}

export default Testimonial;
