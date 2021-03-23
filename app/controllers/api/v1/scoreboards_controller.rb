module Api 
  module V1
    class ScoreboardsController < ApplicationController

      def show
        @scoreboard = Scoreboard.filter_by_picture(params[:id]).order(score: :asc).limit(10)
        # @scoreboard = Scoreboard.all

        render json: ScoreboardSerializer.new(@scoreboard).as_json
      end

      def create 
        @score = Scoreboard.new(scoreboard_params)
        @scoreboard = Scoreboard.all

        if @score.save 
          render json: ScoreboardSerializer.new(@scoreboard).as_json
        else 
          render json: { error: @scores.errors.messages }
        end
      end

      def update 
        @score = Scoreboard.find_by(id: params[:id])
        @score.update(scoreboard_params)
        
        render json: ScoreboardSerializer.new(@score).as_json
      end

      def scoreboard_params 
        params.require(:scoreboard).permit( :playername, :score, :picture_id )
      end

    end
  end
end