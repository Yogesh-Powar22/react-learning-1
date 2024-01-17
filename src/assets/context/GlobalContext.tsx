import { useState, createContext } from 'react';

type GlobalContext = {
    userName: any;
    setUserName: any;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GlobalContext = createContext({} as GlobalContext);

export const GlobalContextProvider = (props: any) => {
    const [userName, setUserName] = useState("yogesh");
    const { children } = props;

    return (
        <GlobalContext.Provider
            value={{
                userName,
                setUserName,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
