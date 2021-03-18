class PictureSerializer
  include JSONAPI::Serializer
  attributes :imgsrc, :title, :id

  has_many :characters, serializer: CharacterSerializer
end
