import React from 'react';
import {
  History
} from 'history';

interface ICreateWallet {
  history: History
}

export default class Recovery extends React.Component<ICreateWallet> {
  public render() {
    return (
      <div>
        <h2>Recovery</h2>
        <button>input mnemonic</button>
        <button onClick={() => this.props.history.goBack()}>back to menu</button>
      </div>
    );
  }
}
