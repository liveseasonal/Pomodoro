class AddColumnToPomodoroapp < ActiveRecord::Migration
  def change
    add_column :pomodoroapps, :time, :integer
  end
end
