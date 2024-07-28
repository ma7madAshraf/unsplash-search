import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useAppContext } from "../context";
const url = `https://api.unsplash.com/search/photos?page=1&client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useAppContext();
  const response = useQuery({
    queryKey: ["photos", searchTerm],
    queryFn: async () => {
      const res = await axios(`${url}&query=${searchTerm}`);
      return res.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>oops..there was an error </h4>
      </section>
    );
  }
  if (response.data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>no results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {response.data.results.map((e) => {
        const url = e?.urls?.regular;
        return (
          <img src={url} className="img" key={e.id} alt={e.alt_description} />
        );
      })}
    </section>
  );

  return <h2>Gallery</h2>;
};

export default Gallery;
