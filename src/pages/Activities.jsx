import React from 'react';
import Layout from '../components/Layout';

const Activities = () => {
    return (
        <Layout>
            <div className="page-container" style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>
                    Sport & Other Activities
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Hobbies, sports, and extracurricular interests.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Sport</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Details about sports practiced (e.g., Rugby, Tennis, etc.)
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'var(--bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Hobbies</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Photography, Music, Reading, etc.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Activities;
