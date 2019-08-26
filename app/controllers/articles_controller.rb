class ArticlesController < ApplicationController
  before_action :set_article, only: %i[show]

  def index
    @article = Article.all.order("created_at DESC")
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show

  end
  
  def edit; end;
  def update; end;
  def destroy; end;

  private
  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    # ToDo user_id をcurrent_user.idにするようにする
    params.require(:article).permit(:title, :description, :controller_name).merge(user_id: current_user.id)
  end
end
