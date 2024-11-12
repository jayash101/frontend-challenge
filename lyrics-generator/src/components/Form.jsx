import React, { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchSong, getArtist, getSong } from "../store/songSlice";

const Form = () => {
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");

  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const submit = (formData) => {
    //  Send formData to API request
    dispatch(fetchSong(formData));
    dispatch(getArtist(formData.artist));
    dispatch(getSong(formData.songs));

    setArtistName("");
    setSongName("");
  };

  const onArtistChange = (event) => {
    setArtistName(event.target.value);
  };

  const onSongChange = (event) => {
    setSongName(event.target.value);
  };

  return (
    <form onClick={handleSubmit(submit)} className="flex w-1/5 flex-col gap-4">
      <input
        type="text"
        placeholder="Enter artist name..."
        {...register("artist", {
          required: true,
        })}
        className="bg-white py-2 indent-2 text-sm focus:text-blue-500 focus:outline-blue-500"
        onChange={onArtistChange}
        value={artistName}
      />

      <input
        type="text"
        placeholder="Enter song name..."
        {...register("songs", {
          required: true,
        })}
        className="bg-white py-2 indent-2 text-sm focus:text-blue-500 focus:outline-blue-500"
        onChange={onSongChange}
        value={songName}
      />

      <button
        type="submit"
        className="rounded-md bg-blue-500 py-2 text-sm text-white transition-all duration-300 hover:bg-blue-700 hover:transition-all hover:duration-300"
      >
        Generate lyrics
      </button>
    </form>
  );
};

export default forwardRef(Form);
