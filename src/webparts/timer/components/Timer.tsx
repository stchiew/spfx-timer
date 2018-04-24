import * as React from 'react';
import styles from './Timer.module.scss';
import { ITimerProps } from './ITimerProps';
import Clock from './Clock';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Timer extends React.Component<ITimerProps, {}> {
  public render(): React.ReactElement<ITimerProps> {
    return (
      <div className={ styles.timer }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>{escape(this.props.description)}</span>
              <Clock deadline={this.props.description} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
