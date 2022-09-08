package org.wavemaker.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.IncomeDAO;
import org.wavemaker.implementation.IncomeOperations;
import org.wavemaker.model.Income;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
public class IncomeServlet extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    private IncomeOperations incomeManager=new IncomeDAO();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if(request.getParameter("name")==null) {
            List<Income> incomeList = incomeManager.getAllIncome();
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(incomeList));
        }
        else{
            List<Income> searchList=incomeManager.searchIncome(request.getParameter("name"));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(searchList));
        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Income income= objectMapper.readValue(request.getReader(), Income.class);
        incomeManager.addIncome(income);
    }
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id=Integer.parseInt(request.getParameter("id"));
        incomeManager.deleteIncome(id);
    }
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
        Income income= objectMapper.readValue(request.getReader(), Income.class);
        incomeManager.updateIncome(income);
    }
}

