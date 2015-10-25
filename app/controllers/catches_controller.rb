class CatchesController < ApplicationController

	def create
    @catch = Catch.new(catch_params)
    @catch.save
    respond_to do |format|
      format.js
    end
	end

  def retrieve
    @catches = Catch.all
    respond_to do |f|
      f.json { render json: @catches }
    end
  end

	def catch_params
	  params.required(:catch).permit(:story, :lat, :lng)
	end
end
