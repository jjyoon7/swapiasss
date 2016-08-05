class PagesController < ApplicationController
  def home
      @home_params = params[:search_term]
      @data_from_api = JSON.parse(swapi_data(@home_params))
    # @chew_question_fav_human = Swapi.get_person(14)
    # @chew_question_from = Swapi.get_planet(14)
    # @chew_question_self = Swapi.get_person(13)
    # @chew_question_ship = Swapi.get_starship(10)
    # @chew_question_whip = Swapi.get_person(84)
  end

  def swapi_data(home_params)
    Swapi.get_person(home_params) ||
    Swapi.get_planet(home_params) ||
    Swapi.get_starship(home_params) ||
    Swapi.get_vehicle(home_params) ||
    Swapi.get_film(home_params)
  end
end

