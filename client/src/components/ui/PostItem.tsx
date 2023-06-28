import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import type { PostType } from '../../types';

export type PostProps = {
  post: PostType;
};

export default function PostItem({ post }: PostProps): JSX.Element {
  return (
    <Col xs={12} md={6} lg={4} className="mb-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <Card.Img
            style={{ height: '300px', objectFit: 'cover' }}
            variant="top"
            src={`http://localhost:3001/img/${post.img}`}
          />
          <Card.Body>
            <Card.Text>{post.title}</Card.Text>
          </Card.Body>
        </Card>
        <Button variant="danger" className="mt-2">
          Delete
        </Button>
      </motion.div>
    </Col>
  );
}
