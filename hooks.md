Before diving into the problems, be sure to be familiar with `useState`, `useEffect`, `useMemo`, `useCallback` and `useRef` hooks at least. [Read about hooks](https://reactjs.org/docs/hooks-overview.html)

Be sure to know:
* That if you pass function to `useState` hook, it will be called only once and it's return value will be default value of state 
* That if you pass a function to setState returned by `useState`,  it's first argument will be old value of state and return value will become the next value. You can use this for optimizations (by avoiding extra dependency for useMemo or other hooks)
* The difference when you pass dependencies array to `useEffect` and when you don't.
* About the returned function from `useEffect`.
* About [rules of using hooks](https://reactjs.org/docs/hooks-rules.html)



## (USC) useCallback
<!-- <details>
  <summary>CodeSandbox</summary>


</details> -->

<details>
  <summary>Statement</summary>

Write custom hook wihtout using `useCallback` which behaves exactly like `useCallback`.
</details>


## (UST) useState
<!-- <details>
  <summary>CodeSandbox</summary>


</details> -->

<details>
  <summary>Statement</summary>

Write custom hook wihtout using `useState` which behaves exactly like `useState`.
Be sure that:  
🔹 It can accept default value as well as function which returns default value  
🔹 Second element of returned array can accept new value as well as function that receives old value and returns new value 
</details>


## (USR) useRef
<!-- <details>
  <summary>CodeSandbox</summary>


</details> -->

<details>
  <summary>Statement</summary>

Write custom hook wihtout using `useRef` which behaves exactly like `useRef`.
</details>


## (USM.1) Simple useMemo
<!-- <details>
  <summary>CodeSandbox</summary>


</details> -->

<details>
  <summary>Statement</summary>

Write custom hook wihtout using neither `useMemo` nor `useCallback` which behaves exactly like `useMemo`.
</details>

## (USM.2) Simple useMemo
<!-- <details>
  <summary>CodeSandbox</summary>


</details> -->

<details>
  <summary>Statement</summary>

Write higher order function which:  
🔹 Accepts function `compareFn` as a parameter. compareFn itselft accepts two arrays as parameters and returns boolean - whether every element of arrays on same indixes are equal or not. It can use simple shallow equality, deep equality or even custom. The implementation of `compareFn` is not imporant for us anyway.  
🔹 Returns custom hook which behaves like `useMemo` with the difference that the equality of old and new dependencies must be checked by `compareFn` function.  
🔹 Does not use `useMemo`
</details>
