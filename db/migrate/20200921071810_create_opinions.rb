class CreateOpinions < ActiveRecord::Migration[6.0]
  def change
    create_table :opinions do |t|
      t.string :title
      t.string :description
      t.string :score
      t.string :kick
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
