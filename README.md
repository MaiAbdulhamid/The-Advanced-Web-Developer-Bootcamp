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
### 2.3- Intro To Pseudoclasses
- [Pseudoclasses](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).
### 2.4- Pseudo-Classes: Hover
- Trigger by a user mousing over.
- [Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover).
### 2.5- Pseudo-Classes: Focus
- Triggers when an element receives focus.
- Just for inputs.
- [Focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus).
### 2.6- Pseudo-Classes: Active
- Triggers when an element is being activated by user.
- By taping and hold on the element.
- [ِActive](https://developer.mozilla.org/en-US/docs/Web/CSS/:active).
### 2.7- Quick Pseudoclasses Exercise
- [Starter Code](https://codepen.io/Colt/pen/vJRddz?editors=1100).
- [Quick Pseudoclasses Exercise](https://codepen.io/Mai_Abdulhamid/pen/YzGwwPJ?editors=1100).
### 2.8- Building An Animated Button
- [Starter Code](https://codepen.io/Colt/pen/KqmRRz).
- [Animated Button](https://codepen.io/Mai_Abdulhamid/pen/BaLjBBp).
### 2.9- Introduction to Transform
- Transform: lets you move, warp, rotate and scale elements.
- Syntax -> translate: function().
- [MDN-Transform-Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform?v=control).
### 2.10- Transform: Translate
- Move something around.
- transform: translate( translateX, translateY ).
- It usually happens when it's triggers. it's not usually happens when the page loads.
- [Example](https://codepen.io/Colt/pen/GEmOjv?editors=1100).
### 2.11- Transform:Scale() and Transform-Origin
- Alter the size of an element, increase the size or shrink down elements.
- transform: scale(scaleX, scaleY).
- Every aspect of the element scaled, like border , text, and so on.
- [Transform-Origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin): It takes the original origin which is the **middle** of the element, and scale it from there.
- The default otigin is the center.
### 2.12- Transform: Rotate()
- Rotate elements on the page.
- transform: rotate(num deg).
- if num is positive the rotation will be clockwise, if it negative the rotation will be counterclockwise.
```
  transform: rotate(45deg) scale(2px 3px); //To add more than one transform function.
```
- [Angle Units](https://developer.mozilla.org/en-US/docs/Web/CSS/angle).
### 2.13- A Note on Vendor Prefixes
- For the nonstandered properties that not all browsers implement.
- [Vendor_Prefix MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix).
- [Autoprefixer](https://autoprefixer.github.io/).

### 2.14- Transitions Basics
- Transitions: Allows us to control animation speed when changing css properties.
- Transitions Properties:
  - transition-delay
  - transition-duration
  - transition-property
  - transition-timing-function
- [Transition MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 2.15- Transition-Duration and Transition-Property
- Transition-Duration: Specify how long should the transition last.
- Transition-Property: Specify what properities should be transitioned.
- [Example](https://codepen.io/Colt/pen/MoMNEw).
### 2.16- Transition-Timing-Function and Transition-Delay
- Transition-Delay: Specify how long of a delay before the transition starts.
- Transition-Timing-Function: what's the acceleration curve for the transition.
- [Easings](https://easings.net/).
- [Transition-Timing-Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
- [cubic-bezier](https://cubic-bezier.com).
### 2.17- Transition Shorthand
- transition: property duration timing-function delay, 
              anotherProperty duration timing-function delay.
- [Transition Shorthand MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 2.18- CSS Animation Performance
- What can be transitioned?
- What should be transitioned?
- [High-performance-animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).
### 2.19- Building An Animated Gallery
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
### 6.8- setTimeout and setInterval
- setTimeout: A function that asynchronously invokes a callback after a delay in milliseconds(Delay callback).
- clearTimeout -> Cansling timeout.
- setInterval: A function that continually invokes a callback after every X milliseconds, where X is provided to setInterval(Repeat callback).
- clearInterval -> Cansling iterval.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-23).
- Hint: The returned timerId is a positive integer value which identifies the timer created by the call to setTimeout();
### 6.9- Exercise: countDown Function
- Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!".
### 6.10- countDown Exercise Solution
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
### 6.11- The Event Loop And The Queue
- The Queue: An ordered list of functions waiting to be placed on the stack (First in first out).
- The Event Loop: Functionality in the JavaScript runtime that checks the queue when the stack is empty, If the stack is empty, the front of the queue is placed in the stack.
- untill the delay is == 0, it's not run immediatlery, it runs after the stack is empty.
- callback placed into the queue.
- Single Threaded: Code execution is linear.  Code that is running cannot be interrupted by something else going on in the program.
- JavaScript is **Single Threaded**.
- [Slides](http://webdev.slides.com/eschoppik/mysql-107-16-18).
### 6.12- Promise Basics
- Promise: A promise is an object that represents a task that will be completed in the future.
- promise.then(callback) -> when there is no error.
- promise.catch(callback) -> when there is error.
- [Slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-19).
### 6.13- Promise Chaining
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
### 9.1- Section Introduction
- If you want to become a professional developer regardless front-end, backend or fullstack you need to understand how to write your own tests.
### 9.2- Writing Tests in the Browser
- Jasmine A framework to write tests.
- [jasmine.github](https://jasmine.github.io/index.html).
- [Slides](http://webdev.slides.com/eschoppik/testing-with-jasmine#/3/0/1).
### 9.3- Jasmine Syntax and Matchers
- Essential keywords:
  - describe() -> use to organize tests, describe something.
  - it() inside describe function, describe in more detail.
  - Each it function corresponding to a test and also calles a spec.
  - expect() -> inside it function.
  - where we make expectations or assertions about the functionality we are testing
  - returns an object which we ca attach other methods to.
  - These methods we attach onto the result of the expect function are called **[Matchers](https://jasmine.github.io/api/2.7/matchers.html)**.
  - toBe() -> uses the === operator and compares the result of the expect function with the value we passed in.
  - not.toBe() -> Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
  - toBeCloseTo() -> compare two values and accepts a second parameter to precision.
### 9.4- Writing Better tests with Hooks
- beforeEach(callback), afterEach(callback) -> to add a block of repetitive code that you would need to execute every time you start executing each spec.
- beforeEach(callback) run before each "it" callback.
- afterEach(callback) run after each "it" callback - useful for teardown.
- [Global](https://jasmine.github.io/api/2.7/global.html#)
### 9.5- Spies
- **Mocking**: concept in unit testing, it is a fixed object that poses as a function without having to go through the overhead of creating the real object.
- We strive to isolate specific functionality behaves under a variety of circumstances.
- when you create a Mock object it creates a fake object that takes the place of the real object.
- in jasmine Mocks are reffered to as spies.
- spy is usefull when you want to see how many times the function is called, what arguments a function is called with, and what the function returns.
- [Spying on JavaScript methods using Jasmine](https://rollout.io/blog/jasmine-spyon/).
- [Docs](https://jasmine.github.io/2.0/introduction.html#section-Spies).
### 9.6- Clocks
- It is installed by invoking jasmine.clock().install()
- setTimeout, setInterval.
- async code: it take an optional single argument (commonly called 'done') that should be called when the async work is complete.
- [Docs](https://jasmine.github.io/2.0/introduction.html#section-Asynchronous_Support).
### 9.7- TDD and BDD
- Some different ways to test our code.
- TDD - Test Driven Development -> the idea of TDD is that you write your test before you write your application code.
- BDD - Behavior Driven Development -> the idea of BDD is actually a subset of TDD, we describe the behavior of functionality and not just what what we expect the result to be.
### 9.8- Different Types of Tests
- unit tests are written for the purpose of providing that the parts of your application bahave as expected before they are put together.
- Application may fail when this units are combined, that leads to Integration tests.
- Integration tests: is meant to test the Integration of our units or larger parts of our application.
- Acceptance tests: involves performing tests on the full system which could be using your application on the browser or on device to see whether the appliction functionality satisfies a specification provided.
- The pupose of Acceptance tests is to evaluate the entire business or system requiremnets.
- Stress tests: the idea of it is to determine how effective your application can be under unfavorable conditions.

## Section 10: Advanced Array Methods
### 10.1- Section Introduction
- Foundation for functional programming.
- Reenforcement of more challenging JavaScript concepts.
- Foundation for declarative programming.
- Used everywhere in modern libraries and frameworks.
- Write cleaner and more concise code.
- [Slides](http://webdev.slides.com/eschoppik/advanced-array-methods).
### 10.2- forEach
- forEach ALWAYS returns undefined.
- implementation:
```
function forEach(array, callback){
    for(var i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}
```
### 10.3- Exercise: forEach
- create function doubleValues()
- onlyEvenValues()
- showFirstAndLast()
- addKeyAndValue()
- vowelCount()
### 10.- Exercise SOLUTION: forEach
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/advanced-array-methods/forEach/forEach-exercises.js).
### 10.4- map
- map ALWAYS returns a new array of the SAME length as the array it's invoked on.
- implementation:
```
function map(array, callback){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}
```
### 10.5- Exercise: Map
- doubleValues()
- valTimesIndex()
- extractValue(arr, key)
- extractFullName()
### 10.6- Exercise SOLUTION: Map
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/advanced-array-methods/map/map-exercises.js).
### 10.7- Filter
- The result of the callback will ALWAYS be a boolean.
- It returns an array.
- implementation:
```
function filter(array, callback){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            newArr.push(array[i]);
        }
    }
    return newArr;
}
```
### 10.8- Exercise: Filter
- filterByValue()
- find()
- findInObj()
- removeVowels(arr, key)
- doubleOddNumbers()
### 10.9- Exercise SOLUTION: Filter
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/advanced-array-methods/filter/filter-exercises.js).
### 10.10- Some
- The idea is if some of the values passed of the callback return true the entire function returns true.
- The result of the callback will ALWAYS be a boolean.
- implementation:
```
  function some(arr, callback){
  	for(var i=0; i < arr.length; i++){
  		if(callback(arr[i], i, arr)){
  			return true;
  		}
  	}
  	return false;
  }
```
### 10.11- Every
- The idea is if in order to every to return true every single value we iterate over has to return true to the callback function.
- The result of the callback will ALWAYS be a boolean.
- implementation:
```
  function some(arr, callback){
  	for(var i=0; i < arr.length; i++){
  		if(callback(arr[i], i, arr) === false){
  			return false;
  		}
  	}
  	return true;
  }
```
### 10.12- Exercise: Some and Every
- hasOddNumber()
- hasAZero()
- hasOnlyOddNumbers(arr, key)
- hasNoDuplicates()
- hasCertainKey()
- hasCertainValue()
### 10.13- Exercise SOLUTION: Some and Every
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/advanced-array-methods/some-every/some-every-exercises.js).
### 10.- Reduce
- The idea is that we can take an array and turn it into another data strucure.
- Whatever is returned from the callback function, becomes the new value of the accumulator!
### 10.14- Reduce Continued
- To change the data structure of an array we pass that data structure as the second parameter to the reduce function.
- One of the way to check if the key is exsits in an object is to use if in condition.
### 10.15- Exercise: Reduce
- extractValue()
- vowelCount(str)
- addKeyAndValue(arr, key, value)
- addKeyAndValue(arr, key, value)
- partition(arr, callback)
### 10.16- Exercise SOLUTION: Reduce
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/advanced-array-methods/reduce/reduce-exercises.js).
### 10.17- Array Methods Recap
- forEach iterates over an array, runs a callback on each value and returns undefined.
- map creates a new array, runs a callback on each value and pushes the result of each callback in the new array.
- filter creates a new array, runs a callback on each value and if the result of the callback returns true, that value is added to the new array.
- some iterates through an array and runs a callback on each value, if the callback for at least one value returns true, some returns true, otherwise false.
- every iterates through an array and runs a callback on each value, if the callback at any time returns false, every returns false.
- reduce returns an accumulated value which is determined by the result of what is returned to each callback.

## Section 11: Closures and the Keyword 'this'

### 11.1- Section Introduction
- [slides](http://webdev.slides.com/eschoppik/closures-and-the-keyword-this#/).
### 11.2- Introduction to Closures
- A closure only exists when an inner function makes use of variables defined from an outer function that has returned. If the inner function does not make use of any of the external variables all we have is a nested function.
- Inner functions don't remember everthing from the outer function, only remember the variables that they need.
### 11.3- Using Closures in the Wild
- The most common use cases is to create a concept of private variables.
- private variables: Can only be accessed in a certain scope and not modified from an external scope.
- To be completely private there is Immutability concept.
- The idea of Immutability: means that we can't change the value of something.
- To create that idea we return a copy of the array not the actual array.
### 11.4- Exercise: Closures
- specialMultiply(a,b)
- guessingGame(amount)
### 11.5- Exercise SOLUTION: Closures
- [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/closures-and-keyword-this/closures/closures-exercises.js).
### 11.6- Closures Recap
- Not all programming languages support closures, this something js specifically supports.
### 11.7- Introduction to the Keyword 'this'
- In js everytime that a function is run two special keywords are given to that function, arguments keyword and this keyword.
- Can be determined using four rules (global, object/implicit, explicit, new).
- **1. Global Context**: When 'this' is not inside of a declared object.
- It refers to the global object which in the browser is window object.
- Every variable you declare in the global scope is actually attached to the window object.
```
  console.log(this); // window
```
### 11.8- 'this' with Functions and "use strict"
- Anything we attach onto the global object becomes a global variable which means we can use it outside of this function.
- To get access to the variable inside function we omitting the var keyword inside of our function "Bad practice".
- Best practice is to declare all of our variables at the top of our code even if they don't have a value and then assign those values at a later time.
- In ES5 there is use strict mode, when we enable this the value of this keyword inside the function is undefined.
- This means when we try to attach properities onto the keyword this when strict mode we get a type error.
### 11.9- Object/Implicit Binding
- **2. Implicit/Object**: When the keyword 'this' IS inside of a declared object.
- The value of keyword this will be always be the closest parent object.
```
var person = {
    firstName: "Elie",
    determineContext: this;
}
person.determineContext; // window
```
- A keyword 'this' is defined when a function is run! There is not a function being run here to create a new value of the keyword 'this' so the value of 'this' is still the window!
### 11.10- Explicit Binding
- **3. Explicit Binding**: Can change the value of the keyword "this".
- Whenever you see the call, apply, and bind methods you can easily determine what the value of the keyword this will be, because you get to set it as the first to each of these functions.
- These three methods can only be invoked by functions. Call, apply and bind are methods that can only be invoked by functions not by other data types.
### 11.11- Call
- func.call(object).
- there is another use case for Call method is convert an array-like-object into an array.
- **Array-Like Objects**: Some objects in JavaScript look like an array, but they aren’t one. That usually means that they have indexed access and a length property, but none of the array methods. Examples include the special variable arguments, DOM node lists, and strings.
- slice method can also be called to convert Array-like objects/collections to a new Array. You just bind the method to the object. but instead of the target of slice (the keyword this) being that array, let's set the target of the keyword `this` to be our divs array-like-object.
```
var divsArray = [].slice.call(divs);
// you might also see this as Array.prototype.slice.call(divs) 
// they do the same thing
```
### 11.12- Apply
- The only diffrence between call and apply is when we have arguments to the function that we're using call or apply on.
- with call aguments are passed as separetd comma values, with apply arguments are passed as values in an array.
- When a function does not accept an array, apply will spread out values in an array for us!
```
  var nums = [5,7,1,4,2];
  Math.max(nums); // NaN
  Math.max.apply(this, nums); // 7
```
### 11.13- Bind
- The parameters work like call, but bind returns a function with the context of 'this' bound already.
- One common use case is when we don't know all of the arguments that will be passed to a function, that means we don't want to invoke the function right away, we call this Partiol application.
- **Partiol application**: takes some of args now and all of rest args later.
- Another common use case of bind() is to set the context of the keyword this for a function that will be called at a later point of time.
- Commonly it happens when dealing with asynchronous code.
- setTimeout is an example of a asynchronous code.
### 11.14- Bind Continued
- Since the setTimeout is called at a later point of time, the keyword "this" doesn't refer to the parent object, it actually refers to the global object.
- call and apply invoke a function right away and doing thet would defeat the purpose of setTimeout.
- So using bind comes with asynchronous code.
### 11.15- Exercise: Call, Apply, and Bind
- arrayFrom(arrayLikeObject)
- sumEvenArguments()
- invokeMax(fn, num)
- once(fn, thisArg)
- flip(fn, thisArg)
- bind(fn, thisArg)
### 11.16- Exercise SOLUTIONS: Call, Apply, Bind
- [SOLUTIONS](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/closures-and-keyword-this/call-apply-bind/call-apply-bind-exercises.js).
### 11.17- The 'new' Keyword and section recap
- **4. The 'new' keyword**: We can set the context of the keyword 'this' using the 'new' keyword.
- when the new keyword is used a new object is created.
- new keyword is used with a function and inside of the function definition, the keyword 'this' will refer to the object that is created.
- when new is used an Implicit return this is added tothe function which uses it.

## Section 12: Object Oriented Programming with JavaScript

### 12.1- Introduction to Object Oriented Programming with JavaScript
- Object Oriented Programming: it's a programming model based around the idea of objects and blueprints which create object.
- we call this blueprints classes and the objects that we create from our classes are traditionally called instances.
- Instead of making an infinite number of different objects, we can create a function to construct these similar objects.
- we call these kinds of functions "constructor" functions.
- [Slides](http://webdev.slides.com/eschoppik/oop-in-javascript#/).
### 12.2- The 'new' Keyword
- It first creates an empty object.
- It then sets the keyword 'this' to be that empty object.
- It adds the line 'return this' to the end of the function, which follows it.
- It adds a property onto the empty object called "__proto__", which links the prototype property on the constructor function to the empty object (common called Dunder proto).
### 12.3- Refactoring with Multiple Constructors
- We can avoid duplication in multiple constructor functions by using call or apply.
```
  function Car(make, model, year){
      this.make = make;
      this.model = model;
      this.year = year;
      this.numWheels = 4;
  }
  function Motorcycle(){ // we don't need to even pass in parameters!
      // even better using apply with arguments
      Car.apply(this, arguments);
      this.numWheels = 2;
  }
```
### 12.4- Exercise: Constructor Functions
- - [Exercise](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/object-oriented-programming/constructors/constructors-exercises.js).
### 12.5- Exercise SOLUTION: Constructor Functions
```
function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
    this.multiplyFavoriteNumber = function(num){
      return num * this.favoriteNumber;
    }
}

function Child(firstName, lastName, favoriteColor, favoriteFood){ 
    Parent.apply(this, arguments)
}
```
### 12.6- Introduction to Prototypes
- Every single function has a properity in it called prototype, which is an object.
- The prototype object has a property on it called "constructor", which points back to the constructor function.
```
  Person.prototype.constructor === Person; // true
```
- since we create object from constructor function using new keyword this prototype property added to these objects, and can be accessed be Dunder property(__proto__).
```
object.__proto__ === Person.prototype; // true
```
### 12.7- The Prototype Chain
- Prototype is an object wich has properities and methods placed on it.
- These methods and properities are shared and accessable by any other object that is created from the constructor function when the new keyword is used.
- objects created by the same constructor have a shared prototype,.
### 12.8- Adding Methods to the Prototype
- Every time we make an object using the new keyword we have to redefine the sayHi function!.
- every time we create new object the functions in constructor are redefined.
- To define once we add functions to the prototype properity not to constructot.
```
function Vehicle(make, model, year){
    this.make = make;
    this.model = model
    this.year = year
    this.isRunning = false
}
Vehicle.prototype.turnOn = function (){
    return this.isRunning = true
}
```
### 12.9- Exercise SOLUTIONS: Prototypes
- [Exercise and Solutions](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/object-oriented-programming/prototypes/prototypes-exercises.js).
### 12.10- Prototypal Inheritance
- The passing of methods and properties from one class to another.
- Inheritance should only affect the chid not the parnt.
- in js, passing prototype properity from one constructor to another.
- we can't just assign one object to another because it just create a refrence.
- Object.create: Creates a brand new function and accepts as its first parameter, what the prototype object should be for the newly created object.
- new keyword will do almost the same thing, but add additional unnecessary properties on the prototype object (since it is creating an object with undefined properties just for the prototype), So we use Object.create.
- Reset the constructor property to the child constructor.
### 12.11- Exercise SOLUTIONS: Inheritance
- [Exercise and Solution](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/object-oriented-programming/inheritance/inheritance-exercises.js).

## Section 13: Creating JSON API's With Node and Mongo

### 13.- Preparing For React
- The main goal is Preparing For React.
### 13.- Defining Our API Gameplan
### 13.- SUPER IMPORTANT: UPDATED C9 INSTALLATION INSTRUCTIONS
### 13.- Installing NodeJS
### 13.- Cloud9 Without A Credit Card Instructions
### 13.- Installing Node Locally
### 13.- Creating Our Initial Express Application
### 13.- Responding With JSON
### 13.- Installing Mongo
### 13.- Defining Our Schema
### 13.- Defining The Index Route
### 13.- Defining The Create Route
### 13.- Defining The Show Route
### 13.- Defining the Update Route
### 13.- Defining the Delete Route
### 13.- Refactoring Our API

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
