import React from "react";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
    </div>
  );
}
