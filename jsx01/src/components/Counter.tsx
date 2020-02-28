import * as React from 'react';

interface CounterProps { // 제네릭 인자
    name: string;
}

// props 패키지 생성
const Counter: React.FC<CounterProps> = props => {  
  const { name } = props;
  return <p>{name} counter</p>
}

export default Counter;