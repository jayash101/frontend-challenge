const Name = ({ name, address }) => {
  return (
    <>
      <section className="flex flex-col items-center gap-1 font-['Inter']">
        <span className="text-xl font-medium text-white lg:text-2xl">
          {name}
        </span>
        <span className="text-sm font-bold tracking-wide text-[#DAF96A] lg:text-base">
          {address}
        </span>
      </section>
    </>
  );
};

export default Name;
