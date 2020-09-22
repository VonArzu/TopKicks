# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Opinion.destroy_all
Kick.destroy_all
User.destroy_all

user1 = User.create!(
  {
    username: 'admin',
    email: '123@gmail.com',
    password: '123456'
  }
)
puts "#{User.count} user created"

kicks = Kick.create!([{
                       name: 'AIR JORDAN 4 RETRO OG BRED 2019',
                       user: user1,
                       image_url: 'https://image.goat.com/crop/375/attachments/product_template_additional_pictures/images/020/806/492/original/461782_01.jpg.jpeg?1555959706'
                     },
                      {
                        name: 'AIR MAX UPTEMPO 97 COLLEGE NAVY',
                        user: user1,
                        image_url: 'https://image.goat.com/crop/375/attachments/product_template_pictures/images/013/038/298/original/399207_101.png.png'
                      },
                      {
                        name: 'AIR JORDAN 14 RETRO HYPER ROYAL',
                        user: user1,
                        image_url: 'https://image.goat.com/crop/375/attachments/product_template_pictures/images/042/668/444/original/487471_104_goat.png'

                      },
                      {
                        name: 'AIR JORDAN 11 RETRO SPACE JAM 2016',
                        user: user1,
                        image_url: 'https://image.goat.com/crop/375/attachments/product_template_additional_pictures/images/008/491/231/original/52015_01.jpg.jpeg?1513117130'

                      }])

puts "#{Kick.count} kicks created"

opinions = Opinion.create!([{
                             title: 'Best Nikes',
                             description: 'I have 5 pairs',
                             score: '5',
                             user: user1,
                             kick: kicks[0]

                           },

                            { title: 'Worst Nikes',
                              description: 'Ripped soles in a week use',
                              score: '1',
                              user: user1,
                              kick: kicks[3] }])

puts "#{Opinion.count} opinions created"
