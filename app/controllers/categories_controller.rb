class CategoriesController < ApplicationController

  def new 
    @categories = categories.all
  end

  def show 
    @category = Category.find(params[:id])
  end  

  def edit
    @category = category.find(params[:id])
  end
 
  def create
    @category = Category.new(category_params)
 
    if @category.save
      redirect_to @category
    else
      render 'new'
    end
  end
  
  def update
    @category = Category.find(params[:id])
   
    if @category.update(category_params)
      redirect_to @category
    else
      render 'edit'
    end
  end
 
 private
  def category_params
    params.require(:category).permit(:title, :text)
  end
    
end
