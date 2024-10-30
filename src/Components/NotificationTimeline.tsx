import React from 'react';
import '../assets/styles/NotificationTimeline.css';

const NotificationTimeline: React.FC = () => {
    const notifications = [
        {
            time: 'June 11th, 2024 3:00 PM',
            title: 'Documents Pending',
            description: 'More documents are required. Please review your OSAP application',
        },
        {
            time: 'June 11th, 2024 2:45 PM',
            title: 'OSAP Application Deadline',
            description: 'OSAP application is due on 06/05/2024. Please, ensure you submit all required documents.',
        },
    ];

    return (
        <div className="notification-container">
            <h3 className="notification-header">Notifications</h3>
            <div className="timeline">
                {notifications.map((notification, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <span className="timeline-time">{notification.time}</span>
                            <h4 className="timeline-title">{notification.title}</h4>
                            <p className="timeline-description">{notification.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationTimeline;
