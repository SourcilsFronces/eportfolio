import React from 'react';
import Layout from '../components/Layout';

const Career = () => {
    return (
        <Layout>
            <div className="page-container" style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>
                    Career Development
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    My professional journey and future goals.
                </p>

                <div className="timeline" style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid var(--border-color)' }}>
                    {[
                        { year: '2025', title: 'Graduation', desc: 'Expected graduation from ENSEEIHT.' },
                        { year: '2024', title: 'Internship', desc: 'Summer internship at Tech Corp.' },
                        { year: '2022', title: 'Started Engineering School', desc: 'Admitted to ENSEEIHT.' }
                    ].map((item, index) => (
                        <div key={index} style={{ marginBottom: '3rem', position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                left: '-2.6rem',
                                top: '0',
                                width: '1.2rem',
                                height: '1.2rem',
                                backgroundColor: 'var(--accent-color)',
                                borderRadius: '50%',
                                border: '4px solid var(--bg-primary)'
                            }}></div>
                            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{item.year}</span>
                            <h3 style={{ color: 'var(--text-primary)', margin: '0.5rem 0' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Career;
