## (CNT) Simple counter
<details>
  <summary>Statement</summary>

Display two buttons for incrementing and decrementing and value.
Make it optimized so that on each render you pass exact same onClick functions to each button (not necessarily same function to both buttons)
</details>

## (ASD) Async displaying

<details>
  <summary>Statement</summary>

We have a function that returns a promise
```ts
const fetchData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const time = Math.random() * 1000 + 500;
        setTimeout(() => {
            if (Math.random() > 0.5) {
                const userId = Math.floor(Math.random() * 10000);
                resolve(`Hello user${userId}!`);
            } else {
                reject(new Error("random error"));
            }
        }, time);
    });
}
```

🔹 Call fetchData and if promise resolves, render it on the page.  
🔹 Display loading text while promise is not fulfilled yet.  
🔹 If promise is rejected, display custom text on page and a single button. Clicking that button should retry calling fetchData and display loading text too, until promise is fulfilled (either resolved or rejected).
</details>

## (CNC) Concurrent updates of this.state

<details>
  <summary>Statement</summary>

🔹 Store some number in state with name `counter` and initial value 0.  
🔹 Write method without any parameters for incrementing `counter` by 1.  
🔹 Write another method without any parameters that calls first method **synchronously** two times.  
🔹 Render button which calls second method when clicked. Display `counter` too.  
🔹 Make sure that your first method is written correctly so that clicking button will cause incrementing `counter` by two.
</details>
<details>
  <summary>Solution</summary>

  Since passing new state object to setState does not update this.state synchronously, we can't achive in this way.  
  instead of passing an object, you can pass function to setState. In this updater function, you are passed most recent value of state and props (though props is irrelevant in this problem). You can return null if you do not want to update state, or partial state for updating it.
```ts
    this.setState((state, props) => {
        return {
            counter: state.counter + 1,
        };
    });
```
</details>
