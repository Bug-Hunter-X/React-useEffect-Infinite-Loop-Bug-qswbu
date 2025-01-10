```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: This will cause an infinite loop because the dependency array is empty
    setCount(count + 1); 
  }, []);

  return <div>Count: {count}</div>;
}
```