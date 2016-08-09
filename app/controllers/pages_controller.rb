class PagesController < ApplicationController
  def home
    search_term = params[:search_term]
    if search_term.nil?
      flash.now[:danger] = "Ask chewie!"
      search_term
    else
      @person = JSON.parse(person(search_term))
      @planet = planet(@person)
    end
  end

  private

  def person(home_params)
      Swapi.get_person(home_params)
  end

  def planet(person)
    JSON.parse(Swapi.get_planet(person["homeworld"].scan(/.*(\d)\/$/).flatten[0]))
  end
end

