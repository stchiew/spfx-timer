import * as React from 'react';
import styles from './Timer.module.scss';
import { ITimerProps } from './ITimerProps';
import Clock from './Clock';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Timer extends React.Component<ITimerProps, {}> {
  
  public render(): React.ReactElement<ITimerProps> {
    let odisplayValue:any = "";
    
    if(this.props.idatetime==null) {
      odisplayValue = "2018-12-25";
    } else {odisplayValue=this.props.idatetime.displayValue}
    return (
      <div className={ styles.timer }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{escape(this.props.description)}</span>
              <Clock deadline={odisplayValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
