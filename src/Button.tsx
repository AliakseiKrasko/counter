import React from 'react';

type ButtonProps = {
    onClick: () => void;
    disabled: boolean;
    text: string;
};

export const Button: React.FC<ButtonProps> = ({ onClick, disabled, text }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};