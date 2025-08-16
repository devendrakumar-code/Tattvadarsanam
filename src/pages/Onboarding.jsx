```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';
import { trackEvent } from '../analytics';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    trackEvent('Onboarding Started');
  }, []);

  const nextStep = () => {
    if (step === 2) {
      trackEvent('Goal Set', { goal });
    }
    setStep(step + 1);
  };

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const finishOnboarding = () => {
    trackEvent('Onboarding Completed');
    navigate('/feed');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card className="onboarding-step">
            <h2>Welcome to your Supportive Growth Partner!</h2>
            <p>Ready to start achieving your goals? Let's begin your journey.</p>
            <Button onClick={nextStep} variant="primary">Get Started</Button>
          </Card>
        );
      case 2:
        return (
          <Card className="onboarding-step">
            <h2>Define Your First Growth Objective</h2>
            <p>What is the first goal you want to work on?</p>
            <Input
              type="text"
              value={goal}
              onChange={handleGoalChange}
              placeholder="e.g., Learn a new skill"
            />
            <Button onClick={nextStep} disabled={!goal} variant="primary">
              Set Goal
            </Button>
          </Card>
        );
      case 3:
        return (
          <Card className="onboarding-step">
            <h2>Great!</h2>
            <p>You've set your first goal: <strong>{goal}</strong></p>
            <p className="reward-text">Here are some resources to get you started:</p>
            <ul className="reward-list">
              <li>Article: 5 Tips for Achieving Your Goals</li>
              <li>Video: The Science of Motivation</li>
            </ul>
            <Button onClick={finishOnboarding} variant="primary">
              Go to Dashboard
            </Button>
          </Card>
        );
      default:
        return null;
    }
  };

  return <div className="onboarding-container">{renderStep()}</div>;
};

export default Onboarding;
```
