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
  {id: 1, name: "Neo", title: "Matrix", imgsrc:"neo.jpg", found: false, picture_id: 1, x1: 100, x2: 120, y1: 100, y2: 120},
  {id: 2, name: "Ash", title: "Pokemon", imgsrc:"ash.jpg", found: false, picture_id: 1, x1: 200, x2: 220, y1: 200, y2: 220},
  {id: 3, name: "Mulder", title: "The X-Files", imgsrc:"mulder.jpeg", found: false, picture_id: 1, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 4, name: "Timon", title: "Timon", imgsrc:"timon.jpg", found: false, picture_id: 1, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 5, name: "Arthur", title: "Arthur", imgsrc:"arthur.png", found: false, picture_id: 1, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 6, name: "Falkor", title: "The Neverending Story", imgsrc:"falkor.jpg", found: false, picture_id: 2, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 7, name: "Goblin King", title: "Labyrinth", imgsrc:"goblinking.jpg", found: false, picture_id: 2, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 8, name: "Skeletor", title: "He-man", imgsrc:"skeletor.jpg", found: false, picture_id: 2, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 9, name: "Red Fraggle", title: "Fraggle Rock", imgsrc:"redfraggle.jpg", found: false, picture_id: 2, x1: 100, x2: 150, y1: 100, y2: 150},
  {id: 10, name: "Frosty", title: "Frosty the Snowman", imgsrc:"frosty.jpg", found: false, picture_id: 2, x1: 100, x2: 150, y1: 100, y2: 150}
])

