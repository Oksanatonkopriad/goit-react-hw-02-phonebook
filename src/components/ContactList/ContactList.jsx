import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filteredContent, handleDelete }) => {
    const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(filteredContent.toLowerCase()));
    
    return (
        <ul className={css.contacts__list}>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={css.contacts__item} key={id}>
                    <span className={css.contacts__name}>
                        {name} : {number}
                    </span>
                    <>
                        <button
                            className={css.contacts__btn}
                            type="button"
                            onClick={() => handleDelete(id)}>
                            Delete
                        </button>
                    </>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filteredContent: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

