import React from 'react';
import '../assets/styles/StepsToFollow.css';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { AiFillExclamationCircle } from 'react-icons/ai';

const StepsToFollow: React.FC = () => {
    return (
        <div className="steps-container">
            <h3 className="steps-header">Steps to follow</h3>

            <div className="step">
                <li>
                    Select a Program
                </li>
                <div style={{ marginLeft: 20 }}>
                    <p>Your current Program is: <strong>Program Name</strong></p>
                    <p>Note: To change your current program please contact us</p>
                </div>
                <FaCheckCircle className="step-icon" />
            </div>

            <div className="step">
                <li>
                    Mock Test
                </li>
                <div style={{ marginLeft: 20 }}>
                    <p>Download the Mock Test <button className="button-link">Here</button></p>
                    <div className="warning">
                        <FaExclamationTriangle className="warning-icon" />
                        <p><strong>Important:</strong> Ensure you complete the mock test before taking the Wonderlic Test</p>
                    </div>
                </div>
                <FaCheckCircle className="step-icon" />
            </div>

            <div className="step">
                <li>
                    Complete Text
                </li>
                <div style={{ marginLeft: 20 }}>

                    <p>Access the Wonderlic Test (*) by clicking <button className="button-link">Here</button></p>
                </div>
                <div className="divider">
                    <span>Or</span>
                </div>
                <div style={{ marginLeft: 20 }}>
                    <p>In case you have the OSSD, please upload here (if applicable)</p>
                    <div className="buttons">
                        <button className="button-upload">Upload</button>
                        <button className="button-submit" disabled>Submit</button>
                    </div>
                </div>
                <MdRadioButtonUnchecked className="step-icon no-color" />

            </div>

            <div className="step">
                <li>
                    OSAP
                </li>
                <div style={{ marginLeft: 20 }}>
                    <p>This field will be updated automatically upon receipt of the response to your application.</p>
                    <div className="warning">
                        <FaExclamationTriangle className="warning-icon" />
                        <p><strong>More documents are required.</strong> Please review your OSAP application</p>
                    </div>
                    <button className="button-osap">Go to OSAP Portal</button>
                </div>
                <AiFillExclamationCircle className="step-icon orange-icon" />

            </div>

            <div className="step">
                <li>Sign Contract</li>
                <div style={{ marginLeft: 20 }}>

                    <p>Please download the contract by clicking <strong>here</strong>. Once you have reviewed and signed the document, upload the signed contract using the upload button below.</p>
                    <div className="buttons">
                        <button className="button-upload-contract">Upload</button>
                        <button className="button-submit" disabled>Submit</button>
                    </div>
                </div>
                <MdRadioButtonUnchecked className="step-icon no-color" />

            </div>

            <p className="disclaimer">*Available only after taking the Mock test</p>
        </div>
    );
};

export default StepsToFollow;
