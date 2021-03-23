class RemovePlayerIdFromScoreboard < ActiveRecord::Migration[6.1]
  def change
    remove_column :scoreboards, :player_id
  end
end
