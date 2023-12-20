import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);  

  const onChangeFilter = ({ currentTarget: { value } }) => {
    const newValue = value.toLowerCase();
    dispatch(changeFilter(newValue));
  };
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </>
  );
};

export default Filter;