# react-use-intersection-observer
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![Version](https://badge.fury.io/js/%40alemesa%2Freact-use-intersection-observer.svg)](https://badge.fury.io/js/%40alemesa%2Freact-use-intersection-observer)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
![Size](https://img.shields.io/bundlephobia/min/@alemesa/react-use-intersection-observer.svg)

[![NPM](https://nodeico.herokuapp.com/@alemesa/react-use-intersection-observer.svg)](https://npmjs.com/package/@alemesa/react-use-intersection-observer)

[React Hook](https://reactjs.org/docs/hooks-intro.html) that uses the intersection observer API

#### Usage

```bash
npm i @alemesa/react-use-intersection-observer
```

---

- Simple Example:
  Element will trigger a single time and unobserve

```javascript
import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "@alemesa/react-use-intersection-observer";

const Paragraph = React.memo(() => {
  const elRef = useRef(null);

  // Pass a reference to the custom hook
  const intersected = useIntersectionObserver(elRef);

  useEffect(() => {
    if (intersected) {
      // Intersected - do whatever you want
      console.log("Intersected element");
    }
  }, [intersected]);

  return <h3 ref={elRef}>Example</h3>;
});

export default Paragraph;
```

---

- Custom Example:
  Element will trigger multiple time

```javascript
import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "@alemesa/react-use-intersection-observer";

const Paragraph = React.memo(() => {
  const elRef = useRef(null);

  // Pass a reference to the custom hook
  const intersected = useIntersectionObserver(elRef, {
    triggerOnce: false,
    threshold: 0.3
  });

  useEffect(() => {
    if (intersected) {
      // Intersected - do whatever you want
      console.log("Intersected element");
    }
  }, [intersected]);

  return <h3 ref={elRef}>Example</h3>;
});

export default Paragraph;
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://alemesa.com"><img src="https://avatars3.githubusercontent.com/u/14832910?v=4" width="100px;" alt="Alejandro Mesa"/><br /><sub><b>Alejandro Mesa</b></sub></a><br /><a href="#infra-alemesa" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/alemesa/react-use-intersection-observer/commits?author=alemesa" title="Code">💻</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!