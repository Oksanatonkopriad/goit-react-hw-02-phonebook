import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contact, filteredContent, handleDelete }) => {
    const filteredContacts = contact.filter(({ name }) =>
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
    ContactList: PropTypes.array.isRequired,
    filteredContent: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

