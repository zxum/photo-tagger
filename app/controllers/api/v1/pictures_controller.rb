module Api 
  module V1
    class PicturesController < ApplicationController

      def index
        @pictures = Picture.all 

        render json: PictureSerializer.new(@pictures).as_json
      end

      def show 
        @picture = Picture.find_by(id: params[:id])

        render json: PictureSerializer.new(@picture, options).as_json
      end

      def options 
        @options ||= { include: %i[characters]}
      end

    end
  end
end