import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const ForwardSyslog = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  ...rest
}) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <Button>ForwardSyslog</Button>
    </div>
  );
};

export default ForwardSyslog;
