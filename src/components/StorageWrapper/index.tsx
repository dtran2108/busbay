import { Database, Storage } from "@ionic/storage";
import React, { Dispatch, ReactNode, SetStateAction, createContext, useContext } from "react"
import { useEffect, useState } from 'react';

const StorageWrapperContext = createContext<{
 db: any
}>({
  db: null
});



export const StorageWrapperProvider : React.FC<{children: ReactNode}> = ({children}) => {

    const [db, setDb] = useState<Database | null>(null);

    useEffect(() => {
  
      async function initDb() {
        const store = new Storage();
        const db = await store.create();
        setDb(db);
      }
  
      if(!db)
        initDb();
    }, []);
  
    return <StorageWrapperContext.Provider value={{db}}>
      {children}
    </StorageWrapperContext.Provider>
}

export const useLocalStorage = () => useContext(StorageWrapperContext)
