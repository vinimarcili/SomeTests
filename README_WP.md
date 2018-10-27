# Technical Test / Wordpress Theme creation

**Please read those instructions carefully**, it contains useful information to will help you complete the test successfully.

## Purpose

This test will ask you to create a theme for wordpress from scratch. 
Some goals are required and some are optional. 
The purpose is to create a simple blog following the layout that has been give alongside the starter theme.

To do the test, you will need to use the following languages :
- HTML / CSS
- SASS
- Javascript
- PHP

You might use as well :
- Typescript
- SASS Mixins
- Bootstrap Grid System ONLY

## Additional note

### Skeleton

This test provide a basic skeleton (starter theme) to help you get started You can choose to use it or start from
scratch, it's up to you. In any case, it is just a basic example you will need to improve.


## Required Goals

### Creating a home page

You don't need to create a dynamic header for the home page at first. The picture is centered in a fixed height header and the logo as well.

The first part is a highlighted article from the back office (using a specific category for exemple).

The second set of articles can be from an other category, and only the last 3 one articles of each category will be displayed.

Only display the first 4 lines of the content for the first article, and the first 2 lines for the others, as shown in the layout.

### Create a single page

When the user clicks on a post, he is sent to a new page showing the full article, the title and the cover picture.

### Add simple animations / transitions

There is a hover on the images of each article, showing an arrow which will tellshow the user that an action is available. Use CSS and/or javascript for that.

### Follow the design

The design of the page has to be the same as the layout sent. Be careful with the fonts, the spaces around each blocks and part of the pages.

The home page has to be responsive (the content must adapt itself to the size of the page when this one is resized by the user, not only reloaded with a new size).


## Optional Goals

**You are not required to do those goals to complete the test**!
But each completed additional goal will be a bonus for your review.

### Implement a paragraph mixin

You can create a mixin to make the paragraph, and show only the first 4 lines of a block, adding "..." at the end of it. Be carefull, the content might appear when you resize the window.

### Add javascript

You can add a popup that will open only when the user clicks on the first article. This popup will show the content of the single page without having to change page.

### Use Advanced Custom Fields plugin

You can use the ACF plugin to add fields to each articles.

### Use Custom Post Type plugin

You can use the Custom Post Type plugin to add a custom post type for one of the article part of the home page for exemple.

**End of optional Goals**


### Your idea

Propose and implement (a) new idea(s) for the blog to improve it.

## Expected completion time

Around 2 hours for a basic solution (and a little more if you want to fulfill the goals) using the provided starter theme.

## Launching the project
``` bash
> cd rsw_test
> npm install
> npm run gulp
```

You can have a look at the Gulpfile to see how it works. A livereload is available, you can use the livereload extension of Google Chrome.