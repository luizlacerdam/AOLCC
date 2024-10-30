import React from 'react';
import '../assets/styles/ProgramDetailCard.css';

interface ProgramDetailCardProps {
    title: string;
    content: string;
    textAlign?: 'center' | 'left' | 'right';
}

const ProgramDetailCard: React.FC<ProgramDetailCardProps> = ({ title, content, textAlign = 'center' }) => {
    return (
        <div className="program-card" style={{ textAlign }}>
            <small className="program-card__subtitle">{title}</small>
            <h4 className="program-card__title">{content}</h4>
        </div>
    );
};

export default ProgramDetailCard;