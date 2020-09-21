class Kick < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :brands
  has_many :opinions

  validates :name, presence: true, length: { maximum: 255 }

  # Slugify kick name into a url safe param before create
  # Ex: 'Nike Shock'.parameterize => 'nike-shock'
  before_create lambda { |kick|
    kick.slug = kick.name.parameterize
  }

  # Get the average score of all opinions for a kick
  def calculate_average
    return 0 unless opinions.size.positive?

    avg = opinions.average(:score).to_f.round(2) * 100
    update_column(:average_score, avg)
  end
end
