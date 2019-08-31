class CreateConTaxQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :con_tax_quizzes do |t|
      t.text :example, null: false, unique: true
      t.string :answer, null: false
      t.text :explanation, null: false
      t.timestamps
    end
  end
end
