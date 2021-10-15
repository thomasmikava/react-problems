Before diving into the problems, be sure to be familiar with `useState`, `useEffect`, `useMemo`, `useCallback` and `useRef` hooks at least. [Read about hooks](https://reactjs.org/docs/hooks-overview.html)

Be sure to know:
* That if you pass a function to `useState` hook, it will be called only once and its return value will be default value of state 
* That if you pass a function to setState returned by `useState`,  its first argument will be the old value of a state and the return value will become the next value. You can use this for optimizations (by avoiding extra dependency for useMemo or other hooks)
* The difference when you pass dependencies array to `useEffect` and when you don't.
* About the returned function from `useEffect`.
* About [rules of using hooks](https://reactjs.org/docs/hooks-rules.html)



## (USC.1) useCallback
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/usc1-8gg34?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write custom hook without using `useCallback` which behaves exactly like `useCallback`.
</details>


## (USC.2) useCallback
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/usc2-892uq?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write custom hook that accepts a function `fn` and:  
🔹 Returns a function `outFn`, which is not changed on re-renders  
🔹 `outFn` should behave exactly like latest `fn`  
🔸 Do not use `useCallback` hook


In other words, you are required to write custom hook similar to `useCallback` which does not need dependencies array and has same (or even better) performance benefits.
</details>


## (UST) useState
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/ust-u1e00?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write custom hook without using `useState` which behaves exactly like `useState`.
Be sure that:  
🔹 It can accept default value as well as a function which returns default value  
🔹 Second element of returned array (`setState`) can accept new value as well as function that receives old value and returns new value 
🔹 Make sure that `setState` stays the same function and is not changed on re-renders  
🔸 You can use `useReducer` hook only for re-rendering purpose
</details>


<details>
  <summary>Hint</summary>

We provide `useForceUpdate` custom hook as a helper for re-rendering.

```ts
const useForceUpdate = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return forceUpdate;
}
```
</details>


## (USR) useRef
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/usr-oi6i4?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write custom hook without using `useRef` which behaves exactly like `useRef`.
</details>


## (USM.1) Simple useMemo
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/usm1-n3emx?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write custom hook without using neither `useMemo` nor `useCallback` which behaves exactly like `useMemo`.
</details>

## (USM.2) Simple useMemo
<details>
  <summary>CodeSandbox</summary>

https://codesandbox.io/s/usm2-j5m2e?file=/src/hook.ts
</details>

<details>
  <summary>Statement</summary>

Write higher order function which:  
🔹 Accepts function `compareFn` as a sole parameter.  
  `compareFn` itself accepts two arrays as parameters and returns a boolean - whether every element of arrays on same indexes are equal or not. It can use simple shallow equality, deep equality or even custom. The implementation of `compareFn` is not important for us anyway.  
🔹 Returns custom hook which behaves like `useMemo` with the difference that the equality of old and new dependencies must be checked by `compareFn` function.  
🔹 Does not use neither `useMemo` nor `useCallback`
</details>
