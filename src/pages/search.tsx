import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import client from "../gql/client";
import AnimeCard from "./components/AnimeCard";

const Search: NextPage<{ animes: any[] }> = ({ animes }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await client.query({
    query: gql`
      query ($search: String) {
        Page {
          media(
            sort: POPULARITY_DESC
            type: ANIME
            search: $search
            isAdult: false
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
      search: query.q,
    },
  });

  return {
    props: {
      animes: data.Page.media,
    },
  };
};

export default Search;
