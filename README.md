# React Future
The only purpose of this project is to showcase future features of React.

You can try the app here: http://react-future.herokuapp.com

### Disclaimer
Please don’t use React alphas in production! They have bugs, missing documentation, and unstable APIs.

## How to run the project

Clone from github and move into directory

```
$ git@github.com:giamir/react-future.git
$ cd react-future
```

Run the application
```
$ yarn && yarn start
```

## New React Features showcased

### Suspense ✅
A generic way for components to suspend rendering while they load asynchronous data.

### Time Slicing ✅
A generic way to ensure that high-priority updates like user input don’t get blocked by rendering low-priority updates.

### New context API ✅
A new version of context that provides a mechanism for a child component (Consumer) to access a value in an ancestor component (Provider).

### Error Boundaries  ✅
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the crashed component tree.