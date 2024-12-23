```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The function is declared inside useEffect,
    // which means it gets recreated on every render. This means that the
    // event listener is added multiple times.
    const handleResize = () => {
      setCount(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{count}</div>;
}
```