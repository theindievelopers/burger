import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      {props.label}
      <button className={classes.Less} onClick={props.remove} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>
  </div>
);

export default buildControl;