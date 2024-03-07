// PopupContext.tsx

import React, { createContext, useContext, ReactNode, useState } from 'react';

interface PopupContextProps {
  children: ReactNode;
}

interface PopupContextValue {
  isPopupOpen: boolean;
  openPopup: (content?: React.ReactNode) => void;
  closePopup: () => void;
  popupContent: React.ReactNode | null;
}

export const PopupContext = createContext<PopupContextValue | undefined>(undefined);

export const PopupProvider: React.FC<PopupContextProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(null);

  const openPopup = (content?: React.ReactNode) => {
    setIsPopupOpen(true);
    setPopupContent(content || null);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent(null);
  };

  const contextValue: PopupContextValue = {
    isPopupOpen,
    openPopup,
    closePopup,
    popupContent,
  };

  return <PopupContext.Provider value={contextValue}>{children}</PopupContext.Provider>;
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
