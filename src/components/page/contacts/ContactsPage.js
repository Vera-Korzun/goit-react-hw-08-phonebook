import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import LoaderSpinner from "../../loader/Loader";
import ContactForm from "../../contactForm/ContactForm";
import Filter from "../../filter/Filter";
import ContactList from "../../contactList/ContactList";
import { getContacts, loading } from "../../../redux/selectors/formSelectors";
import ContactsStyled from "./ContactsPageStyled";

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(loading);
  return (
    <ContactsStyled>
      {isLoading && <LoaderSpinner />}
      {/* <LoaderSpinner /> */}
      <CSSTransition in={true} timeout={500} appear={true} classNames="logo">
        <h2 className="phonebook-title">PhoneBook</h2>
      </CSSTransition>
      <ContactForm />
      <h2 className="phonebook-title-second">Contacts</h2>
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        appear={true}
        classNames="filter"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <ContactList />
    </ContactsStyled>
  );
};

export default ContactsPage;
