class Scoreboard < ApplicationRecord
  belongs_to :picture
  has_many :players, dependent: :destroy
end
