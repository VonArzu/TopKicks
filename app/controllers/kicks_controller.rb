class KicksController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_kick, only: [:show, :update, :destroy]

  # GET /kicks
  def index
    @kicks = Kick.all

    render json: @kicks
  end

  # GET /kicks/1
  def show
   
    @kick = Kick.find(params[:id])
    render​ ​json:​ ​@kick, ​include:​ ​:brands

    ​end

  # POST /kicks
  def create
    @kick = Kick.new(kick_params)
    @kick.user = @current_user

    if @kick.save
      render json: @kick, status: :created
    else
      render json: @kick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /kicks/1
  def update
    if @kick.update(kick_params)
      render json: @kick
    else
      render json: @kick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /kicks/1
  def destroy
    @kick.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kick
      @kick = @current_user.kicks.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def kick_params
      params.require(:kick).permit(:name, :user_id)
    end
end
