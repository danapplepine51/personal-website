import React, { useState, useContext, createContext } from 'react';
import type { SectionName } from '../lib/type';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType ={
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);


export default function ActiveSectionContextProvider({ children } : ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

//Custom hook to deal with null(when the function called outside)
export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    if (context == null){
        throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
    }
    return context;
}
