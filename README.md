<p align="center">
  <img width="460" height="300" src="https://cdn-images-1.medium.com/max/800/1*grVJDnpHQsEC-q1MfewTVQ.png">
</p>

# Giants Boilerplate
>If I have seen further than others, it is by standing upon the shoulders of giants.  **- Issac Newton**

* About Giants: https://medium.com/@harrison0723/giants-boilerplate-86f9f03ab4e2
* Live demo: https://giants-app.firebaseapp.com/

## Features
1. **No server code**: Giants uses Google’s [Cloud Firestore](https://firebase.google.com/docs/firestore/) for backend.
2. **No redux code**: Giants integrates with [redux-firestore](https://github.com/prescottprue/redux-firestore) and [redux-form](https://github.com/erikras/redux-form).
3. **No build config**: Giants is based on Facebook’s [create-react-app](https://github.com/facebook/create-react-app).
4. **No grunt work**: Giants has auth, loading, error state all covered.
5. **Minimum UI code**: Giants uses Alibaba’s [Ant Design for React](https://ant.design/docs/react/introduce).
6. **Scalable**: Giants implements code-splitting by [react-loadable](https://github.com/jamiebuilds/react-loadable).
7. **Maintainable**: Giants has a shallow, component-like file structure.

## Shut up, show me the app
Clone the repository
```
git clone https://github.com/harrison0723/giants-boilerplate
```
Install dependencies
```
yarn install
```
Build development
```
yarn start
```
Build test
```
yarn test
```
## Customization
### Backend
1. Go to your [Firebase console](https://console.firebase.google.com/) and create an app
2. Enable authentication (Email) and Firestore database
3. Replace Firebase config in `src/firebase.js`
### Styles
1. Always give your container component a className
2. Properly scope your styles with `.containerClassName .yourClassName`
3. Override Ant Design components with `.yourClassName.antdClassName`
### Forms
Use the `render()` function in `/common/tools` to pass Ant Design fields into `redux-form` 
### Architecture
Giants boilerplate sorts files by feature rather than by type. Every new feature employs a folder in `/src` with a local architecture as follows:
```
/feature
|--/components
|--actions.js
|--feature.css
|--feature.js
|--feature.spec.js
```
_Note: the `/components` folder stores all presentational components for the feature._
## Deploy
Build production
```
yarn build
```
Deploy to [Firebase Hosting](https://firebase.google.com/docs/hosting/)
1. Install Firebase CLI
```
yarn install -g firebase-tools
```
2. Login to your Firebase account
```
firebase login
```
3. Deploy
```
firebase deploy
```
_Note: Use `/build` path instead of the default `/public` path when asked in step 3._
