## 1. Simple counter
<details>
  <summary>Statement</summary>

Display two buttons for incrementing and decrementing and value.
Make it optimized so that on each render you pass exact same onlick functions to each button (not necessarily same function to both buttons)
</details>

## 2. Async displaying

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

## 3. 