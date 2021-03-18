class ModifyCharacterColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :characters, :x1 
    remove_column :characters, :x2 
    remove_column :characters, :y1 
    remove_column :characters, :y2 
    
    add_column :characters, :height, :float
    add_column :characters, :width, :float
    add_column :characters, :top, :float
    add_column :characters, :left, :float
  end
end
