import React from 'react';

interface TypeProps {
	title: string;
}

export const Type: React.FC<TypeProps> = ({ title }) => {
	return <div className="capitalize border-r-2">{title}</div>;
};
