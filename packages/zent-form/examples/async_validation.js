/* eslint-disable no-console */

import React, { Component } from 'react';
import { Form, Field, createForm, InputField } from '../src';
import '../assets/index.scss';
import 'zent-input/assets/index.scss';

class FieldsForm extends Component {

  submit = (values) => {
    const zentForm = this.props.zentForm;

    console.log(values);
    console.log(zentForm);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit(this.submit)} horizontal>
        <Field
          name="name"
          type="text"
          label="用户名："
          value=""
          validations={{ required: true }}
          validationErrors={{ required: '不能为空' }}
          component={InputField}
          asyncValidation={(values, value) => {
            const promise = new Promise((resolve) => setTimeout(resolve, 1000));
            return promise.then(() => {
              if (value === 'pangxie') {
                throw '用户名已被占用'; // eslint-disable-line
              }
            });
          }}
        />
        <Field
          name="password"
          type="password"
          label="密码："
          value=""
          validations={{
            required: true
          }}
          validationErrors={{
            required: '不能为空'
          }}
          component={InputField}
        />
        <div className="zent-form__form-actions">
          <button type="submit">提交</button>
        </div>
      </Form>
    );
  }
}

const FieldsFormContainer = createForm()(FieldsForm);

export default class Simple extends Component {
  render() {
    return (
      <div>
        <h2>异步校验</h2>
        <hr />
        <FieldsFormContainer />
      </div>
    );
  }
}