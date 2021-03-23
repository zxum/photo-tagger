Rails.application.routes.draw do
  # Root path
  root "pages#index"

  # API paths from Rails
  namespace :api do 
    namespace :v1 do
      resources :pictures, param: :id
      resources :characters, only: :update
      resources :scoreboards, only: [:show, :create, :update], param: :id
    end
  end

  # Pass to React Router for any other path
  get '*path', to: 'pages#index', via: :all
end
