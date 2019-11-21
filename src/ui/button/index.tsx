import React, {ReactNode} from 'react';
import './style.scss';

interface IButton {
    handleClick(): void;
    children: ReactNode;
}

const Button: React.FC<IButton> = ({handleClick, children}) => (
    <button onClick={handleClick} className="button" type="button">
        {children}
    </button>
);

export default Button;
