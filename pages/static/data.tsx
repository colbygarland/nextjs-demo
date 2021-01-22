import React from "react";
import { PageTitle } from "../../components/PageTitle";

const ENDPOINT = "https://pensive-sinoussi-34f859.netlify.app";

const Data = ({ content, image }) => {
  return (
    <>
      <PageTitle>Statically Rendered Page - With Data</PageTitle>
      <img className="py-6" src={image} alt="Jamstack" />
      <p className="mb-2">{content}</p>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${ENDPOINT}/data.json`);
  const json = await res.json();
  const content = json.data.content;
  const image = json.data.image;

  return {
    props: {
      content,
      image,
    },
  };
}

export default Data;
