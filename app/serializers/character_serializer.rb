class CharacterSerializer
  include JSONAPI::Serializer
  attributes :imgsrc, :name, :title, :found, :picture_id, :height, :width, :top, :left, :id
end
