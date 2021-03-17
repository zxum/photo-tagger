class CreateScoreboards < ActiveRecord::Migration[6.1]
  def change
    create_table :scoreboards do |t|
      t.references :picture 
      t.time :starttime
      t.time :endtime

      t.timestamps
    end
  end
end
