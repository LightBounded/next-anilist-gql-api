import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import client from "../../gql/client";

const Anime: NextPage<{ anime: any }> = ({ anime }) => {
  return (
    <div>
      <div>{JSON.stringify(anime, null, 2)}</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: gql`
      query ($mediaId: Int) {
        Page {
          media(
            sort: POPULARITY_DESC
            type: ANIME
            isAdult: false
            id: $mediaId
          ) {
            id
            title {
              userPreferred
            }
            coverImage {
              extraLarge
            }
            episodes
          }
        }
      }
    `,
    variables: {
      mediaId: query.id,
    },
  });
  return {
    props: {
      anime: data,
    },
  };
};

export default Anime;
