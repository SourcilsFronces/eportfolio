import React from 'react';
import Layout from '../components/Layout';

const Sustainability = () => {
    return (
        <Layout>
            <div className="page-container" style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>
                    Sustainability & Civic Engagement
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    My commitment to sustainability and civic activities.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        borderLeft: '4px solid var(--accent-color)'
                    }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Volunteering</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Description of volunteering activities and impact.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Sustainability;
