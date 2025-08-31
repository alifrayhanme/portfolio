export const blogData = {
  posts: [
    {
      id: "b1",
      title: "React Performance: When to use useMemo and useCallback?",
      slug: "react-performance-usememo-usecallback",
      excerpt:
        "How memoization helps avoid unnecessary calculations on every render—explained with simple examples.",
      cover:
        "https://blog.openreplay.com/images/improving-react-application-performance-react-memo-vs-usememo/images/hero.jpg",
      readTime: "6 min",
      tags: ["react", "performance", "hooks"],
      publishedAt: "2025-08-20",
      featured: true,
      content: `To optimize React application performance, it's crucial to understand when to use the useMemo and useCallback hooks. These hooks are designed for memoization, a technique that helps avoid unnecessary calculations and re-renders by caching the results of expensive operations. Using them correctly can lead to significant performance improvements, especially in large-scale applications with complex components.

### The Problem of Unnecessary Re-renders

By default, when a parent component's state or props change, React re-renders that component and all of its children. This is the core of React's reactivity. However, this behavior can become a performance issue if a child component is computationally expensive or if its props don't change but it still re-renders simply because its parent did.

This is where useMemo and useCallback come into play. They help prevent these redundant re-renders by ensuring that a value or a function reference only changes when its dependencies change, allowing child components to leverage React.memo for performance optimization.

### useMemo for Expensive Calculations

The useMemo hook is used to memoize a value. It takes two arguments: a function that returns the value and a dependency array. React will only re-calculate the value if one of the dependencies in the array has changed.

This is particularly useful when you have an expensive, time-consuming calculation that you want to avoid on every render. For example, filtering or sorting a large array.

Consider a component that filters a large list of products:

import { useMemo } from 'react';
function ProductList({ products, filterText }) {
// Without useMemo, this filter operation runs on every render.
// With useMemo, it only re-runs if products or filterText change.
const filteredProducts = useMemo(() => {
console.log('Filtering products...');
return products.filter(product => product.name.includes(filterText));
}, [products, filterText]);

return (
<ul>
{filteredProducts.map(product => (
<li key={product.id}>{product.name}</li>
))}
</ul>
);
}

In this example, the filter method is an expensive operation. By wrapping it in useMemo, you ensure that it only runs when the products or filterText props actually change. This prevents redundant calculations if the parent component re-renders for other reasons.

### useCallback for Stable Function References

While useMemo memoizes a value, the useCallback hook memoizes a function. It returns a cached version of the callback function that only changes if one of its dependencies has changed. The primary use case for useCallback is to prevent unnecessary re-renders of memoized child components.

A function is an object, and in JavaScript, a new function is created on every render. If you pass a function as a prop to a child component, the child will re-render every time the parent re-renders because it's receiving a new prop value (a new function reference), even if the function's logic is the same.

This is where useCallback becomes essential, especially when used with React.memo, which memoizes an entire component.

import { useState, useCallback } from 'react';
import { Button } from './Button';
function ParentComponent() {
const [count, setCount] = useState(0);

// The function reference is memoized and won't change on every render.
const handleClick = useCallback(() => {
setCount(c => c + 1);
}, []); // The empty dependency array ensures the function never changes.

return (
<div>
<p>Count: {count}</p>
{/* The Button component is memoized, so it won't re-render unless its props change. */}
<Button onClick={handleClick} />
</div>
);
}
// Button.js
import React from 'react';
export const Button = React.memo(({ onClick }) => {
console.log('Button component re-rendered');
return <button onClick={onClick}>Increment</button>;
});

In this code, without useCallback, the Button component would re-render every time ParentComponent re-renders because handleClick would be a new function. By using useCallback, the function's reference remains stable, and the Button component, being memoized with React.memo, will not re-render unnecessarily.

### When to Use Them?

* **Use useMemo when:** you have an expensive, computationally intensive task or a complex object creation that you want to avoid running on every render.
* **Use useCallback when:** you are passing a callback function to a memoized child component (React.memo) to prevent that child from re-rendering due to a changing prop reference.

Remember, memoization isn't free; it adds a small overhead. Only use these hooks when you've identified a genuine performance bottleneck in your application. Overusing them can sometimes make your code more complex without providing a significant performance benefit.`,
    },
    {
      id: "b2",
      title: "Tailwind CSS: Building Scalable UI with Utility-First",
      slug: "tailwind-scalable-ui",
      excerpt:
        "Utility-first classes, custom tokens, and responsive breakpoints—practical tips for clean design.",
      cover:
        "https://www.sketchappsources.com/resources/source-image/tailwindcss-sketch-kit.png",
      readTime: "5 min",
      tags: ["tailwind", "css", "design-system"],
      publishedAt: "2025-08-18",
      featured: false,
      content: `Tailwind CSS operates on a utility-first philosophy, which is a significant departure from traditional CSS frameworks like Bootstrap. Instead of providing pre-designed components (like a card or button class), Tailwind gives you a vast collection of low-level, single-purpose utility classes. Each class does one thing, and one thing only—for example, p-4 adds padding, bg-blue-500 sets a background color, and flex applies a flexbox container.

This approach fundamentally changes how you write CSS. You no longer write custom CSS rules in a separate stylesheet. Instead, you build your user interface by composing these small, focused utility classes directly in your HTML markup. This might seem cluttered at first glance, but it offers a powerful and efficient workflow, especially in the context of modern component-based frameworks like React, Vue, or Svelte.

The core argument for utility-first is that it makes development faster and more predictable. Since you're not constantly switching between HTML and CSS files, the feedback loop for styling is instant. This allows for rapid prototyping and design experimentation. More importantly, it helps you avoid the common pain points of traditional CSS, such as coming up with sensible and scalable class names, and managing complex CSS specificity rules. The design becomes part of the component, making the component's styling self-contained and easy to reason about.

Building a Scalable Design System
One of the key strengths of Tailwind CSS is its ability to facilitate the creation of a scalable design system. The utility classes are not just arbitrary values; they are constrained to a predefined, configurable theme. This theme provides a consistent scale for things like spacing, colors, font sizes, and shadows. For example, all spacing classes (p-1 through p-96) are based on a consistent scale, typically multiples of 0.25rem. This inherent consistency prevents the "rogue pixel" problem, where developers use slightly different values for the same purpose (e.g., using 20px in one place and 22px in another).

You can easily customize and extend this default theme to match your brand's specific needs. By modifying the tailwind.config.js file, you can define your brand colors, custom breakpoints, font families, and more. Once configured, these custom values become available as new utility classes. This means your entire team can use bg-brand-primary instead of hardcoding a hex value, ensuring a consistent look and feel across the entire application. If the brand color needs to be updated, you simply change it in one file, and the change is reflected everywhere the utility class is used. This centralized configuration is a cornerstone of a scalable and maintainable design system.

The combination of utility classes and a configurable theme allows developers to build consistent UIs without ever writing a line of custom CSS. This not only speeds up development but also ensures that the design remains cohesive as the project grows and new features are added. The utility-first approach encourages a more systematic way of thinking about design, where every stylistic choice is a deliberate selection from a predefined set of options.`,
    },
  ],
};
