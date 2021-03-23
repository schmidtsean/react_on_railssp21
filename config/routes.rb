Rails.application.routes.draw do
  
  # no longer for navigation, they are api calls/ api routes
  namespace :api do
    resources :todos
  end
end
