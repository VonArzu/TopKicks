class BrandsController < ApplicationController
  before_action :set_brand, only: %i[show update destroy]

  # GET /brands
  def index
    @brands = Brand.all

    render json: @brands
  end

  # GET /brands/1
  def show
    render json: @brand
  end

  def add_brand_to_kick
    @kick = Kick.find(params[:kick_id])
    @brand = Brand.find(params[:id])

    @kick.brands << @brand

    render json: @kick, include: :brands
  end
end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_brand
#       @brand = Brand.find(params[:id])
#     end
# Commit message
#     # Only allow a trusted parameter "white list" through.
#     def brand_params
#       params.require(:brand).permit(:name)
#     end
# end
