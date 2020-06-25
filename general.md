## (MNA.1) Managing arrays
<details>
  <summary>Statement</summary>

🔹 Create a parent component and in it's state store array of names (strings). Initial value - `["First", "Second"]`  
🔹 Create a child component with the following props
```ts
interface ChildProps {
    name: string;
    index: number;
    onChange: (index: number, newName: string) => void;
    onDelete: (index: number) => void;
}
```
🔹 Parent component should render child comomponents (each child component responsible for rendering one name) and a button, which, when clicked, will add new name at the end. It should pass required props to child components and the passed functions must behave as their names suggest.  
🔹 Child component should render controllable input with exlicit value passed from parent. Changing input value must call `onChange` function (received from props) with appropriate arguments. Render button for deleting too.  
🔹 Make sure that changing value of single name rerenders only parent and corresponding child compoonent 
</details>

## (MNA.2) Managing uncontrollable components
<details>
  <summary>Statement</summary>

The problem is same as MNA.1, except:  
🔹 Use uncontrollable input in child component. That is, instead of passing value to input, pass defaultValue.  
🔹 Notice the bug when deleting non-last child component.  
🔹 Resolve the bug. You are not allowed to change the types of ChildProps or names (string[]). However, you are free to introduce new states (or properties in state in case of class components).
</details>

## (MNA.3) Managing arrays of more general child components
<details>
  <summary>Statement</summary>

The problem is same as MNA.1, except:  
🔹 the props of child component. The new type should be
```ts
interface ChildProps {
    name: string;
    onChange: (newName: string) => void;
    onDelete: () => void;
}
```
🔹 Try achieving desired results without considreng optimization of rerendering only appropriate components.  
🔹 Finally, try achieving desired result with optimizing rerendering as described in MNA.1.
</details>
