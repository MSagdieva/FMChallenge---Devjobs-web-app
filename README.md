# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users of an application is able to:
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS.
- Bonus: Build this project as a full-stack application

### Screenshot

![FMChallenge-devjobs-web-app]()
![FMChallenge-devjobs-web-app]()

### Links

- Solution URL: [GitHub Page](https://github.com/MSagdieva/FMChallenge---Devjobs-web-app.git)
- Live Site URL: [Live site URL]()

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [React-Bootstrap](https://react-bootstrap.github.io/) - For styles

### What I learned
Basics skills:
- JS RestAPI fetching with error handling
- React Bootstrap layout
- React componenst layout and states
- Theme change states

Besides the challenge demans Application has an additional features: waiting page for process of data receiving process, error page for cases of WebExceptions as a result of data fetcing.

```js
// change Component layout in case of loading or error state
            {loading && <div className={(theme==="dark"? darkStyles.info_container: lightStyles.info_container)} style={
                    { width: "100%",
                    height: "90vh",
                    backgroundColor: "#FAFAFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}
                }><h3 style={
                    {color: "red",
                    fontSize: "28px"}}>A moment please...</h3></div>}
            {error && (
                <div className={(theme==="dark"? darkStyles.info_container: lightStyles.info_container)} style={
                    {width: "100%",
                    height: "90vh",
                    backgroundColor: "#FAFAFA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"}
                }>
                    <h3 style={
                    {color: "red",
                    fontSize: "28px"}
                }>{`There is a problem fetching the post data - ${error}`}
                    </h3>
                    </div>
                )}
```


```js

```

### Useful resources

- [ReactDocs](https://reactjs.org/docs/) - ReactDocs documentations is simple, full and very useful for development.
- [Async functions in UseEffect](https://devtrium.com/posts/async-functions-useeffect) - This is an useful article which helped me finally understand data fetching. I'd recommend it to anyone still learning this concept.


## Author

- GitHub - [@MSagdieva](https://github.com/MSagdieva/)
- Frontend Mentor - [@MSagdieva](https://www.frontendmentor.io/profile/MSagdieva)
- Email - [sagdieva.mariana@gmail.com](https://mailto:sagdieva.mariana@gmail.com)
- Telegram - [@it_maris](https://t.me/@it_maris)