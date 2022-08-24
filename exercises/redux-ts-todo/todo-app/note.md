# Note for Redux Learning

## state manage

- state
- view
- action

## basic idea of Redux

a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.

## mutable and immutable

## Terminology

- Actions

    Plain Object 
- ActionCreator
- Reducers

    functions (state, action) => newState
- Store

    run root reducer when action is dispatched
- Dispatch
- Selectors

## Data Flow


1. UI **dispatch** the action
2. reducers is called in store
3. store notify UI
4. UI is refreshed

## app structure

### reading data by `useSelector((state)=>Function())` hook

### call action by `useDispatch(action)` hook

### call async logic with _Thunks_

