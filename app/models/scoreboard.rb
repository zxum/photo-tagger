class Scoreboard < ApplicationRecord
  belongs_to :picture
  has_many :players, dependent: :destroy

  scope :filter_by_picture, -> (picture_id) { where picture_id: picture_id}
end
