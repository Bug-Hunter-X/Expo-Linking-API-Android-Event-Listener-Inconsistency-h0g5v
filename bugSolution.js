The solution involves checking for an initial URL on app mount and handling it separately.  This is done using `Linking.getInitialURLAsync()` within the `useEffect` hook.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

// ... rest of the app code

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURLAsync();
      setInitialUrl(url);
    };
    getInitialUrl();
    // Listen for deep links after getting initial URL
    const subscription = Linking.addEventListener('url', (event) => {
      console.log('Deep Link received:', event.url);
      // Handle the deep link
    });
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log('Initial URL:', initialUrl);
      // Handle the initial deep link
    }
  }, [initialUrl]);

  // ... rest of the app code
}
```
This modified approach ensures that deep links are handled correctly both when the app is first launched via a deep link and when it is already running.