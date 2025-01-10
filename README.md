# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by missing dependencies in the dependency array.

## Bug Description

The `useEffect` hook in `bug.js` attempts to increment the `count` state variable in every render, resulting in an infinite loop. This happens because the dependency array is empty (`[]`), causing the effect to run after every render, triggering another state update and restarting the cycle.

## Solution

The `bugSolution.js` file shows the correct way to use the `useEffect` hook. It includes `count` in the dependency array, ensuring that the effect only runs when the `count` value changes. 
