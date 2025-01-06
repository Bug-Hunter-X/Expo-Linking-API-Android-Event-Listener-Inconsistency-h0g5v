# Expo Linking API Android Event Listener Inconsistency

This repository demonstrates a bug in Expo's `Linking` API on Android.  The `Linking.addEventListener` does not reliably fire when a deep link is tapped while the app is already open.  This issue affects both foreground and background app states.

## Problem Description

The `Linking.addEventListener` function, intended to listen for deep link events, sometimes fails to trigger the event handler when the app is already running. This inconsistency makes it difficult to handle deep links reliably across different scenarios.

## Reproduction Steps

1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Observe that deep links are handled correctly only when the app is initially launched via a deep link.
4. Navigate to another app and return to this app and try tapping the deep link.

## Solution

The provided solution implements a workaround involving checking for initial URL on app mount. It then handles potential deep links accordingly. A more robust solution is awaited from the Expo team.  The main difference from the original code is found in `App.js` file which now handles the URL checking and deep link handling.