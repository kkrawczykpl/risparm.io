import * as React from 'react';
import { Link } from 'react-navi';
import './Logo.scss';

export interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({className}: LogoProps) => {
  return (
      <h1 className={`main-logo ${className ? className : ''}`}><Link href="/">RisparmIO</Link></h1>
  );
}