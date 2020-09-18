require 'test_helper'

class KicksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kick = kicks(:one)
  end

  test "should get index" do
    get kicks_url, as: :json
    assert_response :success
  end

  test "should create kick" do
    assert_difference('Kick.count') do
      post kicks_url, params: { kick: { name: @kick.name, user_id: @kick.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show kick" do
    get kick_url(@kick), as: :json
    assert_response :success
  end

  test "should update kick" do
    patch kick_url(@kick), params: { kick: { name: @kick.name, user_id: @kick.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy kick" do
    assert_difference('Kick.count', -1) do
      delete kick_url(@kick), as: :json
    end

    assert_response 204
  end
end
