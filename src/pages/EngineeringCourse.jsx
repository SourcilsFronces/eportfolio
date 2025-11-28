import React from 'react';
import Layout from '../components/Layout';

const EngineeringCourse = () => {
    return (
        <Layout>
            <div className="page-container" style={{ padding: '2rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--accent-color)', display: 'inline-block' }}>
                    Engineering Course
                </h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Here are the various academic projects I have worked on during my time at ENSEEIHT.
                </p>

                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Project Card Placeholder */}
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={{
                            backgroundColor: 'var(--bg-secondary)',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)'
                        }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Project Title {item}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                Brief description of the project, technologies used, and the outcome.
                            </p>
                            <button style={{
                                color: 'var(--accent-color)',
                                fontWeight: 'bold',
                                borderBottom: '1px solid var(--accent-color)'
                            }}>
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default EngineeringCourse;
