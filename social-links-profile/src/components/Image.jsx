const Image = ({ src, alt }) => {
  return (
    <section className="h-20 w-20 overflow-hidden rounded-full bg-white lg:h-40 lg:w-40">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </section>
  );
};

export default Image;
