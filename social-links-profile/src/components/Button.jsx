const Button = ({ link, href }) => {
  return (
    <a href={href} className="w-full">
      <button className="w-full rounded-md bg-white bg-opacity-10 px-2 py-3 font-['Inter'] text-sm font-bold transition-colors [transition-duration:400ms] hover:bg-[#DAF96A] hover:text-[#1F1F1F] hover:[transition-duration:300ms] active:bg-[#DAF96A] active:text-[#1F1F1F] lg:text-lg">
        {link}
      </button>
    </a>
  );
};

export default Button;
