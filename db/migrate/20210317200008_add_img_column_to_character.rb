class AddImgColumnToCharacter < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :imgsrc, :string 
  end
end
