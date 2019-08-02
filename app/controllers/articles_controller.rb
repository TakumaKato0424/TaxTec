class ArticlesController < ApplicationController
  def index
    
    @article = Article.all.order("created_at DESC")
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.valid?
      @article.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show; end;
  def edit; end;
  def update; end;
  def destroy; end;

  private
  def article_params
    # ToDo user_id をcurrent_user.idにするようにする
    params.require(:article).permit(:title, :description).merge(user_id: 1)
  end
end
