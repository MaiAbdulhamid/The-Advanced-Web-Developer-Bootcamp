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
