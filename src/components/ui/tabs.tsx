import React from 'react';

const Tabs = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const TabsList = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const TabsTrigger = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

const TabsContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
