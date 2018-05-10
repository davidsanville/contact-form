import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import './Form.css';

//add form state handling
//event handle

const ContactForm = () => (
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
      <label> Zip Code </label>
      <Text field="Zip Code" placeholder='90024' />
      <Checkbox field="agreesToTerms" />
      <button type="submit">Submit</button>
    </form>
  )} />
)

export default ContactForm;



//pseudo Code

//query all tutors "profile list"
  //filter zip code,
