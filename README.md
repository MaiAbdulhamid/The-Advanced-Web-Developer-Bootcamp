# The-Advanced-Web-Developer-Bootcamp

## section 1: Course Introduction

## section 2: CSS Animations: Transforms and Transitions
### 1.1 Introduction To CSS Animations
- Examples:
  - [species-in-pieces](http://species-in-pieces.com/#).
  - [waaark](https://waaark.com/).
  
### 1.2 Why Animations Matter
- Getting things to move is easy, but planning how they should move is hard.
### Intro To Pseudoclasses
- [Pseudoclasses](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).
### 1.3 Pseudo-Classes: Hover
- Trigger by a user mousing over.
- [Hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover).
### 1.4 Pseudo-Classes: Focus
- Triggers when an element receives focus.
- Just for inputs.
- [Focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus).
### 1.5 Pseudo-Classes: Active
- Triggers when an element is being activated by user.
- By taping and hold on the element.
- [ِActive](https://developer.mozilla.org/en-US/docs/Web/CSS/:active).
### Quick Pseudoclasses Exercise
- [Starter Code](https://codepen.io/Colt/pen/vJRddz?editors=1100).
- [Quick Pseudoclasses Exercise](https://codepen.io/Mai_Abdulhamid/pen/YzGwwPJ?editors=1100).
### 1.6 Building An Animated Button
- [Starter Code](https://codepen.io/Colt/pen/KqmRRz).
- [Animated Button](https://codepen.io/Mai_Abdulhamid/pen/BaLjBBp).
### 1.7 Introduction to Transform
- Transform: lets you move, warp, rotate and scale elements.
- Syntax -> translate: function().
- [MDN-Transform-Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform?v=control).
### 1.8 Transform: Translate
- Move something around.
- transform: translate( translateX, translateY ).
- It usually happens when it's triggers. it's not usually happens when the page loads.
- [Example](https://codepen.io/Colt/pen/GEmOjv?editors=1100).
### 1.9 Transform:Scale() and Transform-Origin
- Alter the size of an element, increase the size or shrink down elements.
- transform: scale(scaleX, scaleY).
- Every aspect of the element scaled, like border , text, and so on.
- [Transform-Origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin): It takes the original origin which is the **middle** of the element, and scale it from there.
- The default otigin is the center.
### 1.10 Transform: Rotate()
- Rotate elements on the page.
- transform: rotate(num deg).
- if num is positive the rotation will be clockwise, if it negative the rotation will be counterclockwise.
```
  transform: rotate(45deg) scale(2px 3px); //To add more than one transform function.
```
- [Angle Units](https://developer.mozilla.org/en-US/docs/Web/CSS/angle).
### 1.11 A Note on Vendor Prefixes
- For the nonstandered properties that not all browsers implement.
- [Vendor_Prefix MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix).
- [Autoprefixer](https://autoprefixer.github.io/).

### 1.12 Transitions Basics
- Transitions: Allows us to control animation speed when changing css properties.
- Transitions Properties:
  - transition-delay
  - transition-duration
  - transition-property
  - transition-timing-function
- [Transition MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 1.13 Transition-Duration and Transition-Property
- Transition-Duration: Specify how long should the transition last.
- Transition-Property: Specify what properities should be transitioned.
- [Example](https://codepen.io/Colt/pen/MoMNEw).
### 1.14 Transition-Timing-Function and Transition-Delay
- Transition-Delay: Specify how long of a delay before the transition starts.
- Transition-Timing-Function: what's the acceleration curve for the transition.
- [Easings](https://easings.net/).
- [Transition-Timing-Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
- [cubic-bezier](https://cubic-bezier.com).
### 1.15 Transition Shorthand
- transition: property duration timing-function delay, 
              anotherProperty duration timing-function delay.
- [Transition Shorthand MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition).
### 1.16 CSS Animation Performance
- What can be transitioned?
- What should be transitioned?
- [High-performance-animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
### 1.17 Building An Animated Gallery
- filter: 
- [Starter Code](https://codepen.io/Colt/pen/OjJbLo?editors=1100)
- [Animated Gallery](https://codepen.io/Mai_Abdulhamid/pen/wvzMKZL?editors=1100)

## Section 3: CSS Animations: Keyframes
Introduction to Keyframes
Codealong: Animated Rainbow Flashing Text
Other CSS Animation Properties
Exercise: Rising and Setting Sun Animation
Exercise SOLUTION : Rising and Setting Sun Animation
CSS Animation Shorthand
Building an Animated CSS Loading Icon
