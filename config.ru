require 'bundler'
Bundler.require()



# Models



# Controllers
require './controllers/application_controller'
require './controllers/welcome_controller'
require './controllers/api/api_controller'
require './controllers/api/signups_controller'


# Routes
map('/'){ run WelcomeController }
map('/api/signups'){ run SignUpsController }
