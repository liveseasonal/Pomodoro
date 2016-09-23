require 'test_helper'

class PomodoroappsControllerTest < ActionController::TestCase
  setup do
    @pomodoroapp = pomodoroapps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:pomodoroapps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create pomodoroapp" do
    assert_difference('Pomodoroapp.count') do
      post :create, pomodoroapp: { client: @pomodoroapp.client, date: @pomodoroapp.date, name: @pomodoroapp.name, projectname: @pomodoroapp.projectname }
    end

    assert_redirected_to pomodoroapp_path(assigns(:pomodoroapp))
  end

  test "should show pomodoroapp" do
    get :show, id: @pomodoroapp
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @pomodoroapp
    assert_response :success
  end

  test "should update pomodoroapp" do
    patch :update, id: @pomodoroapp, pomodoroapp: { client: @pomodoroapp.client, date: @pomodoroapp.date, name: @pomodoroapp.name, projectname: @pomodoroapp.projectname }
    assert_redirected_to pomodoroapp_path(assigns(:pomodoroapp))
  end

  test "should destroy pomodoroapp" do
    assert_difference('Pomodoroapp.count', -1) do
      delete :destroy, id: @pomodoroapp
    end

    assert_redirected_to pomodoroapps_path
  end
end
