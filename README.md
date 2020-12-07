# The-Advanced-Web-Developer-Bootcamp

## section 1: Course Introduction
- The Advanced Web Developer Bootcamp course is taught by expert Bootcamp trainers. The product you're going to know has actually been taught to numerous trainees personally and numerous thousands online.

## section 2: CSS Animations: Transforms and Transitions
### 2.1- Introduction To CSS Animations
- Examples:
  - [species-in-pieces](http://species-in-pieces.com/#).
  - [waaark](https://waaark.com/).
  
### 2.2- Why Animations Matter
- Getting things to move is easy, but planning how they should move is hard.
### Intro To Pseudoclasses
- [Pseudoclasses](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).
### 2.3- Pseudo-Classes: Hover
- Trigger by a user mousing over.
- [Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover).
### 2.4- Pseudo-Classes: Focus
- Triggers when an element receives focus.
- Just for inputs.
- [Focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus).
### 2.5- Pseudo-Classes: Active
- Triggers when an element is being activated by user.
- By taping and hold on the element.
- [ِActive](https://developer.mozilla.org/en-US/docs/Web/CSS/:active).
### 2.6- Quick Pseudoclasses Exercise
- [Starter Code](https://codepen.io/Colt/pen/vJRddz?editors=1100).
- [Quick Pseudoclasses Exercise](https://codepen.io/Mai_Abdulhamid/pen/YzGwwPJ?editors=1100).
### 2.7- Building An Animated Button
- [Starter Code](https://codepen.io/Colt/pen/KqmRRz).
- [Animated Button](https://codepen.io/Mai_Abdulhamid/pen/BaLjBBp).
### 2.8- Introduction to Transform
- Transform: lets you move, warp, rotate and scale elements.
- Syntax -> translate: function().
- [MDN-Transform-Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform?v=control).
### 2.9- Transform: Translate
- Move something around.
- transform: translate( translateX, translateY ).
- It usually happens when it's triggers. it's not usually happens when the page loads.
- [Example](https://codepen.io/Colt/pen/GEmOjv?editors=1100).
### 2.10- Transform:Scale() and Transform-Origin
- Alter the size of an element, increase the size or shrink down elements.
- transform: scale(scaleX, scaleY).
- Every aspect of the element scaled, like border , text, and so on.
- [Transform-Origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin): It takes the original origin which is the **middle** of the element, and scale it from there.
- The default otigin is the center.
### 2.11- Transform: Rotate()
- Rotate elements on the page.
- transform: rotate(num deg).
- if num is positive the rotation will be clockwise, if it negative the rotation will be counterclockwise.
```
  transform: rotate(45deg) scale(2px 3px); //To add more than one transform function.
```
- [Angle Units](https://developer.mozilla.org/en-US/docs/Web/CSS/angle).
### 2.12- A Note on Vendor Prefixes
- For the nonstandered properties that not all browsers implement.
- [Vendor_Prefix MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix).
- [Autoprefixer](https://autoprefixer.github.io/).

### 2.13- Transitions Basics
- Transitions: Allows us to control animation speed when changing css properties.
- Transitions Properties:
  - transition-delay
  - transition-duration
  - transition-property
  - transition-timing-function
- [Transition MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 2.14- Transition-Duration and Transition-Property
- Transition-Duration: Specify how long should the transition last.
- Transition-Property: Specify what properities should be transitioned.
- [Example](https://codepen.io/Colt/pen/MoMNEw).
### 2.15- Transition-Timing-Function and Transition-Delay
- Transition-Delay: Specify how long of a delay before the transition starts.
- Transition-Timing-Function: what's the acceleration curve for the transition.
- [Easings](https://easings.net/).
- [Transition-Timing-Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
- [cubic-bezier](https://cubic-bezier.com).
### 2.16- Transition Shorthand
- transition: property duration timing-function delay, 
              anotherProperty duration timing-function delay.
- [Transition Shorthand MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 2.17- CSS Animation Performance
- What can be transitioned?
- What should be transitioned?
- [High-performance-animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).
### 2.18- Building An Animated Gallery
- [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter). 
- [Starter Code](https://codepen.io/Colt/pen/OjJbLo?editors=1100).
- [Animated Gallery](https://codepen.io/Mai_Abdulhamid/pen/wvzMKZL?editors=1100).

## Section 3: CSS Animations: Keyframes
### 3.1- Introduction to Keyframes
- Transitions allow us to animate a single state change.(Go from state A to state B).
- Keyframes allow for much more complex multi-state animations.(Go from state A to state B to C to D ....etc.).
- [@keyframes MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes).
### 3.2- Codealong: Animated Rainbow Flashing Text
- step1 define keyframes.
- step2 apply to the element.
- [Ugly rainbowText Example :) ](https://codepen.io/Mai_Abdulhamid/pen/dypGXEe).
### 3.3- Other CSS Animation Properties
- animation-iteration-count: Specifies how many times should it repeat.
- animation-direction: Specifies whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
- animation-fill-mode: Specifies how an animation should apply styles before and after the animation.
- animation-play-state: Specifies whether the animation is palyed or paused.
### 3.4- Exercise: Rising and Setting Sun Animation
- [Starter Code](https://codepen.io/Colt/pen/JyPWBE?editors=1100).
### 3.5- Exercise SOLUTION : Rising and Setting Sun Animation
- [Sun Animation](https://codepen.io/Mai_Abdulhamid/pen/zYKrKyL?editors=1100).
### 3.6- CSS Animation Shorthand
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation).
### 3.7- Building an Animated CSS Loading Icon
- [Loading Icon](https://codepen.io/Mai_Abdulhamid/pen/oNzbWax).

## Section 4: Advanced CSS: Layout With Flexbox
### 4.1- Section Introduction
- Building responsive pages with css.
### 4.2- Introduction To Flexbox
- flexbox: It's a more efficient way to layout, align and distribute space among items in a container, even if their sizes is unknown.
- flexbox container properties:
  - flex-direction
  - flex-wrap
  - justify-content
  - align-items
  - align-content
- flexbox item properties:
  - order
  - flex
  - flex-grow
  - flex-shrink
  - justify-self
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
- [flexboxfroggy](http://flexboxfroggy.com/).
### 4.3- The Magic of Display: Flex
- display: flex; -> this isn't a flexbox specific property, but by setting it to flex we setting the container to flex.
- [Starter Code](https://codepen.io/Colt/pen/MvwVJe).
### 4.4- Important Flexbox Terminology
- Some Terminologies :
1. flex container -> the item which has the display: flex property.
2. flex items ->  The elements inside flex container.
  - They behave different from the traditional items.
3. Main Axis -> Goes from left to right(by default).
4. Cross Axis -> perpendicular(goes from top to bottom).
### 4.5- Flex-Direction
- Specifies how items are placed in the flex container, defines the **main axis** and its direction.
- The default value is row.
### 4.6- Flex-Wrap
- Specifies whether items are forced into a single line or can be wrapped into multiple lines.
- The default value is nowrap.
### 4.7- Justify-Content
- Specifies how space is distributed between items in flex container along the **Main Axis**.
### 4.8- Flexbox Sidebar Exercise
- [Starter Code](https://codepen.io/Colt/pen/GvpNEE?editors=1100).
### 4.9- Flexbox Sidebar Exercise: SOLUTION
- [SOLUTION](https://codepen.io/Mai_Abdulhamid/pen/oNzbJoa?editors=1100).
### 4.10- Align-Items
- Specifies how space is distributed between **items** in flex container along the **Cross Axis**.
- The default value is stretch.
### 4.11- Align-Content
- Specifies how space is distributed between **Rows** in flex container along the **Cross Axis**.
- The default value is stretch.
### 4.12- Building A Responsive Navbar CODEALONG
- [Starter Code](https://codepen.io/Colt/pen/brVWXQ?editors=1100).
- [Responsive Navbar CODEALONG](https://codepen.io/Mai_Abdulhamid/pen/PoGZgNg?editors=1100).
### 4.13- Align-Self
- Allows you to override align-items on individual flex items.
### 4.14- Order
- Specifies the order used to layout items in their flex container.
- All items by default have order 0.
- What matter is how items related to each others.
### 4.15- flex-basis
- flex : Defines how a flex item will grow or shrink to fit the available space in a container.
- flex is a shorhand to flex-grow, flex-shrink, flex-basis.
- flex-basis: sort of like width but it isn't.
- flex-basis: Specifies the ideal size of a flex item **before** it's placed into a flex container.
- It's like width when you working with rows, and like height when you working with columns.
- When a flex-basis is specified, the width of flex items is ignored.
- [The Difference Between Width and Flex Basis](https://mastery.games/post/the-difference-between-width-and-flex-basis/).
### 4.16- flex-grow
- Dictates how the **unused space** should be spread amongst flex items.
- It's all about ratios.
- [flex-grow article](https://css-tricks.com/flex-grow-is-weird/).
### 4.17- Flex-Shrink
- Dictates how items should shrink when there isn't enough space in container.
### 4.18- Building a Polygon.com Widget
- [Starer Code](https://codepen.io/Colt/pen/vJGJmV?editors=1100).
- [Widget](https://codepen.io/Mai_Abdulhamid/pen/vYXLqjp?editors=1100).
### 4.19- Exercise: Holy Grail Layout
- [Holy Grail wikibedia](https://en.wikipedia.org/wiki/Holy_grail_(web_design)).
- [Starer Code](https://codepen.io/Colt/pen/mMPXEy?editors=1100).
### 4.20- Exercise: Holy Grail Layout SOLUTION
- [SOLUTION](https://codepen.io/Mai_Abdulhamid/pen/qBabeWV?editors=1100).
### 4.21- Flexbox Browser Support
- [Mixing Old and New for the Best Browser Support](https://css-tricks.com/using-flexbox/).

## Section 5: Project: Building A Startup Site

### 5.1- Section Introduction
- Compining what we learn about css animation and layout to make something
### 5.2- Project: Introduction
- [The Original Template](https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox).
- [My Work](https://github.com/MaiAbdulhamid/The-Advanced-Web-Developer-Bootcamp/tree/main/01%20Building%20A%20Startup%20Site).
## Section 6: Async Foundations
### 6.1- Introduction
- The goal is to build single page application using javascript.
- [Understand definition of asynchronous event](https://stackoverflow.com/questions/4559032/easy-to-understand-definition-of-asynchronous-event).
### 6.2- Callback Functions
- Callback Function: a function that is passed into another function as a parameter then invoked by that other function.
- Higher Order Function: is a function that accept a callback as parameter.
- What are callback function used for?
  - Advanced Array methods.
  - Browser Events.
  - Ajax requests.
  - React Development.
- [Slides](http://webdev.slides.com/eschoppik/callbacks#/11).
### 6.3- Codealong: forEach
- forEach: function that takes array and callback.
- Implementation:
```
  function forEach(arr, callback){
    for(var i =0; i < arr.length; i++){
      callback(arr[i], i, arr)
    }
  }
  var strings = ["my", "name", "is", "mai"], 
      res = "";
  var callback = function(str, index, array){
    if(array.length -1 !== index){
      res += str + " ";
    }else{
      res += str + "!!"
    }
  }
  forEach(strings, callback)
  console.log(res)
```
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108).
### 6.4- findIndex Exercise Intro
- Returns the index of the first element in the array for which the callback returns a truthy value.  -1 is returned if the callback never returns a truthy value.
- Similer to forEach but check for truthy value of callback.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108).
### 6.5- findIndex Solution
- Implementation:
```
  function findIndex(arr, callback){
    for(var i =0; i < arr.length; i++){
      if(callback(arr[i], i, arr)){
        return i;
      }
    }
    return -1;
  }
  var numbers = [1, 2, 3, 4, 5, 6];
  function callback(num, index, array){
    return num % 2 === 0
  }
  console.log(findIndex(numbers, callback))
```
### 6.6- The Stack And The Heap
- Stack is: 
  - An ordered data structure
  - Keeps track of function invocations
  - Part of the JavaScript runtime (you don't access it directly).
- When main Function is called, javascript runtime takes it to stack.
- If the function has callback function runtime add it to stack.
- Once it done executed runtime takes it out of the stack(pop out).
- Stack Frame -> has information of :
  - The function that was invoked
  - The parameters that were passed to the function
  - Current line number
- Stack processed from top to bottom, we can't take things out of the middle because of function in the middle could be waiting for some result.
- Heap: An area in memory where the your data is stored.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108-17).
### 6.7- The Stack: An Example
- Every function invocation adds to the stack.
- [Slides](http://webdev.slides.com/eschoppik/mysql-107-16-22).
### 6.- setTimeout and setInterval
- setTimeout: A function that asynchronously invokes a callback after a delay in milliseconds(Delay callback).
- clearTimeout -> Cansling timeout.
- setInterval: A function that continually invokes a callback after every X milliseconds, where X is provided to setInterval(Repeat callback).
- clearInterval -> Cansling iterval.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-23).
- Hint: The returned timerId is a positive integer value which identifies the timer created by the call to setTimeout();
### 6.8- Exercise: countDown Function
- Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!".
### 6.9- countDown Exercise Solution
```
  function countDown(time){
    var count = setInterval(function(){
      time--;
          if(time > 0){
              console.log(time)
          }else{
            console.log("Ring Ring Ring!!!")
            clearInterval(count)
          }
    }, 1000)
  }
  countDown(2)
```
### 6.10- The Event Loop And The Queue
- The Queue: An ordered list of functions waiting to be placed on the stack (First in first out).
- The Event Loop: Functionality in the JavaScript runtime that checks the queue when the stack is empty, If the stack is empty, the front of the queue is placed in the stack.
- untill the delay is == 0, it's not run immediatlery, it runs after the stack is empty.
- callback placed into the queue.
- Single Threaded: Code execution is linear.  Code that is running cannot be interrupted by something else going on in the program.
- JavaScript is **Single Threaded**.
- [Slides](http://webdev.slides.com/eschoppik/mysql-107-16-18).
### 6.11- Promise Basics
- Promise: A promise is an object that represents a task that will be completed in the future.
- promise.then(callback) -> when there is no error.
- promise.catch(callback) -> when there is error.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-19).
### 6.12- Promise Chaining
- Disadvantages of Nested Callbacks:
  - The code is hard to read.
  - Logic is difficult to reason about.
  - The code is not modular.
- The values return in the previous .then() callback will be passed into next .then() callback as a parameter.
- [Slides](http://webdev.slides.com/eschoppik/mysql-107-16-18-24).

## Section 7: AJAX Part 1: XHR and Fetch

### 7.1- Intro to AJAX
- AJAX: stands for Asynchronous Javascript And XML.
- It is an approach to web development(a concept to build a websie).
- With AJAX websites can send and request data from a server in the background without disturbing the current page(single page application).
### 7.2- What's the deal with JSON and XML?
- API don't response with HTML. API response with pure data not structure.
- They use more efficient data formas from server to website like Json and XML.
- XML -> Extended Markup landuage.
- XML is syntactically similer to HTMl, but it doesn't descripe presentation like HTML does.
- JSON -> js object notation.
- almost like js objects.
- JSON is more popular bacause it works so well with js.
- AJAJ ->  Asynchronous Javascript And JSON. :")
### 7.3- Making Our First Request with XMLHTTPRequest
- XMLHTTPRequest -> XMR.
- [XMLHTTPRequest MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
- [onreadystatechange MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange).
- [Example](https://codepen.io/Mai_Abdulhamid/pen/abmNGjq?editors=0010).
### 7.4- AJAX Workflow: Building The Random Image App
- [starter Code](https://codepen.io/Colt/pen/MvbLdo).
- [Random Image App](https://codepen.io/Mai_Abdulhamid/pen/rNMeKbP?editors=1011).
### 7.5- Bitcoin Price Exercise
- [starter Code](https://codepen.io/Colt/pen/PKjOdg).
- [coindesk API](https://www.coindesk.com/coindesk-api).
### 7.6- Bitcoin Price Exercise Solution
- [Solution](https://codepen.io/Mai_Abdulhamid/pen/qBaZMWj?editors=1011).
### 7.7- Fetch Introduction
- XHR problems ->
  - sytax is ugly.
  - 16 years old.
  - No streaming data.
- Fetch is update of XHR.
- [Streams Data Demo](https://domenic.github.io/streams-demo/).
- response.json() -> returns a promise.
### 7.8- Fetch Options
- [Fetch Example with options](https://codepen.io/Colt/pen/PKOpMY?editors=0010).
- [fetch MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).
### 7.9- Fetch Error Handling
- .catch() -> will run if there is a problem with the request itself or the internet.
- use request.ok build in property.
- throw Error("Error Message").
- [Fetch Error Handling](https://codepen.io/Colt/pen/prWBLb?editors=0011).
### 7.10- Fetch Random User Profile Exercise
- [starter Code](https://codepen.io/Colt/pen/QMqoZo?editors=1010).
- [randomuser API](https://randomuser.me/api/).
### 7.11- Fetch Random User Profile Exercise Solution
- [082 Random-User-API-Endpoint](https://randomuser.me/api/).
- [Solution](https://codepen.io/Mai_Abdulhamid/pen/dypMQdv?editors=1011).
### 7.12- The Problem With Fetch
- The problem with fetch is Browser Compatability(support).

## Section 8: AJAX Part 2: jQuery and Axios
### 8.1- jQuery AJAX Introduction
- write less than pure js.
- [jQuery CDN](https://code.jquery.com/).
- [Starter Code](https://codepen.io/Colt/pen/eEymav).
### 8.2- jQuery $.ajax Method
- Creates HMLHttpRequest under the hood.
- [jQuery.ajax Docs](http://api.jquery.com/jQuery.ajax/).
- [baconipsum API](https://baconipsum.com/api/?type=meat-and-filler).
- [Example](https://codepen.io/Colt/pen/brYLvg?editors=1011).
### 8.3- Digging In The jQuery Sourcecode
- [jQuery Sourcecode](https://github.com/jquery/jquery/blob/731c501155ef139f53029c0e58409b80f0af3a0c/src/ajax/xhr.js).
### 8.4- jQuery AJAX Shorthand Methods
- [Codepen](https://codepen.io/Colt/pen/braVVr?editors=1010).
- [get()](https://api.jquery.com/jQuery.get/).
- [getJSON()](https://api.jquery.com/jQuery.getJSON/) //The most common use case.
- [post()](https://api.jquery.com/jQuery.post/).
### 8.5- jQuery Random Cats API Exercise
- Add Random img to the dom using jquery.
- [attr Docs](https://api.jquery.com/attr/).
### 8.6- jQuery Random Cats Exercise SOLUTION
- [SOLUTION](https://codepen.io/Mai_Abdulhamid/pen/gOwrJEL?editors=1011).
### 8.7- Axios Intro
- Axios -> a lightweight Http request library.
- if you want only to include httpRequest without extra jQuery methods.
- [Axios Docs](https://github.com/mzabriskie/axios).
- [API endpoint](https://opentdb.com/api.php?amount=1).
- [Example](https://codepen.io/Colt/pen/rzpLqE).
### 8.8- Axios Error Handling
- [Error Handling](https://codepen.io/Colt/pen/qXpNGN?editors=1010)
### 8.9- Ron Swanson Exercise
- [Starter Code](https://codepen.io/Colt/pen/zdpKKq?editors=1010).
### 8.10- Ron Swanson Exercise Solution
- [Solution](https://codepen.io/Mai_Abdulhamid/pen/LYRNKLN?editors=1011).

## Section 9: Testing With Jasmine
Section Introduction
Writing Tests in the Browser
Jasmine Syntax and Matchers
Writing Better tests with Hooks
Quiz - Jasmine Matchers and Hooks
Spies
Quiz - Jasmine Spies
Clocks
Jasmine Async
7 questions
TDD and BDD

Different Types of Tests

## Section 10: Advanced Array Methods

Section Introduction
forEach
Exercise: forEach
Exercise SOLUTION: forEach
map
Exercise: Map
Exercise SOLUTION: Map
Filter
Exercise: Filte
Exercise SOLUTION: Filter
Some
Every
Exercise: Some and Every
Exercise SOLUTION: Some and Every
Reduce Continued
Reduce
Exercise: Reduce
Exercise SOLUTION: Reduce
Array Methods Recap

## Section 11: Closures and the Keyword 'this'

Section Introduction
Introduction to Closures
Using Closures in the Wild
Exercise: Closures
Exercise SOLUTION: Closures
Closures Recap
Introduction to the Keyword 'this'
'this' with Functions and "use strict"
Object/Implicit Binding
Explicit Binding
Call
Apply
Bind
Bind Continued
Exercise: Call, Apply, and Bind
Exercise SOLUTIONS: Call, Apply, Bind
The 'new' Keyword and section recap

## Section 12: Object Oriented Programming with JavaScript

Section Introduction
Introduction to Object Oriented Programming with JavaScript
The 'new' Keyword
Refactoring with Multiple Constructors
Constructor Functions Recap
Exercise: Constructor Functions
Exercise SOLUTION: Constructor Functions
Introduction to Prototypes
The Prototype Chain
Adding Methods to the Prototype
Exercise: Prototypes
Exercise SOLUTIONS: Prototypes
Prototypal Inheritance
Exercise: Inheritance
Exercise SOLUTIONS: Inheritance
Object Oriented Programming Recap

## Section 13: Creating JSON API's With Node and Mongo
Section Introduction
Preparing For React
Defining Our API Gameplan
SUPER IMPORTANT: UPDATED C9 INSTALLATION INSTRUCTIONS
Installing NodeJS
Cloud9 Without A Credit Card Instructions
Installing Node Locally
Creating Our Initial Express Application
Responding With JSON
Installing Mongo
Defining Our Schema
Defining The Index Route
Defining The Create Route
Defining The Show Route
Defining the Update Route
Defining the Delete Route
Refactoring Our API

## Section 14: Codealong: Single Page Todo List with Express, Mongo, and jQuery

Introducing Our Single Page App
Serving Static Files and Nodemon
Adding jQuery and The Starter CSS
Writing The Initial AJAX Call
Displaying Our Todos Correctly
Connecting the Form to our API
Making the Delete Button Work
Toggling Todo Completion

## Section 15: ES2015 Part I
Section Introduction
Introduction to ES2015
Const
Let
Let and Const
Template Strings
Introduction to Arrow Functions
Arrow Functions Continued
Coding Exercise - Arrow Functions Exercises
Exercise SOLUTION: Arrow Functions
Default Parameters
For...of Loops
Rest
Spread
Coding Exercise - Rest and Spread Exercises
Exercise SOLUTION: Rest and Spread
Object Enhancements
Object Enhancements
Object Destructuring
Array Destructuring
Coding Exercise - Destructuring Exercises
Exercise SOLUTION: Destructuring
ES2015 Part I Recap
## Section 16: 
