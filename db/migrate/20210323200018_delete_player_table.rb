class DeletePlayerTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :players

    add_column :scoreboards, :playername, :string 
    add_column :scoreboards, :score, :string
  end
end
