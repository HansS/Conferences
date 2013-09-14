Grunt is a JavaScript task runner, which is responsible for 'compilation' in the yeoman context. Fledged with various tasks, grunt will
  * Compile CoffeeScript to JavaScript
  * Compile Jade to HTML
  * Compile SCSS to CSS
  * Compress JavaScript and CSS
  * Compress images
  * Create image-maps
  * deploy the required bits from your app to a deployment location

Grunt is configured using a gruntfile either by using a `Gruntfile.js` or by using a `Gruntfile.coffee`

Defined taks can easily be executed by using the `grunt taskName` command. If you've marked a task as 'Default-Task' the you can just execute `grunt`
 