class WelcomeController < ApplicationController

  get '/' do
    erb :index
  end

  get '/signup' do
    erb :signup
  end
end
