require 'bundler'
Bundler.require()



# Models



# Controllers
require './controllers/application_controller'
require './controllers/welcome_controller'


# Routes
map('/'){ run WelcomeController }
