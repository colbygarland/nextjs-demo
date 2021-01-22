import React from "react";
import Image from "next/image";
import { PageTitle } from "../components/PageTitle";

const Images = () => {
  return (
    <>
      <PageTitle>Images</PageTitle>
      <img className="mb-6" src="/images/background.jpg" alt="" />
      <Image src="/images/background.jpg" alt="" width={1110} height={700} />
    </>
  );
};

export default Images;
