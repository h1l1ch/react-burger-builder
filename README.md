# Burger Builder with React!

Project built using **React** library. All basic and advanced features of React were used here: **Hooks**, **Redux**, **Authentication**, **Testing**, **Routing** etc.

# How to use

* Using **burger builder's** **"less"** and **"more"** buttons you can construct your *individual burger*. 

* To proceed "buying" burger you need to **authenticate** by clicking the button with identical name. There you should put *e-mail* and *password* (no need to write down real) then *login* / *logout*. 

* Press *continue* to proceed tp the **checkout**. There you need to **fill** *submission form*. Press *submit*.

* Now you can check your *submitted order* by clicking **Orders** button. **All orders** made on the **current account** will be *displayed* there.

* This website has a **responsive web-design**. Feel free to check out its *mobile* and *tablet versions*.

## How to launch 

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

* **/build/** depository includes *deployment version* of the project. 

* **/config/** depository includes *webpack's* and other *projects' building configurations*.

* **/node-modules/** depository includes all *npm dependencies* and *sub-dependencies* required for successful launch of the project.

* **/public/** depository includes *index.html* file. Into this file final DOM will be rendered.

* **/scripts/** depository includes the ruleset, which determines how npm and its dependencies should conduct upon each of fundamental calls (*npm start*, *npm build* and *npm test*).

* **/src/** depository includes *development code*:

  * **/assets/** includes *burger logo image*.
  
  * **/components/** includes all *functional* (stateless) *components*. Their *".js"* and *".css"* files.
  
  * **/containers/** includes all *class-based* (statefull) *components*. Their *".js"*, *".test.js"* and *".css"* files.
  
  * **/hoc/** includes all *High-Order-Components* (wrapping). For instance, *withErrorHandler()* wraps other components to handler errors for them.
  
  * **/store/** includes *"Redux"* related code.
   
  * **/App.js** is a *head* (main) class-based component. It is wrapper of all React components.
     
  * **/index.js** inserts *App.js* into the *root* div element of *index.html* file. 
       
  * **/.gitignore** is a list filled with exceptions for Git. Once the whole project is commited exceptions will be ignored. 
         
  * **/.package.json** and **/.package-lock.json** both keep the list of requirements, which allow npm to download all necessary dependencies for further successful project loading. 
  

## Things I've learned 

* **React fundamentals**:

  * What are **components** and their two types: *functional(stateless)* and *class-based(statefull)*.
  
  * What are **state** and **props**. How and where to use each of them. 
  
  * **Lifecycle Hooks** such as *componentDidMount()*, *componentDidUpdate()* etc.

* How to **efficiently work with CSS** code in React using *npm eject* command.

* How to make **one-page** website functioning like **multi-page** website using *re-rendering* and *routing* tools.

* How to **retrieve** and **post data** to the **backend** with *Firebase Database* storage.

* How to effeciently **debug big applications** using browser *default tools* ("sources" tab) and *extensions* ("Redux" and "React" ext.).

* How to **handle errors**: *fetch*, *catch* them and *return sufficient feedback*.

* How to work with **forms**. How to handle **forms validation** by *handling submission* and adding *validation feedback*.

* How to implement **routing & routes**, **passing data between multiple pages** via *query params* and implementing *navigation links*.

* What is **Redux**: its **basics** (*reducers*, *store*, *actions* etc.) and **advanced features**(*middleware*, *devtools*, *action creators*, *handling async code* etc.).

* How to implement **authentication** feature using *tokens*, *persistent authentication with local storage* and *guarding routes*.

* How to **test** project's individual files using *npm test* command and creating *".test.js"* files. Also learned how to *test Redux*.

* **React Hooks** such as *useState()* and *useEffect()*. Also, why *class-based components* are **not required anymore**.

* Also learned about **Preact**, **Gatsby.js**, **React native** and many **other tools** *to boost* my *competence* and *optimize* my *developing abilities*.

* Names of **multiple sites**, which provide an **unbelievable opportunity** to **boost React knowledge** by **practising** and **gain inspiration**. Here are the names of few: *builtwithreact* and *react.rocks*.

 
 ## Built With

* [React](https://reactjs.org/) - JS library for building UI.

* [Redux](https://redux.js.org/) - predictable state container for JS apps.


## Authors

* **Philip Chislou** - *Final work* - [Philip Chislou](https://github.com/h1l1ch).
