import React from 'react';

const Table = ({ children }: { children: React.ReactNode }) => {
  return <table className="w-full">{children}</table>;
};

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <thead className="bg-gray-200">{children}</thead>;
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

const TableHead = ({ children }: { children: React.ReactNode }) => {
  return <th className="p-2">{children}</th>;
};

const TableBody = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

const TableCell = ({ children }: { children: React.ReactNode }) => {
  return <td className="p-2">{children}</td>;
};

const TableFooter = ({ children }: { children: React.ReactNode }) => {
  return <tfoot>{children}</tfoot>;
};

export { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter };
