class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title, null: false, length: { maximum: 200 }
      t.text :description, null: false, length: { maximum: 1000 }
      t.string :controller_name, null: false
      t.references :user, null:false, foreign_key: true
      t.timestamps
    end
  end
end
