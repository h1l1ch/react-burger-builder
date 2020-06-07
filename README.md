# Burger Builder with React!

Project built using **React** library. All basic and advanced features of React were used here: **Hooks**, **Redux**, **Authentication**, **Testing**, **Routing** etc.


## Start

* Need **final version**? Simply check link of the app. It is *in the header* next to the *description*. 

* **Deployment code** is located in "*public*" folder. 

* To launch **development code** download *zip file* on your computer. Extract it into the empty folder. Then open npm to install all dependencies. Inside project's directory type:

  ```
  npm init
  ```
  now run the code:
  
  ```
  npm start
  ```
  You are ready to go and to make your burger. ;)

## Project structure

* **build/** folder includes the *deployment version* of the project. 

* **config/** depository includes *webpack* and other *project building configurations*.

* **node-modules/** depository includes all *npm dependencies* and *sub-dependencies* required for successful launch of the app.

* **public/** includes *index.html* inside of which final DOM will be rendered.

* **scripts/** depository includes the ruleset, which determines how npm and its dependencies should conduct upon each fundamental call (*npm start*, *npm build* and *npm test*).

* **src/** depository includes all development code: *React components*, *assets*, *HOC*, *redux*. Full list: 

  * **assets/** includes *burger logo image*.
  
  * **components/** includes all *functional* (stateless) *components*. Their *.js* and *.css* files.
  
  * **containers/** includes all *class-based* (statefull) *components*. Their *.js*, *.test.js* and *.css* files.
  
  * **hoc/** includes all *High-Order-Components* (wrapping). *withErrorHandler()* wraps other components to handler errors for them.
  
  * **store/** includes *Redux* related code.
   
  * **App.js** is a head class-based component. 
     
  * **index.js** inserts *App.js* into the *root* div element of *index.html* file. 
       
  * **.gitignore** keeps list of exceptions for Git to ignore. 
         
  * **.package.json** and **.package-lock.json** keeps the list of requirements, which allow npm to download all necessary dependencies for successful project loading. 
  

## Things I've learned 

* **React fundamentals**:

  * What are **components** and their types: *functional(stateless)* and *class-based(statefull)*.
  
  * What are **state** and **props**. How and where to use each of them. 

  * How to build **markup elements** such as *div*, *row* etc. 
  
  * **Lifecycle Hooks** such as *componentDidMount()*, *componentDidUpdate()* etc.

* How to **efficiently work with CSS** code in React using *npm eject* command.

* How to make **one-page website** function like **multi-page** using *re-rendering* and *routing*.

* How to **retrieve** and **post data** to the **backend**. Used *Firebase* storage.

* How to effeciently **debug big applications** using browser *default tools* and *extensions*.

* How to **handle errors**: *fetch*, *catch* them and return detailed feedback.

* How to work with **forms** and **forms validation**. *Handling submission* and adding *validation feedback*.

* How to implement **routing & routes**, **passing data between multiple pages** via *query params* and implementing *navigation links*.

* What is **Redux**. Its **basics** (*reducers*, *store*, *actions* etc.) and **advanced features**(*middleware*, *devtools*, *action creators*, *handling async code* etc.).

* How to insert **authentication** features to the project. Using *tokens*, *persistent authentication with local storage* and *guarding routes*.

* How to **test** project using *npm test* command and creating *.test.js* files and also *testing Redux*.

* **React Hooks** such as *useState()* and *useEffect()* and why class-based components are not needed anymore.

* Also learned about **Preact**, **Gatsby.js** **React native** and many other tools to boost my competence and optimize my developing abilities.

* Names of **multiple sites**, which give me an opportunity to **boost React knowledge by practising** and **gain inspiration**. Here are the names of few: *builtwithreact* and *react.rocks*.

 
 ## Built With

* [React](https://reactjs.org/) - JS library for building UI.

* [Redux](https://redux.js.org/) - predictable state container for JS apps.


## Authors

* **Philip Chislou** - *Final work* - [Philip Chislou](https://github.com/h1l1ch).
