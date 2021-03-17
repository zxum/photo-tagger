class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :title 
      t.integer :x1
      t.integer :x2 
      t.integer :y1 
      t.integer :y2 
      t.string :found 
      t.references :picture, foreign_key: true

      t.timestamps
    end
  end
end
