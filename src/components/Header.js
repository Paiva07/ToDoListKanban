import React from 'react';
import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.Header}>
      <p className={style.Para}>TodoList Kanban</p>
    </div>
  );
};

export default Header;
