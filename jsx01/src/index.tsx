import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './components/Counter';


interface CounterProps {
    name: string;
}

interface CounterState {
    count: number;
}


class Counter2 extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
      super(props);
      this.state = {
        count: 0,
      };
    }
  
    componentDidMount() {
      setInterval(this.increase, 1000);
    }
  
    increase = () => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }
  
    render() {
      const { name } = this.props;
      const { count } = this.state;
  
      return (
        <React.Fragment>
          <h1>{name} counter</h1>
          <div>count value: {count}</div>
        </React.Fragment>
      );
    }
}

ReactDOM.render(
    <Counter name='React' />,
    document.getElementById('app')
);