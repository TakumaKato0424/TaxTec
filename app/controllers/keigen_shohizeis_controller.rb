class KeigenShohizeisController < ApplicationController
  before_action :get_article
  
  def show; end

  def create
    respond_to do |format|
      format.html { redirect_to }
      format.json
    end
  end

end
