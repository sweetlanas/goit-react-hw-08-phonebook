import { ContactTitle, InputFind } from "./Filter.styles";

import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import { filter } from "../../redux/phonebook/phonebook-actions";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <div>
      <ContactTitle>Find contacts by name</ContactTitle>
      <InputFind type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Filter;
