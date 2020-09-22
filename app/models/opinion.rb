class Opinion < ApplicationRecord
  belongs_to :user
  belongs_to :kick
end
