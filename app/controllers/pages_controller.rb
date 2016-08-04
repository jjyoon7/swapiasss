class PagesController < ApplicationController
  require "swapi"

  def home
    @data_from_api = swapi_data(id)
  end

  def swapi_data(id)
    Swapi.get_person(people_id) ||
    Swapi.get_planet(planet_id) ||
    Swapi.get_starship(starship_id) ||
    Swapi.get_vehicle(vehicle_id) ||
    Swapi.get_film(film_id) ||
    Swapi.get_all("resource_type") # param is string so need to specify it?
  end

end

