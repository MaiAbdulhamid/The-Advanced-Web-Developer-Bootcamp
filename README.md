# The-Advanced-Web-Developer-Bootcamp

## section 1: Course Introduction
- The Advanced Web Developer Bootcamp course is taught by expert Bootcamp trainers. The product you're going to know has actually been taught to numerous trainees personally and numerous thousands online.

## section 2:
<details>
  <summary>CSS Animations: Transforms and Transitions</summary>
  
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
  
</details>


## Section 3:
<details>
  <summary>CSS Animations: Keyframes</summary>
  
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
  
</details>


## Section 4:
<details>
  <summary>Advanced CSS: Layout With Flexbox</summary>
  
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
  
</details>


## Section 5: Project: Building A Startup Site
### 5.1- Section Introduction
- Compining what we learn about css animation and layout to make something
### 5.2- Project: Introduction
- [The Original Template](https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox).
- [My Work](https://github.com/MaiAbdulhamid/The-Advanced-Web-Developer-Bootcamp/tree/main/01%20Building%20A%20Startup%20Site).

## Section 6: 
<details>
  <summary>Async Foundations</summary>
  
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
  
</details>

## Section 7:
<details>
  <summary>AJAX Part 1: XHR and Fetch</summary>
  
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

  
</details>

## Section 8: AJAX Part 2:
<details>
  <summary>jQuery and Axios</summary>
  
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
  
</details>


## Section 9:
<details>
  <summary>Testing With Jasmine</summary>
  
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
  
</details>

## Section 10:
<details>
  <summary>Advanced Array Methods</summary>
  
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
  
</details>


## Section 11:
<details>
  <summary>Closures and the Keyword 'this'</summary>
  
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
  
</details>


## Section 12:
<details>
  <summary>Object Oriented Programming with JavaScript</summary>
  
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
  
</details>

## Section 13:
<details>
  <summary>Creating JSON API's With Node and Mongo</summary>
  
  ### 13.1- Preparing For React
  - The main goal is Preparing For React.
  ### 13.2- Installing NodeJS
  - using cloud9 IDE environment.
  ### 13.3- Creating Our Initial Express Application
  - cmd:
    - mkdir appFolder //make app directory
    - cd appFolder //change directory to appFolder
    - npm init //create package.json file.
    - npm install express //to install express.
    - touch index.js //main file witch server stat with.
    - node index.js //To run app into the server.
  - require express at index.js.
  - make the first get request to root route '/'.
  - to get port in cloud9 -> process.env.PORT.
  ```
    const express = require('express');
    const app     = express();
    const port    = process.env.PORT || 3000;

    app.get('/', function(req, res){
        res.send("Hello World!")
    })

    //Listen to port
    app.listen(3000, function(){
        console.log('App is Running on port 3000');
    })
  ```
  ### 13.4- Responding With JSON
  - In Express .send() is dynamic depends on the content we passed in.
  - res.send(string) -> as html.
  - res.send(object) -> as Json.
  - in json case there is req.json() method wich sends as json.
  - in fact .send() has .json() inside it.
  - use project url at postman GET request to show the type of data in headers.
  ### 13.5- Installing Mongo
  - $ sudo apt-get install mongodb-org
  - $ mkdir data
  - $ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
  - $ chmod a+x mongod
  - $ cd ~ 
  - $ ./mongod //start mongodb
  - $ npm install mongoose //conect mongo with express app.
  - [github setting_up_mongodb](https://github.com/c9/docs.c9.io/blob/master/src/persistence/setting_up_mongodb.md).
  ### 13.6- Defining Our Schema
  - make modelsfolder, inside it make index.js and todo.js.
  - inside models/index.js
  ```
  const mongoose = require('mongoose')
  mongoose.set('debug', true)
  mongoose.connect('mongodb://localhost:27017/tododb') //db url
  mongoose.Promise = Promise;

  module.exports.Todo = require('./todo')
  ```
  - inside todo define todo schema
  ```
  const mongoose = require('mongoose')
  todoSchema = new mongoose.Schema({
      name: {
          type: String,
          required: "Name can't be blank!"
      },
      completed: {
          type: Boolean,
          default: false
      },
      created_date: {
          type: Date,
          default: Date.now
      }
  });

  const Todo = mongoose.model('Todo', todoSchema);

  module.exports = Todo
  ```
  ### 13.7- Defining The Index Route
  - [Routing](https://expressjs.com/en/guide/routing.html).
  - make routes folder, inside it make todo.js.
  - inside routes/todo.js:
  ```
  var express = require('express');
  var router  = express.Router();
  var db      = require('../models')
  router.get('/', function(req, res){
      db.Todo.find()
      .then(function(todos){
          res.json(todos)
      })
      .catch(function(error){
          res.send(error)
      })
  })
  module.exports = router
  ```
  - require routes/todo.js at main index.js.
  ### 13.8- Defining The Create Route
  - inside routes/todo.js: make post router request.
  - $ npm install body-parser
  ### 13.9- Defining The Show Route
  - Retrive todos /:todoID.
  - Use req.params.todoID to retrive specific item data by id.
  ```
  router.get('/:todoId', function(req, res){
      db.Todo.findById(req.params.todoId)
      .then(function(todo){
          res.send(todo)
      })
      .catch(function(error){
          res.send(error)
      })
  })
  ```
  ### 13.10- Defining the Update Route
  - using put request.
  - findOneAndUpdate(howToFind, thePartThatweUpdated, toResponseWithTheNewData)
  ```
  router.put('/:todoId', function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedTodo){
      res.send(updatedTodo)
    })
    .catch(function(error){
      res.send(error)
    })
  })
  ```
  ### 13.11- Defining the Delete Route
  - using delete request.
  - remove(deleteUsingSomething)
  ```
  router.delete('/:todoId', function(req, res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
      res.json({message: "Todo is Deleted"})
    })
    .catch(function(error){
      res.send(error)
    })
  })
  ```
  ### 13.12- Refactoring Our API
  - move our logic code into a separate helper.
  - [exports VS module.exports](https://www.hacksparrow.com/nodejs/exports-vs-module-exports.html).
  - make helpers folder and inside it make todo file.
  - inside helpers/todo we separate logic functions and exports it to use at router.js.
  
</details>


## Section 14:
<details>
  <summary>Codealong: Single Page Todo List with Express, Mongo, and jQuery</summary>
  
  ### 14.1- Introducing Our Single Page App
  - Todo app using AJAX with jQuery.
  ### 14.2- Serving Static Files and Nodemon
  - Make views directory, and make file index.html.
  - inside main indx.js use express to view html files:
  ```
  app.use(express.static(__dirname + '/views'))

  app.get('/', function(req, res) {
    res.sendFile('index.html')
  })
  ```
  - make public folder to css files.
  ```
  app.use(express.static(__dirname + '/public'))
  ```
  - make app.js file inside public folder.
  - Now everything inside views ans public directoties are served as static file.
  - $ npm install nodemon -> restart server automaticly.
  ### 14.3- Adding jQuery and The Starter CSS
  - use jQuery CDN.
  - Add starter files.
  ### 14.4- Writing The Initial AJAX Call
  - in app.js file adding AJAX code:
  ```
  $(document).ready(function () {
    $.getJSON("/api/todos").then(addTodos);

    function addTodos(todos) {
      todos.forEach((todo) => {
        let newTask = $('<li class="task" >' + todo.name + '</li>')
        let list = $('.list');
        list.append(newTask)
      });
    }
  });
  ```
  ### 14.5- Displaying Our Todos Correctly
  - Conditionly add class done if the todo is completed inside forEach:
  ```
      if(todo.completed){
        newTask.addClass('done')
      }
  ```
  ### 14.6- Connecting the Form to our API
  - Checking if hit the enter key, if done take the data and send new request to send data.
  - add eventListener.
  - make post request.
  - make appendTodo function to append the new todo added.
  - clear input val after pressing enter.
  ```
    $('#todoInput').keypress(function(e){
      if(e.which === 13){ //Enter key
        createTodo();
      }
    });
    function appendTodo(todo){
      let tasks = $('<li class="task" >' + todo.name + '</li>')
      let list = $('.list');
      list.append(tasks);
      if(todo.completed){
        tasks.addClass('done')
      }
    }
    function addTodos(todos) {
      todos.forEach((todo) => {
        appendTodo(todo)
      });
    }
    function createTodo(){
      let newTask = $('#todoInput').val();
      console.log(newTask);
      $.post("/api/todos", {name: newTask})
      .then(function(newTodo){
        $('#todoInput').val('')
        appendTodo(newTodo)
      })
      .catch(function(error){
        console.log(error);
      })
    }
  ```
  ### 14.7- Making the Delete Button Work
  - when page loads span not exist, so we can't target span to listen to click event when delete.
  - instead, we target list which exists in page, and specify span.
  - Delete from the dom and from db.
  - send id when todo is added using hidden attr function data('arrt', value).
  ```
  $('.list').on('click','span' ,function(){
    deleteTodo($(this).parent())
  })
  function appendTodo(todo){
    tasks.data('id', todo._id) //add this line to the existed code
  }
  function deleteTodo(todo){
    let todoId = todo.data('id')
    let url    = '/api/todos/'+ todoId
    $.ajax({
      method: 'DELETE',
      url: url
    }).then(function(res){
      todo.remove();
    }).catch(function(err){
      console.log(err);
    })
  }
  ```
  ### 14.8- Toggling Todo Completion
  - add click listener to li(the same way we add to span).
  - To make clicking on li not affect on the span, use stopPropagation() before calling delete method.
  - event.stopPropagation(): preventing any parent event handlers from being executed.
  - add another hidden attr with the value of completed from db.
  - make variable to hidden attr, and to data that will be sent.
  - after making the put request: 
    - toggleClass done.
    - change the value of hidden attr.
  ```
    $('.list').on('click','li' ,function(){
      updateTodo($(this))
    })
    function updateTodo(todo){
      console.log(todo.data('completed'));
      let url         = '/api/todos/' + todo.data('id')
      let isCompleted = !todo.data('completed')
      let data        = {completed: isCompleted}
      $.ajax({
        method: 'PUT',
        url: url,
        data: data
      })
      .then(function(updatedTodo){
        todo.toggleClass('done');
        todo.data('completed', isCompleted)
      })
    }
    //added to the rest of the code
    $('.list').on('click','span' ,function(e){
      e.stopPropagation();
    })
    function appendTodo(todo){
      tasks.data('completed', todo.completed)
    }
  ```
  
</details>


## Section 15:
<details>
  <summary>ES2015 Part I</summary>
  
  ### 15.1- Introduction to ES2015
  - ES stands for ECMAScript
  - ES2015 – is the latest finalized specification of the language.
  - [History Topic](https://dev.to/skaytech/history-of-ecma-es5-es6-beyond-lpe).
  - [Slides](http://webdev.slides.com/eschoppik/es2015).
  ### 15.2- Const
  - alternative to var keyword for declaring variable.
  - make variables can't be redeclared.
  - with const we do not able to change Primitive values like string, numbers, boolean, undefined and symbol.
  - we can still change the value of object and arrays even if we are using const.
  - even if we can change the value we still forbidden from creating a new variable with the same name.
  - Immutable data: data that can't be changed.
  - const doesn't make objects immutable.
  ### 15.3- Let
  - Can reassign, can not redeclare
  - Creates a brand new kind of scope called block scope.
  - inside a function it doesn't behave as the var keyword.
  - Hoisting term: to explain the behavior of what the var keyword the.
  - The JavaScript engine treats all variable declarations using “var” as if they are declared at the top of a functional scope(if declared inside a function) or global scope(if declared outside of a function) regardless of where the actual declaration occurs. This essentially is “hoisting”
  - let does hoist, but we can not access the value - it is in a TDZ (Temporal Dead Zone).
  ```
  for(var i = 0; i < 5; i++){
      setTimeout(function(){
          console.log(i);
      },1000)
  }

  // 5 (five times)
  ```
  - by the time the setTimeout runs the for loop has already finished the running.
  - let solves this problem.
  ### 15.4- Template Strings
  ```
  let name = "Tim"
  let str = `Hello ${name}`; //Template Strings
  ```
  ### 15.5- Introduction to Arrow Functions
  - new syntax to write a function.
  - Replace the keyword 'function' with =>
  - You can put arrow functions on one line.
  - But you must omit the return keyword as well as curly braces.
  - If we only have one parameter, we do not need parenthesis around it with arrow functions.
  ### 15.6- Arrow Functions Continued
  - Arrow functions are not exactly the same as regular functions!
  - Arrow functions do not get their own 'this' keyword
  - The value of keyword this is inside arrow function is the value of 'this' outside the function(enclosing context).
  - arrow functions do not get their own keyword arguments.
  ### 15.7- Coding Exercise - Arrow Functions Exercises
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-1/arrow-functions/arrow-functions-exercises.js).
  ### 15.8- Default Parameters
  ```
  function add(a=10, b=20){
      return a+b;
  }

  add(); // 30
  add(20); // 40
  ```
  ### 15.9- For...of Loops
  - Iterates on arrays.
  - There is new primitive type called symbol.
  - There is a method on symbols called iterator which specifies how a data type is iterative over.
  - For...of Can only be used on data structures with a Symbol.iterator method implemented.
  - Object don't have iterator method.
  - so we can't use for ..of with objects.
  - [Symbol MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol).
  ### 15.10- Rest
  - The rest operator always returns an array 
  - Is called the rest operator "only" when it is a parameter to a function
  - It accessed without the ... in a function.
  - A better alternative to using the arguments array-like- object.
  ### 15.11- Spread
  - Used on arrays to spread each value out (as a comma separated value).
  ### 15.12- Exercise SOLUTION: Rest and Spread
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-1/rest-spread/rest-spread-exercises.js).
  ### 15.13- Object Enhancements
  - **Object Shorthand Notation**: if the property and the value are the same we can write the key only.
  - **Object Methods**: we can't use arrow functions with objects, but we can omit the function keyword.
  - **Computed Property Names**: we can use pracket notaion while defining our object.
  ### 15.14- Object Destructuring
  - Destructuring is Extracting values from data stored in objects and arrays.
  ```
  var instructor = {
      firstName: "Elie",
      lastName: "Schoppik"
  }
  var {firstName, lastName} = instructor;
  firstName; // "Elie"
  lastName; // "Schoppik"
  ```
  - The catch here that we have to name our variables the same exact names as the keys in the object we are Destructuring.
  - we can use different name by using column.
  ```
  var {firstName: first, lastName: last} = instructor;
  first; // "Elie"
  last; // "Schoppik"
  ```
  ### 15.15- Array Destructuring
  ```
  function returnNumbers(a,b) {
    return [a,b];
  }
  [first, second] = returnNumbers(5,10); 
  first; // 5
  second; // 10

  ```
  - Swapping Values: when you don't want to make a new array but just want to switch the palces of certain values.
  - It's common in sorting algorithms.
  ```
  // ES2015
  function swap(a,b){
      return [a,b] = [b,a];
  }

  swap(10,5); // [5,10]
  ```
  ### 15.16- Exercise : Destructuring
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-1/destructuring/destructuring-exercises.js).

  
</details>

## Section 16: ES2015 Project - Guess the Password
### 16.1- Section Introduction
- Update some ES5 Code to use ES6.
### 16.2- Introduction to Guess the Password
- [Project](https://github.com/rithmschool/guess-the-password-assignment).
### 16.3- Guess the Password Code Walkthrough
- Fisher–Yates shuffle: It involves generating a random index and swapping values based on that random index.
- Reading and understanding other developers code is the same important as writing your own code.

## Section 17:
<details>
  <summary>ES2015 Part II</summary>
  
  ### 17.1- Section Introduction
  - [Slides](http://webdev.slides.com/eschoppik/es2015-part-2-14).
  ### 17.2- Introduction to the 'class' Keyword
  - Refactor Object oriented code to use the class, extends and super keywords.
  - A new reserved keyword provided by ES2015.
  - The class keyword creates a constant (can not be redeclared).
  - The class keyword is an abstraction of constructor functions and prototypes.
  - JavaScript does not have built in support for object oriented programming
  - The class keyword does not hoist, so it must be declared at the top.
  - Still use `new` keyword to create objects.
  - OOP: when we invoke or create object from a class we call it instantiation or creating an instance.
  ### 17.3- Instance Methods
  - Define methods inside class.
  - no 'function' keyword - similar to object shorthand notation
  - if we create method inside the constructor it will be redefined every time we create an instance from this class.
  ### 17.4- Class Methods
  - Class methods are created using the static keyword.
  - if we don't want every object created from the class to have it's own methods.
  ### 17.5- Coding Exercise - Class Keyword Exercises
  - [Solutions](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-2/class-keyword/class-keyword-exercises.js).
  ### 17.6- Inheritance with ES2015
  - Passing along methods and properties from one class to another.
  - if one class extends another class it will have all the methods that that class it extends from has.
  ### 17.7- Super
  - parent class: the class which has passes down methods and properites to the child class.
  - The idea behind super is to find a method with the same name in the parent class.
  - super can only be used if a method by the same name is implemented in the parent class.
  ### 17.8- Coding Exercise - Inheritance and Super
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-2/es2015-inheritance/es2015-inheritance-exercises.js).
  ### 17.9- Maps
  - Also called "hash maps" in other languages
  - Until ES2015 - objects were replacements for maps
  - Similar to objects, except the keys can be ANY data type!
  - Created using the new keyword.
  - maps implement a Symbol.iterator which means we can use a for...of loop.
  - WeakMap: Similar to a map, but all keys MUST be objects.
  ### 17.10-Sets
  - a data structre in which all the values are uniqe.
  - Created using the new keyword.
  - Use when you want to ignore duplicate values when you don't need to identify values with keys or care about ordering of values.
  - WeakSet: Similar to a set, but all values MUST be objects.
  ### 17.11- Coding Exercise - Maps and Sets Exercises
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-2/maps-sets/maps-sets-exercises.js).
  ### 17.12- Promises
  - A one time guaranteed return of some future value.
  - When that value is figured out - the promise is resolved/fulfilled or rejected.
  - The idea is that we have to create a new promise if we want to perform the same asynchronous operation.
  - Since a promise always returns something that has a .then (thenable) - we can chain promises together and return values from one promise to another!
  ### 17.13- Promises Continued
  - Promise.all: Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected (fail fast).
  - The promises don't resolve sequentially, but Promise.all waits for them
  ### 17.14- ES2015 Promises Assignment
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-2/promises/promises-exercises.js).
  ### 17.15- Generators
  - A special kind of function which can pause execution and resume at any time.
  - Created using a *.
  - When invoked, a generator object is returned to us with the keys of value and done.
  - Value is what is returned from the paused function using the yield keyword.
  - Done is a boolean which returns true when the function has completed.
  - If we had a function that is very time consuming to run and we only need to run parts at time.
  - generator has Symbol.iterator -> for ... of loop.
  - We can use generators to pause asynchronous code.
  ### 17.16- Object.assign and Array.from
  - A common problem when dealing with js is making a coping objects.
  - When we assign one object to another we are just assigning a refrence.
  - Object.assign: Create copies of objects without the same reference.
  - if you don't start with an emty object object on assign will still keep a refrenece to another obejct included in it.
  - Not a deep clone: If we have objects inside of the object we are copying - those still have a reference.
  - Array.from: Convert other data types into arrays
  ### 17.17- Additional Helpful ES2015 Methods
  - find: Returns the value found or undefined if not found.
  - findIndex: Similar to find, but returns an index or -1 if the value is not found.
  - includes: returns a boolean if a value is in a string - easier than using indexOf.
  - Number.isFinite: Static method. A handy way for handling NaN being a typeof number.
  ### 17.18- Coding Exercise - ES2015 Methods Exercises
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2015-16-17-part-2/es2015-methods/es2015-methods-exercises.js#L23).
  
</details>


## Section 18:
<details>
  <summary>ES2016 and ES2017</summary>
  
  ### 18.1- Section Introduction
  - [Slides](http://webdev.slides.com/eschoppik/es2015-part-2-14#/55).
  ### 18.2- ES2016 Exponentiation Operator and Includes
  - Exponentiation Operator **: -> base ** exponent == Math.pow(base, exponent).
  ```
  //ES2016
  var nums = [1,2,3,4];
  var total = 2;

  for(let i = 0; i < nums.length; i++){
      total **= nums[i];
  }
  ```
  - arr.includes(value): check if the array includes the value.
  ### 18.3- padStart and padEnd
  - The first parameter is the total length of the new string.
  - The second parameter is what to pad with from the start(or the end). The default is an empty space.
  ```
  "awesome".padStart(10,'!'); // "!!!awesome"
  "awesome".padEnd(10,'!'); // "awesome!!!"
  ```
  - [How one developer just broke Node](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/).
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart).
  ### 18.4- Async Functions Introduction
  - A special kind of function that is created using the word async.
  - The purpose of async functions is to simplify writing asynchronous code, specifically Promises.
  - What makes them really special is the await keyword.
  - Await keyword is a reserved keyword that can only be using inside async functions.
  - await pauses the execution of the async function and is followed by a Promise. The await keyword waits for the promise to resolve, and then resumes the async function's execution and returns the resolved value.
  - We can also place async functions as methods inside objects.
  - We can also place async functions as instance methods with es2015 class syntax.
  - No .then or callback or yield necessary.
  - If a promise is rejected using await, an error with be thrown so we can easily use a try/catch statement to handle errors.
  ### 18.5- Async Functions Continued
  - If you find yourself making lots of HTTP requests using the awake keyword, Refactor: 
  ```
  // MUCH FASTER!
  async function getMovieData(){
      var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
      var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

      var titanicData = await titanicPromise;
      var shrekData = await shrekPromise;

      console.log(titanicData);
      console.log(shrekData);
  }

  getMovieData();
  ```
  - We can use Promise.all to await multiple resolved promises.
  ### 18.6- Coding Exercise - Async Functions Assignment
  - [SOLUTION](https://github.com/rithmschool/udemy_course_exercises/blob/solutions/es2016-and-2017/async-functions/async-functions-exercises.js).
  ### 18.7- Object Rest and Spread + Recap
  - Object Rest: Gather remaining (rest) of keys and values in an object and create a new one out of them.
  ```
  var instructor = {first:"Elie", last:"Schoppik", job:"Instructor", numSiblings:3};
  //Destructuring Data and then gather the ramains data into new object
  var {first, last, ...data} = instructor
  first // "Elie
  last // ""Schoppik"
  data //{job:"Instructor", numSiblings:3}
  ```
  - Object Spread: Spread out keys and values from one object to another.
  ```
  var instructor = {first:"Elie", last:"Schoppik", job:"Instructor"};
  var instructor2 = {...instructor, first:"Tim", last:"Garcia"};
  ```
  - Quite common in React and Redux
  
</details>

## Section 19:
<details>
  <summary>D3 and the DOM</summary>
  
  ### 19.1- Section Introduction
  - D3: Data-Driven Documents.
  - [d3js](https://d3js.org/).
  - [Example](https://rithmschool.github.io/d3_baby_names/).
  - [More Examples](https://github.com/d3/d3/wiki/Gallery).
  - [A Timeline of Each Year’s Top-200 Grossing Films](https://pudding.cool/2017/06/film-trends/)
  ### 19.2- An Introduction to D3
  - To begin -> load it at the bottom of html. [CDN](https://cdnjs.com/libraries/d3).
  ### 19.3- D3 Selections
  ```
  d3 //returns object if the script is exist
  d3.version // returns the version of d3
  //Selection
  /*accept avalid css selector*/
  d3.select('selector') //Select single selector
  d3.selectAll('selctors') //Select multiple elemnts
  //Access elemnts
  d3.selectAll('selctors').nodes() //returns array of matching Html elements.
  d3.selectAll('selctors').node() //returns the first matching Html elements.
  //Setting values
  d3.selectAll('li').style("property", "value") // set styles
  d3.selectAll('li').html("element")
  d3.selectAll('h1').style("property", "value").attr("attrName", "vallue").text("textValue"); //Chaining
  //Getting values
  d3.selectAll('h1').style("property") // return value
  d3.select('h1').text();// return text

  //To set or Remove Class attribute
  d3.select('h1').classed('classList', souldClassBeSet) //classList: class list separeted by sapce, souldClassBeSet: Boolean that checks if this classes should be added or removed
  ```
  ### 19.4- Selections and Callbacks
  - We can use callbacks instead of static values to set values.
  - Callback is run once forEach list item.
  - D3 imposes certain structure of callback.
  ```
  d3.select('li').style('font-size', () => Math.random() > 0.5 + 'px') // callback without parameters
  d3.selectAll('li').style('font-size', (_, idx) => idx % 2 === 0 ? "20px" : "23px") // callback accepts index of selected elemnts
  // Chaining dom levels
  d3.select(parent).style("property", "value")
  .select(child).style("property", "value")
    .select(anotherChild).style("property", "value")
  .select(anotherChild).style("property", "value")
  ```
  ### 19.5- Event Listeners in D3
  ```
  selector.on(eventType, callback)
  //To remove Event
  d3.select('h1').on('click', null)

  //Add note
  d3.select('#new-note').on('submit', function(){
    d3.event.preventDefault();
    let input = d3.select('input')
    d3.select('#notes')
      .append('p')
        .classed('note', true)
          .text(input.property('value'));
    input.property('value', '')
   })
  //Remove from the dom
  d3.selectAll('p').remove()
  ```
  ### 19.6- Exercise: Guess the Password Refactor
  - [Solution](https://github.com/rithmschool/guess-the-password-assignment).
  ### 19.7- Exercise: Notes App
  - [ٍStarter Code](https://gist.github.com/mmmaaatttttt/30534db95fa4473dce2c45912bd4908b).
  
</details>


## Section 20:
<details>
  <summary>Data Joins and Update Patterns in D3</summary>
  
  ### 20.1- Section Introduction
  - Make real data visualization.
  ### 20.2- Basic Data Joins and Enter Selections
  - Data join:  Instead of telling D3 how to do something, tell D3 what you want. You want the circle elements to correspond to data. You want one li per piece of information. Instead of instructing D3 to create lis, then, tell D3 that the selection "li" should correspond to data
  - The biggest difference between interacting with the domin d3 vs in vanilla js is that d3 provides us with a streamlined way to connect elements on the page to some set of underlying data.
  - d3 creates enter nodes that dosen't exist on dom or js code.
  - use .append to place that nodes into the page.
  - d3 callback structure:
    - function (d, i){}
    - d -> data bound to the current element, i the index of the current element in the selection
  - [Thinking with Joins](https://bost.ocks.org/mike/join/)
  - [Data Joins](https://www.d3indepth.com/datajoins/).
  ### 20.3- Exit Selections and Key Functions
  - d3 matches .enter or .exit to the dom elements by index.
  - That means that it will remove depends on the index of elements not depends on the condition.
  - To solve this problem we pass second parameter to .data(dataArr, keyFunction)
  - The returned value of keyFunction used to join elements and data.
  - keyFunction: This function should return a unique id value for each array element, allowing D3 to make sure each array element stays joined to the same DOM element.
  ### 20.4- The General Update Pattern in D3
  - When you are appending new elements on update make sure you first select the parent element you'd like to append before selecting the children, otherwise your new element will be append to the html tag.
  - we can think of every selection in d3 as having 3 parts:
    - The enter() selection corresponds to pieces of data that don't have elements on the page
    - The exit() selection corresponds to elements on the page that no longer have pieces of data that don't have 
    - The update selection corresponds to elements on the page  that are successfully joined to d3 data
  - d3 treats these selections separately.
  - to merge more than one selection use merge function.
  - merges selection and otherSelection together into a new selection
  - General Update Pattern: consits of 4 steps when you're joining an arbitary amount of data to an arbitary number of elements:
   1. grap the update selection, make any changes uniqe to that selection, and store the selction in variable
   2. Grab the exit selection and remove any unnecessary elements
   3. Grab the enter selection and make any changes uniqe to that selection
   4. merge the enter and updste selections and make any changes that you want to be shared across both selections

  - [Enter and exit](https://www.d3indepth.com/enterexit/).
  - [Starter Code](https://gist.github.com/mmmaaatttttt/611f2926ff6b3011194ab15947360aae).
  ### 20.5- Exercise: Character Frequencies
  - [Starter Code](http://bl.ocks.org/mmmaaatttttt/raw/611f2926ff6b3011194ab15947360aae/?).
  ### 20.6- Solution: Character Frequencies
  - [Solution](https://gist.github.com/mmmaaatttttt/8f1194bd2d6ffe05ad82606db4df68dc)
  
</details>

## Section 21:
<details>
  <summary>SVG and D3</summary>
  
  ### 21.1- Section Introduction
  - Build Graphs with d3 and SVG.
  ### 21.2- Introduction to SVG
  - SVG: stands for scalable vector graphics.
  - There is two types of graphics:
    - vector graphics 
    - raster graphics: Ex. gif, jpg, png
  - The fundamental building block of a **raster image** is the pixel
  - The fundamental building block of a **svg image** is the lines and curves
  - The biggest difference is how the image do under scaling
  - To make svg use < svg > < svg /> tag
  - inside svg use line tag to 
  ```
  <svg 
    version="1.1" 
    baseProfile="full"
    xmlns="http://www.w3.org/2000/svg">
    <g stroke-width="5px" stroke="black" >
      <line x1="100" y1="100" x2="200" y2="200" ></line>
      <line x1="100" y1="200" x2="200" y2="100" ></line>
    </g>
  </svg>
  ```
  - [MDN](https://developer.mozilla.org/ar/docs/Web/SVG)
  - [codepen](https://codepen.io/mmmaaatttttt/pen/MoJKQr?editors=1100)
  ### 21.3- Rectangles, Polygons, and Circles in SVG
  - There is no z-index in svg element, the order of elements is determined by html.
  - Every rect with sharp corners is an Example of Polygons
  - Polygons: is any shape ends with straight line edges.
  ```
  <svg 
    version="1.1" 
    baseProfile="full"
    xmlns="http://www.w3.org/2000/svg">
      <polygon
      fill="yellow"
      stroke="black"
      stroke-width="8px"
      points="400,21.5 450.5,177 614,177 481.5,273 532.5,428.5 400,332.5 267.5,428.5 318.5,273 186,177 349.5,177"
    />
    <circle cx="400" cy="250" r="60" fill="black" />
    <circle cx="400" cy="235" r="65" fill="yellow" />
    <circle cx="370" cy="210" r="10" fill="black" />
    <circle cx="430" cy="210" r="10" fill="black" />
  </svg>
  ```
  ### 21.4- Text Elements in SVG
  - [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text)
  ### 21.5- Path Elements in SVG
  - We can draw all the shapes with just path element.
  - d attr is the most important attr, which we describe how to drow the path.
  - we can think drawing a path similer to the way draw paths with a pencil on a paper, describe to computer how we want to move the pencil.
  - there are 6 commands to draw path:
    - **For drawing Lines**:
    1. Mx y (move) -> moves the curser to position, it doesn't draw anything.
    2. Lx y (line) -> Draws line from current curser's position to the position specified
    - by chaining M, L we got Polygons functionality
    3. Zx y (close path) -> Closes the path with line(from current position to starting position)
    - H -> Horizontal line, V -> vertical line
    - **For drawing Curves**:
    4. Qx y (Quadratic bezier curve) ->
    5. Cx y (Cubic bezier curve) -> C cx cy, cx2 cy2, x y -> C control point 1, control point 2, destination
    6. Ax y (circular arc) -> A rx ry rotate largeArc sweep x y -> A radiusx
    - when rx == ry, Draw arc of a circle, otherwise you draw the arc of an ellipse .
    - Uppercase represents the location you want to go to
    - Lowercase represents how far you want to go from your current position.
  - [ d attr MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d)
  ### 21.6- Exercise: SVG Flags
  - [Flags shapes](https://flagpedia.net/index).
  ### 21.7- Solution: SVG Flags
  - [Solution](https://codepen.io/mmmaaatttttt/pen/GvMZMq?editors=1100).
  ### 21.8- Introduction to SVG and D3
  - D3 makes svg y axis and x axis at normal position.
  - make x coordinate increases the same range of y coordinate -> .attr('x', (d, i) => yWidth * i ) -> 0, yWidth * 1, yWidth * 2 ...
  - No month had more than 2.5 million births, so (births / 2.5e6) * 600 -> we get values between 0 and 600
  - [selections](https://www.d3indepth.com/selections/)
  
</details>

## Section 22:
<details>
  <summary>Intermediate D3</summary>
  
  ### 22.1- Extrema and Scales
  - Problems in the last projects:
   - finding extrema values manually
   - scalling data manually
  - D3 comes with functions to help us with this common tasks
  - d3.max(arr, callback) -> takes an array and returns the largest value in that array
  - d3.min(arr, callback) -> takes an array and returns the smalestvalue in that array
  - d3.selectLinear().domain([rangeOne]).range([rangeTwo]) -> to make sales from one range to another.
  ### 22.2- Scatterplots
  - [UN-data](http://data.un.org).
  - Meature births per capita rather than total numbers of birth(births/ population).
  - d3.extent(arr, callback) -> returns the values of min and max in an array
  - The circles twards the edges of the svg are getting cut off because their centers lie along the edges of svg
   - to solve this problem: set padding for svg and then update our scales to account for this padding
  ### 22.3- Axes and Gridlines
  - Axes: D3 functions to draw the axis
  - [Docs](https://github.com/d3/d3-axis).
  - It takes Scales as a parameter.
  - tickSize() -> To make gridelines.
  - stroke-dasharray: theLengthOTheDash, theDistanceBetweenDashes.
  - To add text and labels Do it fundu
  ### 22.4- Exercise: Scatterplot
  - [Starter Code](https://gist.github.com/mmmaaatttttt/db9b4e6f8b65787235cb33fc8c2e118a).
  ### 22.5- Histograms
  - Histograms: is a special type of bar chart in which values in a dataset are placed into bins.
  - The height of a rectangle in histogram represnts the number of data points in that bin
  - d3.histogram() -> returns function, if we pass to the function that is returned our data set , d3 will create bins from this values.
  - histogram.value([value]) -> Specifies what value should be used when creating bin.
  - [histogram](https://datacadamia.com/viz/d3/histogram)
  ### 22.6- Pie Charts
  - D3pie is a simple, highly configurable script built on d3.js for creating simple, attractive pie charts. It’s free, open source.
  - [Create Pie Chart using D3](https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js).
  
</details>


## Section 23:
<details>
  <summary>D3 Odds and Ends, and Advanced Graph Types</summary>
  
  ### 23.1- Tooltips
  - Tooltips allow you to gradually reveal extra information to users.
  - [Create Tooltips in D3.js](https://www.pluralsight.com/guides/create-tooltips-in-d3js).
  - update scatterplots project with Tooltips features.
  ### 23.2- Transitions
  - A transition is a selection-like interface for animating changes to the DOM. Instead of applying changes instantaneously, transitions smoothly interpolate the DOM from its current state to the desired target state over a given duration.
  - Transitions with pie charts gives error in console.
  - [d3-transition](https://github.com/d3/d3-transition)
  - update frequency-app project with transition features.
  ### 23.3- Managing Asynchronous Code with D3
  - using d3.json(), d3.csv().
  - d3.queue is used to run asynchronous tasks simultaneously and once the tasks are completed, perform operations on the results of the tasks.
  - [Data Loading in D3](https://www.tutorialsteacher.com/d3js/loading-data-from-file-in-d3js).
  - [d3-queue](https://github.com/d3/d3-queue).
  ### 23.4- An Introduction to GeoJSON
  - GeoJSON: is a standered for encoding geographic information.
  - It pased on Json.
  - The 3 concepts that are key to understanding map creation using D3 are:
    - GeoJSON (a JSON-based format for specifying geographic data)
    - projections (functions that convert from latitude/longitude co-ordinates to x & y co-ordinates)
    - geographic path generators (functions that convert GeoJSON shapes into SVG or Canvas paths).
  - [Geographic](https://www.d3indepth.com/geographic/).
  ### 23.5- An Introduction to TopoJSON
  - It is an extention of GeoJSON.
  - To use topoJson we need to convert:
    - TopoJSON to -> GeoJSON to -> path commands.
  - To convert TopoJSON to -> GeoJSON we need to include topoJSON library.
  - [TopoJSON](https://github.com/topojson/topojson).
  - [topoJSON.feature](https://github.com/topojson/topojson-client/blob/master/README.md#feature).
  - [How To Infer Topology](https://bost.ocks.org/mike/topology/).
  ### 23.6- Map Visualization Example
  - [projections](https://github.com/d3/d3-geo-projection#projections)
  ### 23.7- Nodes in Force-Directed Graphs
  - A force is simply a function that modifies nodes’ positions or velocities.
  - first, make simulation -> `forceSimulation(nodes)`.
  - forceCenter (for setting the center of gravity of the system)
  - forceManyBody (for making elements attract or repel one another)
  - forceCollide (for preventing elements overlapping)
  - forceX and forceY (for attracting elements to a given point)
  - forceLink (for creating a fixed distance between connected elements)
  - [Force-Directed Graph](https://observablehq.com/@d3/force-directed-graph).
  - [Force layout](https://www.d3indepth.com/force-layout/)
  ### 23.8- Links in Force-Directed Graphs
  - [links](https://github.com/d3/d3-force#links)
  ### 23.9- Dragging Nodes and Alpha Values
  - Steps Dragging Nodes:
    - Implement a drag feature on nodes
    - During drage, ignore forces from this simulation.
  - Simulation Cooling:
    - forces not applied continuously.
    - Forces are based on alpha values.
    - Alpha decays after every tick.
    - After reaching a minimum alpha, the simulation stops.
  - [simulation_alpha](https://github.com/d3/d3-force#simulation_alpha).

</details>


## Section 24: Project Building a Data Dashboard with D3

## Section 25:
<details>
  <summary>Introduction To React and JSX</summary>
  

  ### 25.1- Front-end Framework Introduction
  - Front-End Frameworks: JavaScript libraries that handle DOM manipulation.
  - React: A view library that uses composable components.
  - [slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-19-25)
  - [course exercises](https://github.com/rithmschool/udemy_course_exercises/tree/master/react)
  ### 25.2- First React Component
  - using ReactDOMFactories.
  ### 25.3- JSX
  - jsx -> looks like returning html from js code.
  - React uses Babel to convert jsx into vanilla js.
  - [slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-19-25-30)
  ### 25.4- JSX With JavaScript
  - Convert `class=""` to `className=""`.
  - All css properties written in camelCase.
  - `style` attribute takes an object.
  - all variables written in `{variable}`.
  ### 25.5- Exercise: Random Box: Solution
  ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>JSX Exercise</title>
      <script src="https://unpkg.com/react@16.0.0-rc.2/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16.0.0-rc.2/umd/react-dom.development.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script type="text/babel">
      class RandomBox extends React.Component {
        render() {
          const fontSize = Math.floor((Math.random() * 80)) + 20;
          const backgroundColor = ['red', 'green', 'blue', 'black'][Math.floor(Math.random() * 4)];
          return (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor,
              fontSize: `${fontSize}px`,
              height: '200px',
              width: '500px',
              color: 'white'
            }}>
              Random Box
            </div>);
        }
      }

      ReactDOM.render(<RandomBox />, document.getElementById("app"));
    </script>
  </body>
  </html>
  ```
  ### 25.6- Multiple React Components
  ```
  <script type="text/babel">
    class Hoppies extends React.Component{
      render(){
        const style = {fontSize: '1.5em'};
        const hoppies = ['writing', 'reading', 'drawing']
        return (
        <ul>
          {hoppies.map((h, i) => {
            return <li key={i} style={style}>{h}</li>
          })}
        </ul>)
      }
    }
    class Pet extends React.Component {
      render() {
        return (
        <div className="card">
          <h2 className="name">Moxie</h2>
          <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" />
          <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>

          <Hoppies />
        </div>);
      }
    }

    ReactDOM.render(<Pet />, document.getElementById("app"));
  </script>
  ```
  - [slides](http://webdev.slides.com/eschoppik/mysql-99-108-17-19-25-32)


</details>
