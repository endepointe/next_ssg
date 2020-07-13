import React,
{
  useState,
  useEffect
} from 'react';

import Link from 'next/link'

const Test = () => {
  const [test, setTest] = useState<string[]>([]);

  useEffect(() => {
    setTest(['one', 'two', 'three']);
    console.log(test);
  }, []);

  return (
    <div>
      <h1>This</h1>
      <p>will be a</p>
      <code>client side component</code>
      <pre>state variable: {test}</pre>
      <Link href="/">
        <a>nex link to home</a>
      </Link>
      <div>
        <h5>using:</h5>
        <ul>
          <li><code>useState</code></li>
          <li>and</li>
          <li><code>useEffect</code></li>
        </ul>
        <p>the server no longer renders the page when dynamic is used.</p>
        <p>this component is rendered from <code>process.cwd() + [id].js</code></p>
      </div>
    </div>
  );
}

export default Test;