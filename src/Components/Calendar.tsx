import React from 'react';
import '../assets/styles/Calendar.css';

const Calendar: React.FC = () => {
    const days = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28],
        [29, 30, 31],
    ];

    const specialDays = {
        mentorNotes: [4, 19, 20, 21],
        adminDates: [9],
        payments: [] as number[],
        assignments: [] as number[],
    };

    const renderDay = (day: number, dayIndex: number) => {
        if (specialDays.mentorNotes.includes(day)) {
            return <div key={dayIndex} className="day mentor">{day}</div>;
        } else if (specialDays.adminDates.includes(day)) {
            return <div key={dayIndex} className="day admin">{day}</div>;
        } else if (specialDays.payments.includes(day)) {
            return <div key={dayIndex} className="day payment">{day}</div>;
        } else if (specialDays.assignments.includes(day)) {
            return <div key={dayIndex} className="day assignment">{day}</div>;
        }
        return <div key={dayIndex} className="day">{day}</div>;
    };


    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <div className="calendar-title">Calendar</div>
            </div>
            <div className="calendar-body">
                <div className="calendar-controls">
                    <span>&lt;</span>
                    <span>Month Year</span>
                    <span>&gt;</span>
                </div>
                <div className="calendar-grid">
                    {['DAY', 'DAY', 'DAY', 'DAY', 'DAY', 'DAY', 'DAY'].map((day, index) => (
                        <div key={index} className="calendar-day-header">{day}</div>
                    ))}
                    {days.map((week, weekIndex) => (
                        week.map((day, dayIndex) => renderDay(day, dayIndex))
                    ))}
                </div>
            </div>
            <div className="calendar-legend">
                <div className="legend-item">
                    <div className="legend-color mentor"></div> Mentor notes
                </div>
                <div className="legend-item">
                    <div className="legend-color admin"></div> Administrative dates
                </div>
                <div className="legend-item">
                    <div className="legend-color payment"></div> Payments
                </div>
                <div className="legend-item">
                    <div className="legend-color assignment"></div> Assignments/Work
                </div>
            </div>
        </div>
    );
};

export default Calendar;
