const getServiceUrls = () => {
    const homeServiceUrl = `${process.env.REACT_APP_HOME}`;

    return {
        HOME_API_ENDPOINT: homeServiceUrl,
    };
};

export const { HOME_API_ENDPOINT } = getServiceUrls();
