import java.io.IOException;
import javax.servlet.*;
import javax.servlet.http.*;

public class PageServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String name = request.getParameter("name");

        if(name != null && !name.equals("")){
            request.setAttribute("message", "Booking Confirmed for " + name);
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher("book.html");
        dispatcher.forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String page = request.getParameter("page");

        if(page == null || page.equals("")){
            page = "index.html";
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher(page);
        dispatcher.forward(request, response);
    }
}
