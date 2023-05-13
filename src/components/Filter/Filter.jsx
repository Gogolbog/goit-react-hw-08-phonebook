import { H2, Input, Label } from 'components/ContactForm/ContactFormStyled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <>
      <H2>Contacts</H2>
      <Label htmlFor="filter">
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filteredContacts(e.target.value))}
        />
      </Label>
    </>
  );
};
