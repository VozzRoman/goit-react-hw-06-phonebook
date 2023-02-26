import { ContactList } from './ContcatList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Background } from './Container/Background';
import { Box } from './Container/Box';

export const App = () => {
  return (
    <Background>
      <Box
        m="0 auto"
        maxWidth="500px"
        background="orange"
        borderRadius="12px"
        p="20px"
        boxShadow="3px 4px 6px #888888"
      >
        <h1>Phonebook</h1>
        <ContactForm />

        

        <>
          
          <Filter />
          <ContactList />
        </>
      </Box>
    </Background>
  );
};
