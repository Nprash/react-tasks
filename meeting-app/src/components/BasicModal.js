import React from 'react';
import "./BasicModal.css";
import { useState } from 'react';

const BasicModal = () => {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <button className="btn-modal"></button>
        </div>
    )
}

export default BasicModal
