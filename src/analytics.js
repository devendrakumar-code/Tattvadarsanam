```javascript
import * as amplitude from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = 'YOUR_AMPLITUDE_API_KEY'; // This should be stored in an environment variable

export const initAmplitude = () => {
  amplitude.init(AMPLITUDE_API_KEY, undefined, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: true,
      fileDownloads: true,
    },
  });
};

export const trackEvent = (eventName, eventProperties) => {
  amplitude.track(eventName, eventProperties);
};
```
