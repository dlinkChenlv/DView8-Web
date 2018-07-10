import React, { Component } from 'react';
import { Tabs, Button } from 'antd';
import './index.less';
import Organization from './Organization';
import MailServerSettings from './MailServerSettings';
import SMSServerSettings from './SMSServerSettings';
import ForwardTrap from './ForwardTrap';
import ForwardSyslog from './ForwardSyslog';
import RestAPI from './RestAPI';

const setings = [
  'Organization',
  'Mail Server Settings',
  'SMS Server Settings',
  'Forward Trap',
  'Forward Syslog',
  'REST API',
];

export default class BasicSettings extends Component {
  componentDidMount() {}

  render() {
    const { TabPane } = Tabs;
    function callback(key) {
      console.log(key);
    }
    // const listsettings = setings.map((setting, index) =>
    //   <TabPane tab={setting} key={index}>
    //     <Organization/>
    //   </TabPane>
    // );
    return (
      <Tabs defaultActiveKey="0" onChange={callback} type="card">
        <TabPane tab={setings[0]} key="0">
          <Organization />
        </TabPane>
        <TabPane tab={setings[1]} key="1">
          <MailServerSettings />
        </TabPane>
        <TabPane tab={setings[2]} key="2">
          <SMSServerSettings />
        </TabPane>
        <TabPane tab={setings[3]} key="3">
          <ForwardTrap />
        </TabPane>
        <TabPane tab={setings[4]} key="4">
          <ForwardSyslog />
        </TabPane>
        <TabPane tab={setings[5]} key="5">
          <RestAPI />
        </TabPane>
      </Tabs>
    );
  }
}
