class CreatePomodoroapps < ActiveRecord::Migration
  def change
    create_table :pomodoroapps do |t|
      t.string :name
      t.string :client
      t.datetime :date
      t.string :projectname

      t.timestamps null: false
    end
  end
end
