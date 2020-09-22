class Kick < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :brands
  has_many :opinions

  validates :name, presence: true, length: { maximum: 255 }
end
