import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import ContactsView from '../components/Contacts/Contacts';
import Section from '../components/Section/Section';

function Contacts() {
  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsView />
      </Section>
    </div>
  );
}

export default Contacts;
