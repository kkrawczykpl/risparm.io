
export const getEnvironment = (): string => {
    const { REACT_APP_ENVIRONMENT } = process.env;

    if(REACT_APP_ENVIRONMENT === 'development' || REACT_APP_ENVIRONMENT === 'production') {
        return REACT_APP_ENVIRONMENT;
    }
    return 'development';
}

export const isDevelopment = (): boolean => {
    return getEnvironment() === 'development';
}