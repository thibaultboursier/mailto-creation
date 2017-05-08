# mailto-creation

> Create a custom mailto with data attributes

# Start

You must first install NPM dependencies and run start script :

```
npm install
npm start
```

# How to use it

Mailto-creation use UMD (Universal Module Definition) pattern.

Global object :
```
const mailto = new Mailto({
    selector: '.my-custom-selector',
    defaultSubject: 'My default subject'
});

mailto.init();
```

AMD :
```
require(['Mailto'], (Mailto) => {
    const mailto = new Mailto({});

    mailto.init();
});
```

# Examples

Add class 'js_mailto' on the clicked element, with two data attributes : 'data-recipient' and 'data-subject'.
Subject is not obligatory, and your can set a default subject inside options.

```html
<a href="#" title="Send an e-mail to us" class="js_mailto" data-recipient="john@mailto-creation.fr" data-subject="Contact from website">
  Send an e-mail to us
</a>
```

# Demo

You can see demo by opening index.html file inside /demo folder.