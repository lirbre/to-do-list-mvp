import React from "react";
import {
  Container,
  ListItem,
  ListItemText,
  Wrapper,
  EditButton,
  DelButton,
  EmptyMessage,
} from "./styles";

const ListItems = ({ posts, delPost, editPost }) => {
  return (
    <Container>
      <Wrapper>
        {posts.length !== 0 ? (
          posts.map((post) => (
            <ListItem key={post.id}>
              <ListItemText>{post.postText}</ListItemText>
              <EditButton onClick={() => editPost(post)} />
              <DelButton onClick={() => delPost(post.id)} />
            </ListItem>
          ))
        ) : (
          <EmptyMessage>Não há nada adicionado.</EmptyMessage>
        )}
      </Wrapper>
    </Container>
  );
};

export default ListItems;
