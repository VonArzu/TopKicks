Rails.application.routes.draw do
  resources :brands, only: :index
  resources :kicks
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end