import React, { Component } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Upload,
} from 'antd';
import classNames from 'classnames';
import styles from './index.less';
import { getTimeDistance } from '../../../../utils/utils';

const Option = Select.Option;
const FormItem = Form.Item;
class org extends Component {
  // this.props = props
  state = {};

  // const { getFieldDecorator } = this.props.form;
  render() {
    console.log(this.props);
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const handleSubmit = e => {
      e.preventDefault();
    };
    const orgHeader = classNames({});
    return (
      <div>
        <div className={orgHeader}>
          <span> Organization Settings </span>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormItem {...formItemLayout} label="Organization Name">
            <Input />
          </FormItem>
          <FormItem {...formItemLayout} label="Dragger">
            <div className="dropbox">
              {
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                </Upload.Dragger>
              }
            </div>
          </FormItem>
        </Form>
      </div>
    );
  }
}
const Organization = Form.create()(org);

export default Organization;
