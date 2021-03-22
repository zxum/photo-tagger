module Api
  module V1
    class CharactersController < ApplicationController
      skip_before_action :verify_authenticity_token

      def update 
        @character = Character.find_by(id: params[:id])
        @picture = Picture.find_by(id: @character.picture_id)
        @character.update(character_params)
        @characters = @picture.characters 
        
        render json: CharacterSerializer.new(@characters).as_json
      end

      def character_params 
        params.require(:character).permit( :found )
      end
    end
  end
end