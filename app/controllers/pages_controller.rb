class PagesController < ApplicationController
  require "swapi"

  def home
    @data_from_api = Swapi.get_person(id) || Swapi.get_planet(id)
  end

end
