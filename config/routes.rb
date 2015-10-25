Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'

  post 'catches', to: 'catches#create', as: :catches
  get  'catches/retrieve', to: 'catches#retrieve', as: :catches_retrieve
end
