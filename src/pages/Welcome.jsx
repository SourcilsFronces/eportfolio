import React from 'react';
import Layout from '../components/Layout';

const Welcome = () => {
    return (
        <Layout>
            <div className="page-container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Welcome</h1>
                <div style={{
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '50%',
                    margin: '0 auto 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '4px solid var(--accent-color)'
                }}>
                    {/* Placeholder for user photo */}
                    <span style={{ color: 'var(--text-secondary)' }}>Photo</span>
                </div>

                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto 2rem',
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)'
                }}>
                    Hello! I'm an engineering student at ENSEEIHT. This is my e-portfolio where I showcase my projects,
                    international experiences, and career development.
                </p>

                <div className="contact-info" style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    maxWidth: '500px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>Contact Me</h2>
                    <p>Email: student@enseeiht.fr</p>
                    <p>LinkedIn: linkedin.com/in/student</p>
                    <p>Location: Toulouse, France</p>
                </div>
            </div>
        </Layout>
    );
};

export default Welcome;
