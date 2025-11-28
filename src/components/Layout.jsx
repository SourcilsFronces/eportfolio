import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </main>
            <footer style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                borderTop: '1px solid var(--border-color)',
                marginTop: '4rem'
            }}>
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
