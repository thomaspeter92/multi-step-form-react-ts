import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  variant: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({children, onClick, variant}) => {

  const btnVariant = variant === 'primary' ?  styles.primary 
                    : variant === 'secondary' ? styles.secondary 
                    : styles.primary

  return (
    <button className={`${styles.btn} ${btnVariant}`} type='button' onClick={onClick}>{children}</button>
  );
};

export default Button;