package org.wavemaker.servlet;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.wavemaker.dao.BalanceDAO;
import org.wavemaker.implementation.BalanceOperations;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

public class BalanceServlet extends HttpServlet {
    private BalanceOperations balanceManager=new BalanceDAO();
    private ObjectMapper objectMapper=new ObjectMapper();
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException {
        if (request.getParameter("name").equals("expenditure")) {
            Map<String, Integer> expenditureMap = balanceManager.getMonthExpenditure(Integer.parseInt(request.getParameter("month")), Integer.parseInt(request.getParameter("year")));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(expenditureMap));
        }
        else if (request.getParameter("name").equals("income")) {
            Map<String, Integer> expenditureMap = balanceManager.getMonthIncome(Integer.parseInt(request.getParameter("month")), Integer.parseInt(request.getParameter("year")));
            response.getWriter().write(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(expenditureMap));
        }
    }
}
