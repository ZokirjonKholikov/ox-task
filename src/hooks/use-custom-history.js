// import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// export function useCustomHistory() {
//   const [stack, setStack] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     if (stack.length) {
//       history.push(stack[stack.length - 1].path);
//     }
//   }, [stack, history]);

//   function goBack() {
//     const [, ...rest] = stack.reverse();
//     setStack(rest.reverse());
//   }

//   function setter({ path, title }) {
//     const id = new Date().getTime();
//     if (path.isMainPath()) {
//       setStack([{ id, title, path }]);
//     } else if (!path.isMainPath()) {
//       setStack((prev) => [...prev, { id, title, path }]);
//     } else if (stack.length && stack[0].path === path.getMainPath()) {
//       setStack((prev) => [...prev, { id, title, path }]);
//     } else {
//       throw new Error('You can not jump');
//     }
//   }

//   function push(route) {
//     if (typeof route === 'string') {
//       setter({ path: route, title: route });
//     } else if (
//       typeof route === 'object' &&
//       typeof route.path === 'string' &&
//       route.path.isPath() &&
//       (route.title ? typeof route.title === 'string' : true)
//     ) {
//       setter({
//         path: route.path,
//         title: route.title,
//       });
//     } else {
//       throw new Error(
//         'Route should be valied path string or valied object having two props with title and path'
//       );
//     }
//   }

//   function go(id) {
//     const index = stack.findIndex((route) => route.id === id);
//     if (index !== -1) {
//       setStack((prev) => prev.slice(0, index + 1));
//     } else {
//       throw new Error('Given id is invalid');
//     }
//   }

//   return {
//     push,
//     go,
//     goBack,
//     stack,
//     history,
//   };
// }
