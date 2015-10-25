class CreateCatches < ActiveRecord::Migration
  def change
    create_table :catches do |t|
      t.integer :fish_id
      t.decimal :lat, :precision => 10, :scale => 6
      t.decimal :lng, :precision => 10, :scale => 6
      t.datetime :date
      t.text :story

      t.timestamps null: false
    end
  end
end
