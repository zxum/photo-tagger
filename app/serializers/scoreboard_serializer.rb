class ScoreboardSerializer
  include JSONAPI::Serializer
  attributes :playername, :score, :picture_id
end
