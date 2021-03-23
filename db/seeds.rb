# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.delete_all 
Player.delete_all
Scoreboard.delete_all 
Picture.delete_all 

pictures = Picture.create([
  {id: 1, title: "Where in the 90's?", imgsrc:"most90spic.jpg"},
  {id: 2, title: "Where in the 80's?", imgsrc:"most80spic.jpg"}
])

characters = Character.create([
  {id: 1, name: "Neo", title: "Matrix", imgsrc:"neo.jpg", found: false, picture_id: 1, top: 27.0, left: 53.9, height: 4.0, width: 4.2},
  {id: 2, name: "Ash", title: "Pokemon", imgsrc:"ash.jpg", found: false, picture_id: 1, top: 46.0, left: 0.5, height: 6.0, width: 5.9},
  {id: 3, name: "Mulder", title: "The X-Files", imgsrc:"mulder.jpg", found: false, picture_id: 1, top: 34.0, left: 4.0, height: 6.0, width: 5.9},
  {id: 4, name: "Timon", title: "The Lion King", imgsrc:"timon.jpg", found: false, picture_id: 1, top: 19.5, left: 90.0, height: 3.5, width: 5.0},
  {id: 5, name: "Arthur", title: "Arthur", imgsrc:"arthur.jpg", found: false, picture_id: 1, top: 26.8, left: 85.5, height: 3.5, width: 5.0},
  {id: 6, name: "Falkor", title: "The Neverending Story", imgsrc:"falkor.jpg", found: false, picture_id: 2, top: 6.0, left: 52.5, height: 3.5, width: 5.0},
  {id: 7, name: "Goblin King", title: "Labyrinth", imgsrc:"goblinking.jpg", found: false, picture_id: 2, top: 28.5, left: 71.5, height: 2.5, width: 2.5},
  {id: 8, name: "Skeletor", title: "He-man", imgsrc:"skeletor.jpg", found: false, picture_id: 2, top: 29.5, left: 52.0, height: 5.0, width: 2.5},
  {id: 9, name: "Red Fraggle", title: "Fraggle Rock", imgsrc:"redfraggle.jpg", found: false, picture_id: 2, top: 63, left: 20, height: 6.0, width: 6.0},
  {id: 10, name: "Frosty", title: "Frosty the Snowman", imgsrc:"frosty.jpg", found: false, picture_id: 2, top: 5.5, left: 24.5, height: 4.5, width: 8}
])


