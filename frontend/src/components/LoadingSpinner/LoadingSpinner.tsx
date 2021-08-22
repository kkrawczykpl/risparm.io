import * as React from 'react';
import './LoadingSpinner.scss';

export interface LoadingSpinnerProps {
  isLoading: boolean;
  delay: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({isLoading, delay}: LoadingSpinnerProps) => {

  const [visible, setVisible] = React.useState(true);
  
  React.useEffect(() => {
    isLoading && setTimeout(() => {
      setVisible(false);
    }, delay)
  }, [isLoading, delay])

  return visible ? (
    <div className='loading-overlay'>
      <span className='loading-spinner'></span>
    </div>
  ) : null;
};
