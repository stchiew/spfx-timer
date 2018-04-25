import * as React from 'react';
import IClockstate from './IClockState';
import styles from './Timer.module.scss';

export default class Clock extends React.Component<any,IClockstate> {

    public constructor(props) {
        super();
        this.state = {
            idays:0,
            ihours:0,
            iminutes:0,
            iseconds:0
        };
    }

    public componentWillMount() {
        //TODO get from webpart configuration
        this.getTimeUntil(this.props.deadline);
    }

    public componentDidMount(){
        setInterval(()=>this.getTimeUntil(this.props.deadline));
    }

    public leading0(num) {
        return num < 10 ? '0' + num: num ;
    }

    private getTimeUntil(deadline){
         const time = Date.parse(deadline) - Date.now();
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000*60*60)) % 24);
        const days = Math.floor((time/(1000*60*60*24)));

        this.setState({idays:days,ihours:hours,iminutes:minutes,iseconds:seconds});
    }

    public render(){

        return(
            <div>
                <div className={ styles.clockdiv } >
                    <div>
                        <span >{this.leading0(this.state.idays)}</span>
                        <div className={ styles.smalltext }>days</div>
                    </div>
                    <div>
                        <span>{this.leading0(this.state.ihours)} </span>
                        <div className={ styles.smalltext}>hrs</div>
                    </div>
                    <div>
                        <span>{this.leading0(this.state.iminutes)} </span>
                        <div className={ styles.smalltext}>min</div>
                    </div>
                    <div>
                        <span>{this.leading0(this.state.iseconds)} </span>
                        <div className={ styles.smalltext}>sec</div>
                    </div>
                </div>
            </div>
        );
    }
}
