class CreateJoinTableKicksBrands < ActiveRecord::Migration[6.0]
  def change
    create_join_table :kicks, :brands do |t|
      # t.index [:kick_id, :brand_id]
      # t.index [:brand_id, :kick_id]
    end
  end
end
