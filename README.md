# mailto-creation

> Create a custom mailto with data attributes

# Start

```
const mailto = new Mailto({
    selector: '.my-custom-selector',
    defaultSubject: 'My default subject'
});
```

```
mailto.init();
```

# Examples

Add class 'js_mailto' on the clicked element, with two data attributes : 'data-recipient' and 'data-subject'.
Subject is not obligatory, and your can set a default subject inside options.

```html
<a href="#" title="Send an e-mail to us" class="js_mailto" data-recipient="john@mailto-creation.fr" data-subject="Contact from website">
  Send an e-mail to us
</a>
```
