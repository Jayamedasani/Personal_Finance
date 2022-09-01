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
import java.net.http.HttpClient;
import java.util.List;


public class IncomeServlet extends HttpServlet {
    private ObjectMapper objectMapper = new ObjectMapper();
    private IncomeOperations incomeManager=new IncomeDAO();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        List<Income> incomeList = incomeManager.getAllIncome();
        response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(incomeList));
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        Income income= objectMapper.readValue(request.getReader(), Income.class);
        incomeManager.addIncome(income);
    }
    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Income income=objectMapper.readValue(req.getReader(),Income.class);
        incomeManager.deleteIncome(income);
    }
}

