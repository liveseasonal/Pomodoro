class PomodoroappsController < ApplicationController
  before_action :set_pomodoroapp, only: [:show, :edit, :update, :destroy]

  # GET /pomodoroapps
  # GET /pomodoroapps.json
  def index
    @pomodoroapps = Pomodoroapp.all
  end

  # GET /pomodoroapps/1
  # GET /pomodoroapps/1.json
  def show
  end

  # GET /pomodoroapps/new
  def new
    @pomodoroapp = Pomodoroapp.new
  end

  # GET /pomodoroapps/1/edit
  def edit
  end

  # POST /pomodoroapps
  # POST /pomodoroapps.json
  def create
    @pomodoroapp = Pomodoroapp.new(pomodoroapp_params)

    respond_to do |format|
      if @pomodoroapp.save
        format.html { redirect_to @pomodoroapp, notice: 'Pomodoroapp was successfully created.' }
        format.json { render :show, status: :created, location: @pomodoroapp }
      else
        format.html { render :new }
        format.json { render json: @pomodoroapp.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pomodoroapps/1
  # PATCH/PUT /pomodoroapps/1.json
  def update
    respond_to do |format|
      if @pomodoroapp.update(pomodoroapp_params)
        format.html { redirect_to @pomodoroapp, notice: 'Pomodoroapp was successfully updated.' }
        format.json { render :show, status: :ok, location: @pomodoroapp }
      else
        format.html { render :edit }
        format.json { render json: @pomodoroapp.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pomodoroapps/1
  # DELETE /pomodoroapps/1.json
  def destroy
    @pomodoroapp.destroy
    respond_to do |format|
      format.html { redirect_to pomodoroapps_url, notice: 'Pomodoroapp was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pomodoroapp
      @pomodoroapp = Pomodoroapp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pomodoroapp_params
      params.require(:pomodoroapp).permit(:name, :client, :date, :projectname)
    end
end
