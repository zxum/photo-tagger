class Picture < ApplicationRecord
  has_many :characters, dependent: :destroy
  has_one :scoreboard, dependent: :destroy
end
