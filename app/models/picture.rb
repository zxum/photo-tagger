class Picture < ApplicationRecord
  has_many :characters
  has_one :scoreboard 
end
