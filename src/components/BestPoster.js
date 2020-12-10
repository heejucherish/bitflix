import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiStarSmileLine } from "react-icons/ri";

const Container = styled.div`
  font-size: 20px;
`;

const Image = styled.div`
  background-image: url(${(props) => `${props.bgUrl}`});
  height: 500px;
  background-size: cover;
  position: relative;
  background-position: center center;
  width: 250%;
  text-align: center;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 12px;

  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.1;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w1280${imageUrl}`
              : require("../assets/noPosterSmall.png")
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <RiStarSmileLine />
      <Title>
        {title.length > 15 ? `${title.substring(0, 15)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
