import { useDispatch, useSelector } from 'react-redux';

/**
 * Why use useAppDispatch and useAppSelector instead of useDispatch and useSelector?
 * 
 * Even in JavaScript projects (without TypeScript), this pattern provides:
 * 
 * 1. CONSISTENCY:
 *    - Single import point for all Redux hooks across your app
 *    - Easier to find all Redux usage with search
 *    - Consistent naming convention
 * 
 * 2. MAINTAINABILITY:
 *    - If you need to add custom logic (logging, error handling, etc.),
 *      you only change it in ONE place, not in every component
 *    - Example: Add request logging or analytics tracking
 * 
 * 3. FUTURE-PROOFING:
 *    - Easy to add middleware or wrapper logic later
 *    - If you migrate to TypeScript later, you're already set up
 * 
 * 4. REDUX BEST PRACTICE:
 *    - Recommended by Redux Toolkit documentation
 *    - Industry standard pattern used in most Redux projects
 * 
 * 5. EASIER REFACTORING:
 *    - If you need to change how Redux works, change it here
 *    - All components automatically get the update
 */

// Use throughout your app instead of plain useDispatch and useSelector
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

