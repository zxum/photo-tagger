class CreatePictures < ActiveRecord::Migration[6.1]
  def change
    create_table :pictures do |t|
      t.string :imgsrc 
      t.string :title 

      t.timestamps
    end
  end
end
