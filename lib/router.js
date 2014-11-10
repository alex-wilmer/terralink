Router.configure({

 layoutTemplate: 'layout'

});

Router.route('/', {name: 'home'});
Router.route('/about', {name: 'about'});
Router.route('/contact', {name: 'contact'});