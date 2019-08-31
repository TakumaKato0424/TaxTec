class KeigenShohizeisController < ApplicationController
  before_action :get_article
  
  def show; end

  def create
    @quiz = ConTaxQuiz.where( 'id >= ?', rand(ConTaxQuiz.first.id..ConTaxQuiz.last.id)).first
    respond_to do |format|
      format.html { redirect_to article_keigen_shohizei_path(@article.id) }
      format.json
    end
  end
end
