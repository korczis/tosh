defmodule ToshWeb.PageController do
  use ToshWeb, :controller

  def index(conn, _params) do
    render(conn, "spa.html")
  end
end
