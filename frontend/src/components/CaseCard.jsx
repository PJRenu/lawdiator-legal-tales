import React from 'react';

const CaseCard = ({ caseItem }) => {
    return (
        <div className="case-card">
            <h3>{caseItem.title} ({caseItem.year})</h3>
            <p>{caseItem.content}</p>
            <div className="relevance">
                Relevance: {(caseItem.similarity * 100).toFixed(1)}%
            </div>
        </div>
    );
};

export default CaseCard;