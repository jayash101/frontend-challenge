import Image from "./Image";
import Name from "./Name";
import Description from "./Description";
import Button from "./Button";

const SocialLink = () => {
  return (
    <>
      <section className="container flex max-w-[70vw] flex-col items-center gap-4 rounded-lg bg-[#1F1F1F] px-6 py-6 lg:max-w-[25vw]">
        <Image src="/src/assets/images/_DSC7798.jpg"></Image>

        <Name name="Jayash Basnet" address="Lalitpur, Nepal" />

        <Description text="Front-end developer" />

        <Button link="GitHub" href="https://github.com/Jayash101" />
        <Button link="Frontend Mentor" href="https://frontendmentor.io" />
        <Button link="LinkedIn" href="https://linkedin.com" />
        <Button link="Twitter" href="https://twitter.com" />
        <Button link="Instagram" href="https://instagram.com" />
      </section>
    </>
  );
};

export default SocialLink;
