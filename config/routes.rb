Rails.application.routes.draw do
  root 'pages#home'
  # get 'info', to: 'pages#info'
  get 'http://swapi.co/api/people/:id/', to: "pages#home"
end
