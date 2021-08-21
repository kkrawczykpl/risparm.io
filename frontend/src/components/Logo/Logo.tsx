import * as React from 'react';
import './Logo.scss';

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({className}: LogoProps) => {
  return (
      <h1 className={`main-logo ${className ? className : ''}`}><a href="/">RisparmIO</a></h1>
  );
}