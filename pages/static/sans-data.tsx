import React from "react";
import { PageTitle } from "../../components/PageTitle";

const SansData = () => {
  return (
    <>
      <PageTitle>Statically Rendered Page - No Data</PageTitle>
      <img className="py-6" src="/images/jamstack.jpg" alt="Jamstack" />
      <p className="mb-2">
        All of the content on the page is rendered during build time, the HTML
        is generated at <strong>build time</strong>.
      </p>
      <h3 className="text-2xl font-bold my-3">Benefits:</h3>
      <ul className="list-disc px-8 mb-6">
        <li>static content, can be cached by a CDN</li>
        <li>no reliance on another API</li>
        <li>no waiting on a database</li>
        <li>seo</li>
      </ul>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        modi dolore officia atque, dolorum amet inventore qui sit non cumque,
        aut, totam molestias id recusandae. Tempora ullam esse sit atque.
      </p>
      <img className="py-6" src="/images/starwars.jpg" alt="Star Wars" />
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        modi dolore officia atque, dolorum amet inventore qui sit non cumque,
        aut, totam molestias id recusandae. Tempora ullam esse sit atque.
      </p>
    </>
  );
};

export default SansData;
