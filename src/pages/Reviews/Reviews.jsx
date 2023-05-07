import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/Api';
import { Author, Content, Item, Review } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <Review>
          {reviews.map(review => (
            <Item key={review.id}>
              <Author>{review.author}:</Author>
              <Content>{review.content}:</Content>
            </Item>
          ))}
        </Review>
      ) : (
        <Content>We don't have any reviews for this movie.</Content>
      )}
    </>
  );
};
export default Reviews;
