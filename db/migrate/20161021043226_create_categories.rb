class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title
      t.integer :session
      t.string :client
      t.string :projectname
      t.integer :time

      t.timestamps null: false
    end
  end
end
