package org.wavemaker.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.SavingsDAO;
import org.wavemaker.implementation.SavingsOperations;
import org.wavemaker.model.Income;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
public class SavingsServlet extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    private SavingsOperations savingManager=new SavingsDAO();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if(request.getParameter("month")!=null && request.getParameter("year")!=null){
            int balance = savingManager.getBalanceInMonth(Integer.parseInt(request.getParameter("month")),Integer.parseInt(request.getParameter("year")));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(balance));
        }
        else if(request.getParameter("year")!=null && request.getParameter("month")==null ){
            HashMap<Integer,Integer> savingsMap=savingManager.getYearBalance(Integer.parseInt(request.getParameter("year")));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(savingsMap));
        }
        else{
            int balance=savingManager.getCurrentBalance();
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(balance));
        }
    }
}
