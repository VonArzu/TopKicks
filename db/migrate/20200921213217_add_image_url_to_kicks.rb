class AddImageUrlToKicks < ActiveRecord::Migration[6.0]
  def change
    add_column :kicks, :image_url, :string
  end
end
