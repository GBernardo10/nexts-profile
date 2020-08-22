import Prismic from "prismic-javascript";
import { DefaultClient } from "prismic-javascript/types/client";

const PrismicClient: DefaultClient = Prismic.client(
  `https://${process.env.PRISMIC_REPOSITORY_NAME}.prismic.io/api/v2`,
  {
    accessToken: process.env.PRISMIC_TOKEN,
  }
);

const GRAPHQL_API_URL = `https://${process.env.PRISMIC_REPOSITORY_NAME}.prismic.io/graphql`;

export const fetchAPI = async <T = any>(
  query: string,
  variables: Object
): Promise<T> => {
  const prismicApi = await PrismicClient.getApi();

  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": prismicApi.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": process.env.PRISMIC_LOCALE,
        Authorization: `Token ${process.env.PRISMIC_TOKEN}`,
      },
    }
  );

  const { data } = await res.json();
  return data;
};
