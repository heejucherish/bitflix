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

//Presentor의 역할: container으로 부터 받은 각종 이벤트나 상태 등을 화면에 적용 시키는 역할
// 이벤트나 데이터 같은 이야기가 있으면 안된다.

const HomePresenter = ({
  nowPlaying,
  upcoming,
  popular,
  topRated,
  error,
  loading,
}) => {
  return (
    <>
      <Helmet>
        <title>Movies | Bitflix</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Section title="● 오늘 TOP5">
            <BestPoster
              key={popular[0].id}
              id={popular[0].id}
              title={popular[0].original_title}
              imageUrl={popular[0].poster_path}
              rating={popular[0].vote_average}
              isMovie={true}
              year={
                popular[0].release_data &&
                popular[0].release_data.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[1].id}
              id={popular[1].id}
              title={popular[1].original_title}
              imageUrl={popular[1].poster_path}
              rating={popular[1].vote_average}
              isMovie={true}
              year={
                popular[1].release_data &&
                popular[1].release_data.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[2].id}
              id={popular[2].id}
              title={popular[2].original_title}
              imageUrl={popular[2].poster_path}
              rating={popular[2].vote_average}
              isMovie={true}
              year={
                popular[2].release_data &&
                popular[2].release_data.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[3].id}
              id={popular[3].id}
              title={popular[3].original_title}
              imageUrl={popular[3].poster_path}
              rating={popular[3].vote_average}
              isMovie={true}
              year={
                popular[3].release_data &&
                popular[3].release_data.substring(0, 4)
              }
            />
            <BestPoster
              key={popular[4].id}
              id={popular[4].id}
              title={popular[4].original_title}
              imageUrl={popular[4].poster_path}
              rating={popular[4].vote_average}
              isMovie={true}
              year={
                popular[4].release_data &&
                popular[4].release_data.substring(0, 4)
              }
            />
          </Section>
          {nowPlaying && nowPlaying.length > 0 && (
            <Section title="● 현재 상영작">
              {nowPlaying.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  isMovie={true}
                  year={
                    movie.release_data && movie.release_data.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          <Section title="● 인기 상영작 ">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_data && movie.release_data.substring(0, 4)}
              />
            ))}
          </Section>
          <Section title="● 상영 예정작 ">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_data && movie.release_data.substring(0, 4)}
              />
            ))}
          </Section>
          <Section title="● 높은평점 영화">
            {topRated.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_data && movie.release_data.substring(0, 4)}
              />
            ))}
          </Section>
          {error && <Message color={"e#74c3c"} text={error} />}
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
