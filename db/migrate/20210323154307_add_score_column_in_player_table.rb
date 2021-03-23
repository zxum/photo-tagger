class AddScoreColumnInPlayerTable < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :score, :string
  end
end
