class CreateSignups < ActiveRecord::Migration

  def change
    create_table :signups do |t|
    t.string :username
    t.string :email
    t.integer :phone_number
    t.timestamps

    end

  end
end
