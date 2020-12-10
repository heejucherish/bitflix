import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";
import BestPoster from "../../components/BestPoster";

const Container = styled.div`
  padding: 20px;
`;

const DetailPresenter = ({
  topRated,
  popular,
  airingtoday,
  error,
  loading,
}) => {
  return (
    <>
      <Helmet>
        <title>TV | Bitflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Section title="● 오늘 TOP5">
            <BestPoster
              key={popular[0].id}
              id={popular[0].id}
              title={popular[0].original_name}
              imageUrl={popular[0].poster_path}
              rating={popular[0].vote_average}
              isMovie={false}
              year={
                popular[0].first_air_date &&
                popular[0].first_air_date.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[1].id}
              id={popular[1].id}
              title={popular[1].original_name}
              imageUrl={popular[1].poster_path}
              rating={popular[1].vote_average}
              isMovie={false}
              year={
                popular[1].first_air_date &&
                popular[1].first_air_date.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[2].id}
              id={popular[2].id}
              title={popular[2].original_name}
              imageUrl={popular[2].poster_path}
              rating={popular[2].vote_average}
              isMovie={false}
              year={
                popular[2].first_air_date &&
                popular[2].first_air_date.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[3].id}
              id={popular[3].id}
              title={popular[3].original_name}
              imageUrl={popular[3].poster_path}
              rating={popular[3].vote_average}
              isMovie={false}
              year={
                popular[3].first_air_date &&
                popular[3].first_air_date.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[4].id}
              id={popular[4].id}
              title={popular[4].original_name}
              imageUrl={popular[4].poster_path}
              rating={popular[4].vote_average}
              isMovie={false}
              year={
                popular[4].first_air_date &&
                popular[4].first_air_date.substring(0, 4)
              }
            />
          </Section>
          {popular && popular.length > 0 && (
            <Section title="● 인기 방송">
              {popular.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  rating={tv.vote_average}
                  isMovie={false}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}

          {airingtoday && airingtoday.length > 0 && (
            <Section title="● 오늘 방영">
              {airingtoday.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  rating={tv.vote_average}
                  isMovie={false}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {topRated && topRated.length > 0 && (
            <Section title="● 최고 시청률">
              {topRated.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.original_name}
                  imageUrl={tv.poster_path}
                  rating={tv.vote_average}
                  isMovie={false}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};

export default DetailPresenter;
