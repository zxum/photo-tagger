class RemoveScoreColumnFromScoreboard < ActiveRecord::Migration[6.1]
  def change
    remove_column :scoreboards, :starttime 
    remove_column :scoreboards, :endtime
  end
end
