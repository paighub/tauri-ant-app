import React, { createContext, useContext, useState, useEffect } from 'react';
import { invoke } from "@tauri-apps/api/core";

interface VersionContextProps {
    version: string | null;
    setVersion: (version: string) => void;
}

const VersionContext = createContext<VersionContextProps | undefined>(undefined);

export const VersionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [version, setVersion] = useState<string | null>(null);

    useEffect(() => {
        console.log('Fetching version...');
        invoke<string>('version')
            .then((res) => setVersion(res))
            .catch((err) => console.error('Failed to fetch version:', err));
    }, []);

    return (
        <VersionContext.Provider value={{ version, setVersion }}>
            {children}
        </VersionContext.Provider>
    );
};

export const useVersion = (): VersionContextProps => {
    const context = useContext(VersionContext);
    if (!context) {
        throw new Error('useVersion must be used within a VersionProvider');
    }
    return context;
};