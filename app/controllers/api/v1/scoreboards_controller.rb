module Api 
  module V1
    class ScoreboardsController < ApplicationController

      def update 
        @scoreboard = Scoreboard.find_by(id: params[:id])
        @picture = Picture.find_by(id: @scoreboard.picture_id)
      end

    end
  end
end