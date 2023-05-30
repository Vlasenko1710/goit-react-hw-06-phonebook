
import { TiDelete } from 'react-icons/ti';
import { ContactItemBtn } from './Contact.styled';
export const Contact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <ContactItemBtn aria-label="Delete" onClick={() => onDelete(id)}>
        <TiDelete />
      </ContactItemBtn>
    </>
  );
};

