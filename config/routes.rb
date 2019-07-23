Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html 
  root 'taxs#index'
  resources :taxs, only: %i(index)
end
