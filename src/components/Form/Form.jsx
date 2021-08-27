import { useEffect, useState } from "react";
import {
  WrapperForm,
  BtnAdd,
  BtnText,
  Container,
  Input,
  InputTitle,
} from "./Form.styles";
import { BsFillPersonPlusFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/phonebook/phonebook-operations";
import { gsap, Power3 } from "gsap";
import { useRef } from "react";

function Form() {
  const dispatch = useDispatch();

  let form = useRef(null);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    gsap.fromTo(
      form,
      1,
      {
        x: -1800,
        opacity: 0,
        ease: Power3.easeInOut(),
        rotate: 360,
      },
      {
        x: 0,
        opacity: 1,
        backgroundColor: "#dbd8eb",
        rotate: 720,
      }
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addContacts({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <div ref={(el) => (form = el)}>
        <WrapperForm>
          <form onSubmit={handleSubmit}>
            <Container>
              <label>
                <InputTitle>Name</InputTitle>
                <Input
                  type="text"
                  name="name"
                  value={name}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={handleInputChange}
                />
              </label>
            </Container>

            <Container>
              <label>
                <InputTitle>Number</InputTitle>
                <Input
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
                        круглые скобки и может начинаться с +"
                  required
                  onChange={handleInputChange}
                />
              </label>
            </Container>

            <BtnAdd type="submit">
              <BtnText>Add contact</BtnText>
              <BsFillPersonPlusFill size={16} />
            </BtnAdd>
          </form>
        </WrapperForm>
      </div>
    </div>
  );
}

export default Form;
