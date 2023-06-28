import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from '../ui/PostForm';
import PostItem from '../ui/PostItem';
import { useAppSelector } from '../../features/redux/reduxHooks';

export default function PostsPage(): JSX.Element {
  const posts = useAppSelector((state) => state.posts);
  return (
    <>
      <Row className="mt-2">
        <Col>
          <PostForm />
        </Col>
      </Row>
      <Row className="mt-2">
        {posts.data.map((el) => (
          <PostItem key={el.id} post={el} />
        ))}
      </Row>
    </>
  );
}
