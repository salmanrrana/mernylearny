// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmail';

const FIELDS = [
  {
    label: 'Survey Title',
    name: 'title',
    noValueError: "Don't forget the Title. It grabs the audience!"
  },
  {
    label: 'Subject Line',
    name: 'subject',
    noValueError: 'Dont forget to add a Subject!'
  },
  {
    label: 'Email Body',
    name: 'body',
    noValueError: 'What are you going to ask your audience?'
  },
  {
    label: 'Recipient List',
    name: 'emails',
    noValueError:
      "Were'nt we supposed to send these to some folks? Oh yeah...let's add them!"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values =>
            console.log('the value is: ', values)
          )}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
