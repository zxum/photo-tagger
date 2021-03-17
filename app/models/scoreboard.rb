class Scoreboard < ApplicationRecord
  belongs_to :picture
  has_many :players
end
