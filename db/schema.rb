# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_21_071810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "brands_kicks", id: false, force: :cascade do |t|
    t.bigint "kick_id", null: false
    t.bigint "brand_id", null: false
  end

  create_table "brands_shoes", id: false, force: :cascade do |t|
    t.bigint "shoe_id", null: false
    t.bigint "brand_id", null: false
  end

  create_table "commentaries", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "score"
    t.string "shoe"
    t.bigint "shoe_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shoe_id"], name: "index_commentaries_on_shoe_id"
  end

  create_table "comments", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "score"
    t.string "kick"
    t.bigint "kick_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kick_id"], name: "index_comments_on_kick_id"
  end

  create_table "kickks", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "slug"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_kickks_on_user_id"
  end

  create_table "kicks", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_kicks_on_user_id"
  end

  create_table "opinions", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "score"
    t.string "kick"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_opinions_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "score"
    t.bigint "kicks_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["kicks_id"], name: "index_reviews_on_kicks_id"
  end

  create_table "shoes", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "slug"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_shoes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "commentaries", "shoes"
  add_foreign_key "kicks", "users"
  add_foreign_key "opinions", "users"
end
