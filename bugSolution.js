```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  const handleResize = () => {
    setCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{count}</div>;
}
```