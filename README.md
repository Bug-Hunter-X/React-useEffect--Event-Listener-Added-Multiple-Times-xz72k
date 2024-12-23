# React useEffect: Event Listener Added Multiple Times

This example demonstrates a common mistake in React's `useEffect` hook: adding an event listener multiple times.  The problem stems from the event handler function (`handleResize`) being defined *inside* the `useEffect` callback.  This causes a new function to be created on every render, leading to multiple event listeners being attached.

**Problem:**  The `handleResize` function is recreated on each render, causing multiple event listeners to be registered. This can lead to performance issues and unexpected behavior.

**Solution:** Move the `handleResize` function outside the `useEffect` hook so it's only created once.  This ensures only one event listener is attached.