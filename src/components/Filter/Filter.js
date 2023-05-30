
import { FilterLabel, FilterInput, FilterSpan } from './Filter.styled';

export const Filter = ({ filter, filterContacts }) => {
  const handleChange = e => {
    filterContacts(e.target.value);
  };
  return (
    <>
      <FilterLabel>
        <FilterSpan>Find contacts by name</FilterSpan>

        <FilterInput
          onChange={handleChange}
          value={filter}
          type="text"
          name="filter"
        />
      </FilterLabel>
    </>
  );
};

