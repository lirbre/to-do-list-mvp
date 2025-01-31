import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  padding: 30px;
  margin-top: 40px;
  background: #191919;

  > h1 {
    color: #808080;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  gap: 12px;
`;

export const ListItemText = styled.p`
  color: #f2f2f2;
  margin-right: auto;
`;

export const EditButton = styled(FaEdit)`
  color: #808080;
  cursor: pointer;
  
  :hover {
    opacity: 90%;
  }
`;

export const DelButton = styled(FaTrash)`
  color: #808080;
  cursor: pointer;

  :hover {
    opacity: 90%;
  }
`;

export const EmptyMessage = styled.p`
  color: #808080;
`;
