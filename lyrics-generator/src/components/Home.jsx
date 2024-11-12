import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";

const Home = () => {
  const data = useSelector((state) => state.song);

  data.loading && <h1 className="text-5xl font-bold text-black">Loading...</h1>;

  return (
    <>
      <section className="flex min-h-screen w-full flex-col items-center gap-10 bg-black py-16 font-['Inter']">
        <h1 className="text-4xl font-bold text-blue-500">Lyrics Generator</h1>
        <Form />

        {data.lyrics.lyrics && (
          <div className="flex flex-col items-center gap-4 mt-4 text-white">
            <h2 className="text-3xl font-bold text-yellow-300 capitalize">{data.songs}</h2>
            <p className="text-sm italic tracking-wider">
              {" "}
              - By{" "}
              {data.artist && (
                <span className="text-blue-300 capitalize">{data.artist}</span>
              )}
            </p>
            <pre className="h-[30vh] w-[40vw] overflow-y-auto overflow-x-hidden text-center font-['Inter'] tracking-normal text-white [text-shadow:0_0_0.5vw_red]">
              {data.lyrics.lyrics}
            </pre>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
