import React from 'react';
import { generateOAuthURL } from '@/components/shared';
import './landing-page.scss';

const LandingPage = () => {
    const handleLogin = async () => {
        const oauthUrl = await generateOAuthURL();

        if (oauthUrl) {
            window.location.replace(oauthUrl);
        }
    };

    return (
        <div className="landing-page">
            <div className="ai-glow" />

            <div className="chart-animation">
                <div className="candle candle-1" />
                <div className="candle candle-2" />
                <div className="candle candle-3" />
                <div className="candle candle-4" />
                <div className="candle candle-5" />
            </div>

            <div className="landing-content">
                <h1>Trading Made Easy with AI</h1>

                <p>
                    Advanced Automation for Smarter Trading
                </p>

                <button onClick={handleLogin}>
                    Login with Deriv
                </button>
            </div>
        </div>
    );
};

export default LandingPage;
