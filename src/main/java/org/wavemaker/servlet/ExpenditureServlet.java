package org.wavemaker.servlet;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.ExpenditureDAO;
import org.wavemaker.implementation.ExpenditureOperations;
import org.wavemaker.model.Expenditure;
import org.wavemaker.model.Income;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
public class ExpenditureServlet extends HttpServlet {
    ExpenditureOperations expenditureManager=new ExpenditureDAO();
    private ObjectMapper objectMapper = new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        if(request.getParameter("name")==null) {
            List<Expenditure> expenditureList = expenditureManager.getAllExpenditure();
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(expenditureList));
        }
        else{
            List<Expenditure> searchList=expenditureManager.searchExpenditure(request.getParameter("name"));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(searchList));
        }
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Expenditure expenditure= objectMapper.readValue(request.getReader(), Expenditure.class);
        System.out.println(expenditure);
        expenditureManager.addExpenditure(expenditure);
    }
    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws  IOException {
        Expenditure expenditure=objectMapper.readValue(request.getReader(),Expenditure.class);
        expenditureManager.deleteExpenditure(expenditure);
    }
    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
        Expenditure expenditure= objectMapper.readValue(request.getReader(), Expenditure.class);
        expenditureManager.updateExpenditure(expenditure);
    }
}
