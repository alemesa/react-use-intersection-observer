# react-use-intersection-observer

[![Version](https://badge.fury.io/js/%40alemesa%2Freact-use-intersection-observer.svg)](https://badge.fury.io/js/%40alemesa%2Freact-use-intersection-observer)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
![Size](https://img.shields.io/bundlephobia/min/@alemesa/react-use-intersection-observer.svg)

[![NPM](https://nodeico.herokuapp.com/@alemesa/react-use-intersection-observer.svg)](https://npmjs.com/package/@alemesa/react-use-intersection-observer)

[React Hook](https://reactjs.org/docs/hooks-intro.html) that uses the intersection observer API

#### Usage

```bash
npm i @alemesa/react-use-intersection-observer
```

```javascript
import React, { useRef, useEffect } from 'react';
import useIntersectionObserver from '@alemesa/react-use-intersection-observer';

const Paragraph = React.memo(() => {
  const elRef = useRef(null);

  // Pass a reference to the custom hook
  const intersected = useIntersectionObserver(elRef);

  useEffect(() => {
    if (intersected) {
      // Intersected - do whatever you want
      console.log('Intersected element');
    }
  });

  return <h3 ref={elRef}>Example</h3>;
});

export default Paragraph;
```
