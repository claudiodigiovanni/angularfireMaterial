// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyAly3reWYsRslBY-zUT9JFg_k6B3GgXfIc",
    authDomain: "mysihta.firebaseapp.com",
    databaseURL: "https://mysihta.firebaseio.com",
    projectId: "mysihta",
    storageBucket: "mysihta.appspot.com",
    messagingSenderId: "672027238713"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
