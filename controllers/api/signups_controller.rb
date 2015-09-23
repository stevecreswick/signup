class SignUpsController < ApiController



def signupParams
  @signupParams = @signupParams || JSON.parse(request.body.read)
end

get '/' do
  content_type :json
  Signup.all.to_json
end

post '/' do
  content_type :json
  signup = Signup.create( params[:signup] || signupParams )
  signup.to_json
end

delete '/:id' do
  content_type :json
  Signup.destroy(params[:id])
  halt 202
end



end
