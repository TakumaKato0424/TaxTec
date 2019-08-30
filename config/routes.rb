Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
  root 'articles#index'
  resources :articles do
    resource :hurusato, only: %i[show]
    resource :keigen_shohizei, only: %i[show]
  end
end
