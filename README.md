npm-tweet-server
================

### Why we love the letters n p m

This repository and its siblings are meant to be used alongside
a presentation I made called 'Why we love the letters n p m'.
The presentation itself is meant to be a basic introduction to
how to use npm to consume and produce npm packages. Because of
this, some things which typically would be setup beforehand (like
npm dependencies), have not been setup in order to provide an
educational experience.

To use the project you will want to checkout:

```
git clone git@github.com:mwinche/npm-tweet-filter.git
git clone git@github.com:mwinche/npm-tweet-page.git
git clone git@github.com:mwinche/npm-tweet-search.git
git clone git@github.com:mwinche/npm-tweet-server.git
```

Note: npm-tweet-search requires you to install your previously
configured Twitter app tokens. See
[npm-tweet-search](https://github.com/mwinche/npm-tweet-search)
for more information.

### The demo

When demoing, it is suggested to run your own local private npm
registry, as you can easily remove all published modules and
don't need to worry about naming collisions. It is also easy to
reset your machine to demo again. I recommend
[Sinopia](https://github.com/rlidwka/sinopia).

Just make sure that you set `registry=http://localhost:4873/` in
your `~/.npmrc` file and start up Sinopia before you demo.

To reset your private registry for another demo simply delete
`~/.config/sinopia/storage` and restart Sinopia.

### The project

This project features four modules `npm-tweet-filter`, `npm-tweet-page`,
`npm-tweet-search` and `npm-tweet-server`. The only module which depends
on any others is `npm-tweet-server` which depends on all three other modules
in this project.

As teaching linking and publish is part of the exercise, the dependencies are
not currently listed in `package.json`. As such, *do not expect everything to
work just because you ran `npm install` on each module*.

### Final note

The point of this project is to teach about npm. The code, while it
gets the job done, could absolutely be improved (writing some tests
would be a great start). Please take these repositories in the spirit
they are given.
