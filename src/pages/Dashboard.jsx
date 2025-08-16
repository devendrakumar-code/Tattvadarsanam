```javascript
import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Dashboard.css';

const Dashboard = () => {
  const [milestoneReached, setMilestoneReached] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleMilestoneClick = () => {
    setMilestoneReached(true);
    setTimeout(() => setMilestoneReached(false), 3000); // Reset after 3 seconds
  };

  const handleUploadClick = () => {
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="dashboard-container">
      <h1>Creator Dashboard</h1>
      {milestoneReached && (
        <div className="milestone-celebration" role="alert" aria-live="assertive">
          🎉 Milestone Reached! 🎉
        </div>
      )}
      {uploadSuccess && (
        <div className="upload-success-toast" role="alert" aria-live="assertive">
          <span className="checkmark">✔</span> Content uploaded successfully!
        </div>
      )}
      <div className="dashboard-grid">
        <Card className="dashboard-card">
          <h3>Follower Growth</h3>
          <p className="metric">100 / 1,000</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '10%' }}></div>
          </div>
        </Card>
        <Card className="dashboard-card">
          <h3>Weekly Posting Streak</h3>
          <p className="metric">5 Weeks</p>
          <div className="streak-container">
            <span className="streak-emoji">🔥🔥🔥🔥🔥</span>
          </div>
        </Card>
        <Card className="dashboard-card">
          <h3>Profile Completion</h3>
          <p className="metric">75%</p>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </Card>
        <Card className="dashboard-card">
            <h3>Total Views</h3>
            <p className="metric">12,345</p>
        </Card>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <Button onClick={handleMilestoneClick}>Simulate Milestone</Button>
        <Button onClick={handleUploadClick}>Simulate Upload</Button>
      </div>
    </div>
  );
};

export default Dashboard;
```
