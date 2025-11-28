import React from 'react';
import Layout from '../components/Layout';

const InternationalMobility = () => {
    return (
        <Layout>
            <div className="page-container" style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>
                    International Mobility
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    My experiences abroad and international exposure.
                </p>

                <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Study Abroad / Internship</h2>
                    <p style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Location & Date</p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Details about the university or company, cultural experiences, and skills acquired.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default InternationalMobility;
