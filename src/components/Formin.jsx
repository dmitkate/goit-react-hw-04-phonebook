import css from '../components/formin.module.css';
import React, { Component } from 'react';

import { nanoid } from 'nanoid';
export class FormIn extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  formReset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ id: 'id-' + nanoid(2), [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.formReset();
  };

  render() {
    return (
      <>
        <form className={css.section} onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            Number
            <input
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </>
    );
  }
}
