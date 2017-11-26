import React from 'react';

const Todoitem = (props: {text: string, index: number, onItemClick: Function}) => {

  const handleClick = () => {
        // 從props.onItemClick傳入
        props.onItemClick(props.index);
    };

  return <li onClick={handleClick}>{props.text}</li>;
};

// 匯出TodoItem模組
export default Todoitem;
