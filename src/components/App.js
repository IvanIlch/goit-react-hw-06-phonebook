import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactForm from "./form/Form";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import Layout from "./layuot/Layout";
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          {(stage) => {
            return (
              <>
                <h1 className={styles.title}>Phonebook</h1>
                <CSSTransition
                  in={stage === "entered"}
                  appear={true}
                  timeout={500}
                  classNames={styles}
                  unmountOnExit
                >
                  <ContactForm addToContacts={this.addToContacts} />
                </CSSTransition>
                <CSSTransition
                  in={stage === "entered"}
                  appear={true}
                  timeout={500}
                  classNames={styles}
                  unmountOnExit
                >
                  <>
                    <h2 className={styles.title}>Contacts</h2>
                    <CSSTransition
                      in={true}
                      appear={true}
                      timeout={500}
                      classNames={styles}
                      unmountOnExit
                    >
                      <Filter />
                    </CSSTransition>
                    <CSSTransition
                      in={true}
                      appear={true}
                      timeout={500}
                      classNames={styles}
                      unmountOnExit
                    >
                      <ContactList
                      // visibleContact={visibleContact}
                      // onDelete={this.onDelete}
                      />
                    </CSSTransition>
                  </>
                </CSSTransition>
              </>
            );
          }}
        </CSSTransition>
      </Layout>
    );
  }
}
