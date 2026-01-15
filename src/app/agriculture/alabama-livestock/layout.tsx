import React from 'react';
import { AgricultureNav } from "@/components/agriculture-nav";

export default function AlabamaLivestockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AgricultureNav />
      <div className="pt-16">
        {children}
      </div>
    </>
  );
}
