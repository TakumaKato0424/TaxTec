class Article < ApplicationRecord
  belongs_to :user

  with_options presence: true do
    validates :title
    validates :description
    validates :controller_name
    validates :user_id
  end
end
