import React from 'react';

interface Props {
  text: string;
  result: string;
}

class Result extends React.Component<Props> {
  render() {
    return <div id={this.props.result}>{this.props.text}</div>;
  }
}

export default Result;
